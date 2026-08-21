
const DB = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch(e){ return fallback; }
  },
  set(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
};

const CATS = [
  { id:'alimentacion', name:'Alimentación', color:'#1ec87a', icon:'🛒' },
  { id:'transporte',   name:'Transporte',   color:'#4436e2', icon:'🚗' },
  { id:'ocio',         name:'Ocio',         color:'#ff8a3d', icon:'🎬' },
  { id:'compras',      name:'Compras',      color:'#ff4d8f', icon:'🛍️' },
  { id:'salud',        name:'Salud',        color:'#00b8d9', icon:'💊' },
  { id:'hogar',        name:'Hogar',        color:'#8b5cf6', icon:'🏠' },
  { id:'nomina',       name:'Nómina',       color:'#1ec87a', icon:'💼' },
  { id:'otros',        name:'Otros',        color:'#8b8b93', icon:'⋯' },
];

async function sha256(text){
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

let state = {
  pinHash: DB.get('pinHash', null),
  userName: DB.get('userName', ''),
  avatar: DB.get('avatar', null),
  darkMode: DB.get('darkMode', false),
  transactions: DB.get('transactions', []),
};
let enteredPin = '';
let currentType = 'expense';
let selectedCat = null;
let currentPay = 'card';
let logoUrlCache = {};
let searchQuery = '';

const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

window.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  buildCategoryChips();
  wireKeypad('#lock-keypad', onLockDigit);
  wireKeypad('#setup-keypad', onSetupDigit);
  wireHome();
  wireSettings();
  wireSheet();
  renderAvatar();
  renderGreeting();
  renderHome();

  setTimeout(()=>{
    $('#splash').classList.add('hidden');
    if (!state.pinHash) {
      $('#setup').classList.add('show');
      wireNameStep();
    } else {
      $('#lock').classList.remove('hidden');
    }
  }, 1300);
});

function applyTheme(){
  document.body.classList.toggle('dark', !!state.darkMode);
}
function toggleTheme(){
  state.darkMode = !state.darkMode;
  DB.set('darkMode', state.darkMode);
  applyTheme();
  $('#dark-switch').classList.toggle('on', state.darkMode);
}

function wireNameStep(){
  const input = $('#name-input');
  const btn = $('#name-continue');
  input.addEventListener('input', ()=> { btn.disabled = input.value.trim().length === 0; });
  btn.addEventListener('click', ()=>{
    state.userName = input.value.trim();
    DB.set('userName', state.userName);
    $('#step-name').classList.remove('active');
    $('#step-pin').classList.add('active');
  });
}

let setupStage = 1; // 1 = elegir, 2 = repetir
let firstPin = '';

function onSetupDigit(d){
  const dotsEl = $('#setup-dots');
  if (d === 'del') { firstPinBackspace(); return; }
  let pin = setupStage === 1 ? firstPin : enteredPin;
  if (pin.length >= 4) return;
  pin += d;
  if (setupStage === 1) firstPin = pin; else enteredPin = pin;
  renderDots(dotsEl, pin.length);
  if (pin.length === 4) {
    setTimeout(async () => {
      if (setupStage === 1) {
        setupStage = 2;
        enteredPin = '';
        $('#setup-sub').textContent = 'Repite tu código';
        renderDots(dotsEl, 0);
      } else {
        if (enteredPin === firstPin) {
          state.pinHash = await sha256(enteredPin);
          DB.set('pinHash', state.pinHash);
          $('#setup').classList.remove('show');
          unlockApp();
        } else {
          dotsEl.classList.add('shake');
          $$('#setup-dots .pin-dot').forEach(d=>d.classList.add('err'));
          setTimeout(()=>{
            dotsEl.classList.remove('shake');
            setupStage = 1; firstPin=''; enteredPin='';
            $('#setup-sub').textContent = 'Crea un código de 4 dígitos';
            renderDots(dotsEl, 0);
          }, 500);
        }
      }
    }, 120);
  }
}
function firstPinBackspace(){
  if (setupStage === 1) { firstPin = firstPin.slice(0,-1); renderDots($('#setup-dots'), firstPin.length); }
  else { enteredPin = enteredPin.slice(0,-1); renderDots($('#setup-dots'), enteredPin.length); }
}

function onLockDigit(d){
  const dotsEl = $('#lock-dots');
  if (d === 'del') { enteredPin = enteredPin.slice(0,-1); renderDots(dotsEl, enteredPin.length); return; }
  if (enteredPin.length >= 4) return;
  enteredPin += d;
  renderDots(dotsEl, enteredPin.length);
  if (enteredPin.length === 4) {
    setTimeout(async () => {
      const hash = await sha256(enteredPin);
      if (hash === state.pinHash) {
        unlockApp();
      } else {
        dotsEl.classList.add('shake');
        $$('#lock-dots .pin-dot').forEach(d=>d.classList.add('err'));
        $('#lock-error').classList.add('show');
        navigator.vibrate && navigator.vibrate(80);
        setTimeout(()=>{ dotsEl.classList.remove('shake'); enteredPin=''; renderDots(dotsEl,0); }, 450);
      }
    }, 100);
  }
}
function unlockApp(){
  enteredPin = '';
  $('#lock').classList.add('hidden');
  $('#app').classList.add('show');
  renderGreeting();
}
function renderDots(container, count){
  const dots = container.querySelectorAll('.pin-dot');
  dots.forEach((el,i)=>{
    el.classList.toggle('filled', i < count);
    el.classList.remove('err');
  });
}
function wireKeypad(sel, handler){
  $(sel).querySelectorAll('.key').forEach(k=>{
    k.addEventListener('click', ()=> {
      const v = k.dataset.k;
      if (v !== undefined) handler(v);
    });
  });
}

function renderGreeting(){
  const h = new Date().getHours();
  let saludo = 'Buenos días';
  if (h >= 12 && h < 20) saludo = 'Buenas tardes';
  else if (h >= 20 || h < 6) saludo = 'Buenas noches';
  const name = state.userName ? `, <b>${escapeHtml(state.userName)}</b>` : '';
  $('#greeting').innerHTML = `${saludo}${name}`;
}
function renderAvatar(){
  const el = $('#avatar-btn');
  if (state.avatar) {
    el.style.backgroundImage = `url(${state.avatar})`;
    el.textContent = '';
  } else {
    el.style.backgroundImage = '';
    el.textContent = state.userName ? state.userName.trim()[0].toUpperCase() : 'G';
  }
}
function wireHome(){
  $('#avatar-btn').addEventListener('click', ()=> $('#avatar-file').click());
  $('#avatar-file').addEventListener('change', onAvatarChange);
  $('#gear-btn').addEventListener('click', ()=> openSettings());
  $('#settings-back').addEventListener('click', ()=> closeSettings());
  $('#qa-expense').addEventListener('click', ()=> openSheet('expense'));
  $('#qa-income').addEventListener('click', ()=> openSheet('income'));
  $('#qa-details').addEventListener('click', ()=> showToast('Próximamente'));
  $('#qa-more').addEventListener('click', ()=> showToast('Próximamente'));
  $('#accounts-btn').addEventListener('click', ()=> showToast('Próximamente'));
  $('#search-input').addEventListener('input', (e)=>{
    searchQuery = e.target.value.trim().toLowerCase();
    renderHome();
  });
}
function onAvatarChange(e){
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.avatar = reader.result;
    DB.set('avatar', state.avatar);
    renderAvatar();
  };
  reader.readAsDataURL(file);
  e.target.value = '';
}
function openSettings(){
  $('#dark-switch').classList.toggle('on', state.darkMode);
  $('#tx-count').textContent = state.transactions.length;
  $('#page-home').classList.remove('active');
  $('#page-settings').classList.add('active');
}
function closeSettings(){
  $('#page-settings').classList.remove('active');
  $('#page-home').classList.add('active');
}

function buildCategoryChips(){
  const grid = $('#cat-grid');
  grid.innerHTML = CATS.map(c=>
    `<button type="button" class="chip" data-cat="${c.id}"><span>${c.icon}</span>${c.name}</button>`
  ).join('');
  grid.querySelectorAll('.chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      grid.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      selectedCat = chip.dataset.cat;
      validateForm();
    });
  });
}

function wireSheet(){
  $('#sheet-close').addEventListener('click', closeSheet);
  $('#sheet-backdrop').addEventListener('click', closeSheet);
  $('#type-expense').addEventListener('click', ()=> setType('expense'));
  $('#type-income').addEventListener('click', ()=> setType('income'));
  $('#pay-cash').addEventListener('click', ()=> setPay('cash'));
  $('#pay-card').addEventListener('click', ()=> setPay('card'));
  $('#amount-input').addEventListener('input', validateForm);
  $('#merchant-input').addEventListener('input', (e)=>{
    debounceLogo(e.target.value);
    validateForm();
  });
  $('#save-tx').addEventListener('click', saveTransaction);
}
function setType(t){
  currentType = t;
  $('#type-expense').classList.toggle('active', t==='expense');
  $('#type-income').classList.toggle('active', t==='income');
  validateForm();
}
function setPay(p){
  currentPay = p;
  $('#pay-cash').classList.toggle('active', p==='cash');
  $('#pay-card').classList.toggle('active', p==='card');
}
function openSheet(type){
  $('#amount-input').value = '';
  $('#merchant-input').value = '';
  $('#date-input').value = new Date().toISOString().slice(0,10);
  $('#logo-preview').innerHTML = '';
  $$('#cat-grid .chip').forEach(c=>c.classList.remove('active'));
  selectedCat = null;
  setType(type || 'expense');
  setPay('card');
  validateForm();
  $('#sheet-backdrop').classList.add('show');
  $('#add-sheet').classList.add('show');
  setTimeout(()=> $('#amount-input').focus(), 350);
}
function closeSheet(){
  $('#sheet-backdrop').classList.remove('show');
  $('#add-sheet').classList.remove('show');
}
function validateForm(){
  const amt = parseFloat($('#amount-input').value);
  const merchant = $('#merchant-input').value.trim();
  const ok = amt > 0 && merchant.length > 0 && selectedCat;
  $('#save-tx').disabled = !ok;
}

let logoDebounce;
function debounceLogo(name){
  clearTimeout(logoDebounce);
  const preview = $('#logo-preview');
  if (!name.trim()) { preview.innerHTML=''; return; }
  logoDebounce = setTimeout(()=> fetchLogo(name.trim(), preview), 400);
}
function guessDomain(name){
  return name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9\s]/g,'')
    .trim().replace(/\s+/g,'') + '.com';
}
async function fetchLogo(name, previewEl){
  const domain = guessDomain(name);
  const url = `https://logo.clearbit.com/${domain}`;
  previewEl.innerHTML = `<span>Buscando logo…</span>`;
  const img = new Image();
  img.onload = () => {
    logoUrlCache[name] = url;
    previewEl.innerHTML = `<img src="${url}"><span>Logo encontrado para ${domain}</span>`;
  };
  img.onerror = () => {
    delete logoUrlCache[name];
    previewEl.innerHTML = `<span>Sin logo — se usarán las iniciales</span>`;
  };
  img.src = url;
}

function saveTransaction(){
  const amt = parseFloat($('#amount-input').value);
  const merchant = $('#merchant-input').value.trim();
  const date = $('#date-input').value || new Date().toISOString().slice(0,10);
  const now = new Date();
  const tx = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2,6),
    type: currentType,
    amount: Math.abs(amt),
    merchant,
    category: selectedCat,
    payment: currentPay,
    date,
    time: now.toTimeString().slice(0,5),
    logo: logoUrlCache[merchant] || null,
  };
  state.transactions.unshift(tx);
  DB.set('transactions', state.transactions);
  closeSheet();
  renderHome();
  showToast(currentType==='expense' ? 'Gasto añadido' : 'Ingreso añadido');
}

function deleteTransaction(id){
  state.transactions = state.transactions.filter(t=>t.id!==id);
  DB.set('transactions', state.transactions);
  renderHome();
  showToast('Movimiento eliminado');
}

function fmt(n){
  return n.toLocaleString('es-ES', {minimumFractionDigits:2, maximumFractionDigits:2}) + ' €';
}
function catInfo(id){ return CATS.find(c=>c.id===id) || CATS[CATS.length-1]; }

function renderHome(){
  const income = state.transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const expense = state.transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const balance = income - expense;
  $('#balance-amount').textContent = fmt(balance);

  const list = $('#tx-list');
  let items = state.transactions.slice();
  if (searchQuery) {
    items = items.filter(t => t.merchant.toLowerCase().includes(searchQuery));
  }
  if (items.length === 0) {
    list.innerHTML = `<div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10h18M7 15h2m4 0h4M5 6h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/></svg>
      <p>${searchQuery ? 'Sin resultados para tu búsqueda.' : 'Aún no hay movimientos.<br>Toca un botón de arriba para añadir el primero.'}</p>
    </div>`;
    return;
  }
  items.sort((a,b)=> (b.date+b.time).localeCompare(a.date+a.time));
  list.innerHTML = items.map(t=>{
    const c = catInfo(t.category);
    const logo = t.logo
      ? `<img src="${t.logo}" onerror="this.parentElement.textContent='${initials(t.merchant)}'">`
      : initials(t.merchant);
    const accountLabel = t.payment === 'cash' ? 'Efectivo' : 'Tarjeta débito';
    return `<div class="tx-row" data-id="${t.id}">
      <div class="tx-logo">${logo}</div>
      <div class="tx-info">
        <div class="tx-name">${escapeHtml(t.merchant)}</div>
        <div class="tx-meta">${formatDay(t.date)}, ${t.time} · ${c.name}</div>
      </div>
      <div class="tx-right">
        <div class="tx-amount ${t.type==='income'?'pos':'neg'}">${t.type==='income'?'+':'-'}${fmt(t.amount)}</div>
        <div class="tx-account">${accountLabel}</div>
      </div>
    </div>`;
  }).join('');

  list.querySelectorAll('.tx-row').forEach(row=>{
    let pressTimer;
    const start = ()=>{ pressTimer = setTimeout(()=> confirmDelete(row.dataset.id), 550); };
    const cancel = ()=> clearTimeout(pressTimer);
    row.addEventListener('touchstart', start);
    row.addEventListener('touchend', cancel);
    row.addEventListener('mousedown', start);
    row.addEventListener('mouseup', cancel);
  });
}
function confirmDelete(id){
  if (confirm('¿Eliminar este movimiento?')) deleteTransaction(id);
}
function initials(name){
  return name.trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();
}
function escapeHtml(s){
  return s.replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function formatDay(dstr){
  const d = new Date(dstr+'T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  const diff = Math.round((today - d)/86400000);
  if (diff===0) return 'Hoy';
  if (diff===1) return 'Ayer';
  return d.toLocaleDateString('es-ES', {day:'numeric', month:'short'});
}

function wireSettings(){
  $('#dark-switch').addEventListener('click', toggleTheme);
  $('#export-btn').addEventListener('click', exportData);
  $('#import-btn').addEventListener('click', ()=> $('#import-file').click());
  $('#import-file').addEventListener('change', importData);
  $('#reset-btn').addEventListener('click', resetData);
  $('#changepin-btn').addEventListener('click', ()=>{
    DB.set('pinHash', null);
    location.reload();
  });
}
function exportData(){
  const payload = { transactions: state.transactions, exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `fyn-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Datos exportados');
}
function importData(e){
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!Array.isArray(data.transactions)) throw new Error('formato inválido');
      if (confirm(`Se importarán ${data.transactions.length} movimientos. ¿Reemplazar los datos actuales?`)) {
        state.transactions = data.transactions;
        DB.set('transactions', state.transactions);
        renderHome();
        $('#tx-count').textContent = state.transactions.length;
        showToast('Datos importados');
      }
    } catch(err){
      alert('El archivo no es un backup válido.');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}
function resetData(){
  if (confirm('Esto borrará todos los movimientos guardados en este dispositivo. ¿Continuar?')) {
    state.transactions = [];
    DB.set('transactions', []);
    renderHome();
    $('#tx-count').textContent = 0;
    showToast('Datos borrados');
  }
}

let toastTimer;
function showToast(msg){
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 1800);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', ()=> navigator.serviceWorker.register('sw.js').catch(()=>{}));
}
