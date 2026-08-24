
const I18N = {
  en: {
    'lang.title':'Choose your language','lang.subtitle':'You can change this later in settings.',
    'action.continue':'Continue','action.add':'Add','action.save':'Save','action.resetDefault':'Reset to default','action.done':'Done','action.skip':'Skip',
    'name.title':"What's your name?",'name.placeholder':'Your name',
    'pronoun.title':'Which pronouns do you use?','pronoun.subtitle':'This helps Fyn address you the way you prefer.',
    'pronoun.he':'He/him','pronoun.she':'She/her','pronoun.they':'They/them','pronoun.unspecified':'Prefer not to say',
    'currency.title':'Choose your currency','currency.usd':'US Dollar (USD)','currency.eur':'Euro (EUR)',
    'accounts.title':'Add your accounts','accounts.subtitle':'Add at least one account to continue. You can add as many as you like. You can also add more accounts later.',
    'accounts.cash':'Cash','accounts.card':'Debit card','accounts.yours':'Your accounts','accounts.btn':'Accounts','accounts.networth':'Net worth',
    'accounts.addEdit':'Add or edit accounts','accounts.manageTitle':'Add or edit accounts','accounts.manageSub':'Manage your Fyn accounts.',
    'field.name':'Name','field.description':'Description (optional)','field.descriptionPlain':'Description','field.initialBalance':'Initial balance',
    'theme.title':'Choose your theme','theme.light':'Light','theme.dark':'Dark',
    'hue.title':'Choose your accent tone','hue.subtitle':'Drag to pick the shade for your gradient background.',
    'pin.create':'Create a 4-digit code','pin.repeat':'Repeat your code','pin.enterCurrent':'Enter your current code','pin.enterImport':'Enter this backup\'s code',
    'lock.subtitle':'Enter your code','lock.error':'Incorrect code',
    'lock.forgotPin':'Forgot your PIN?',
    'lock.forgotWarning':'If you forgot your PIN, you now have to clear all app data to get back in. This will permanently delete all your transactions and accounts in this browser.',
    'lock.eraseData':'Clear data',
    'welcome.he':'Welcome','welcome.she':'Welcome','welcome.they':'Welcome','welcome.unspecified':'Welcome',
    'greeting.morning':'Good morning','greeting.afternoon':'Good afternoon','greeting.evening':'Good evening',
    'search.placeholder':'Search','balance.label':'Balance',
    'qa.expense':'Add expense','qa.income':'Add income','qa.details':'Details','qa.more':'More',
    'movements.title':'Transactions','movements.showAll':'Show all','movements.all':'All movements',
    'filter.title':'Filters','filter.period':'Period','filter.all':'All','filter.day':'Day','filter.week':'Week','filter.month':'Month','filter.year':'Year',
    'filter.merchant':'Establishment','filter.category':'Category','filter.allCategories':'All categories',
    'filter.account':'Account','filter.allAccounts':'All accounts',
    'filter.apply':'Apply filters','filter.clear':'Clear filters',
    'empty.noMovements':'No transactions yet.<br>Tap a button above to add your first one.',
    'empty.noResults':'No results for your search.',
    'day.today':'Today','day.yesterday':'Yesterday',
    'sheet.title':'New transaction','sheet.editTitle':'Edit movement','type.expense':'Expense','type.income':'Income',
    'action.edit':'Edit','txdetail.date':'Date & time',
    'field.merchant':'Name','merchant.placeholder':'e.g. Mercadona, Netflix, Amazon…',
    'desc.placeholder':'Note','cat.search':'Search categories',
    'field.category':'Category','field.account':'Account','field.date':'Date','action.save2':'Save',
    'logo.searching':'Searching logo…','logo.found':'Logo found for {d}','logo.notfound':'No logo found — initials will be used',
    'toast.expenseAdded':'Expense added','toast.incomeAdded':'Income added','toast.updated':'Movement updated','toast.deleted':'Transaction deleted','toast.comingSoon':'Coming soon',
    'confirm.delete':'Delete this transaction?',
    'confirm.deleteAccount':'Are you sure you want to delete this account?',
    'accounts.needAtLeastOne':'You must have at least one account to continue.',
    'settings.title':'Settings','settings.darkMode':'Dark mode',
    'settings.language':'Language','settings.pronoun':'Pronouns','settings.accentTone':'Accent tone',
    'settings.languageHint':'To fully apply the language change, reload the web page.',
    'nav.home':'Home','nav.stats':'Statistics',
    'settings.profile':'Profile settings','profile.title':'Profile','profile.name':'Name',
    'settings.changePin':'Change PIN','settings.change':'Change','settings.createPin':'Create password','settings.createBtn':'Create','settings.deletePin':'Delete password',
    'settings.export':'Export data (.json)','settings.exportBtn':'Export',
    'settings.import':'Import data (.json)','settings.importBtn':'Import',
    'settings.deleteAll':'Delete all data','settings.deleteBtn':'Delete',
    'toast.exported':'Data exported','toast.imported':'Data imported','toast.dataDeleted':'Data deleted','toast.pinChanged':'PIN changed','toast.pinCreated':'Password created','toast.pinDeleted':'Password deleted',
    'confirm.import':'This will import {n} transactions. Replace current data?',
    'error.invalidBackup':'This file is not a valid backup.',
    'confirm.reset':'This will delete all transactions saved on this device. Continue?',
    'delete.warning':'When you clear all data, you will delete all activity, accounts, and everything related to Fyn in this browser. Export your data (.json) before clearing all data, just in case. To completely clear all data, clear this website\'s data from your browser settings.',
    'delete.cancel':'Cancel','delete.continue':'Continue','delete.pinPrompt':'Enter your PIN to confirm',
    'cat.supermarket':'Supermarket','cat.restaurant':'Restaurant','cat.salary':'Salary','cat.transport':'Transport',
    'cat.leisure':'Leisure','cat.housing':'Housing','cat.shopping':'Shopping','cat.clothing':'Clothing',
    'cat.subscriptions':'Subscriptions','cat.health':'Health','cat.travel':'Travel',
    'cat.gifts':'Gifts','cat.food':'Food','cat.other':'Other','cat.bills':'Bills','cat.personalCare':'Personal care',
    'cat.education':'Education','cat.donations':'Donations','cat.sideJob':'Side job','cat.refunds':'Refunds',
    'cat.aid':'Benefits','cat.sales':'Sales','cat.transfersIn':'Transfers received',
  },
  es: {
    'lang.title':'Elige tu idioma','lang.subtitle':'Podrás cambiarlo más tarde en ajustes.',
    'action.continue':'Continuar','action.add':'Añadir','action.save':'Guardar','action.resetDefault':'Restaurar por defecto','action.done':'Listo','action.skip':'Omitir',
    'name.title':'¿Cómo te llamas?','name.placeholder':'Tu nombre',
    'pronoun.title':'¿Qué pronombres usas?','pronoun.subtitle':'Esto ayuda a Fyn a dirigirse a ti como prefieras.',
    'pronoun.he':'Él','pronoun.she':'Ella','pronoun.they':'Elle','pronoun.unspecified':'Prefiero no decirlo',
    'currency.title':'Elige tu moneda','currency.usd':'Dólar estadounidense (USD)','currency.eur':'Euro (EUR)',
    'accounts.title':'Añade tus cuentas','accounts.subtitle':'Añade al menos una cuenta para continuar. Puedes añadir las que quieras. También puedes añadir más cuentas más tarde.',
    'accounts.cash':'Efectivo','accounts.card':'Tarjeta de débito','accounts.yours':'Tus cuentas','accounts.btn':'Cuentas','accounts.networth':'Patrimonio neto',
    'accounts.addEdit':'Añadir o editar cuentas','accounts.manageTitle':'Añadir o editar cuentas','accounts.manageSub':'Gestiona tus cuentas de Fyn.',
    'field.name':'Nombre','field.description':'Descripción (opcional)','field.descriptionPlain':'Descripción','field.initialBalance':'Saldo inicial',
    'theme.title':'Elige el tema','theme.light':'Claro','theme.dark':'Oscuro',
    'hue.title':'Elige el tono de fondo','hue.subtitle':'Desliza para elegir el tono de tu fondo degradado.',
    'pin.create':'Crea un código de 4 dígitos','pin.repeat':'Repite tu código','pin.enterCurrent':'Introduce tu código actual','pin.enterImport':'Introduce el código de esta copia',
    'lock.subtitle':'Introduce tu código','lock.error':'Código incorrecto',
    'lock.forgotPin':'¿Olvidaste tu PIN?',
    'lock.forgotWarning':'Si olvidaste tu PIN, ahora tienes que borrar todos los datos de la app para poder entrar. Esto eliminará permanentemente todos tus movimientos y cuentas en este navegador.',
    'lock.eraseData':'Borrar datos',
    'welcome.he':'Bienvenido','welcome.she':'Bienvenida','welcome.they':'Bienvenide','welcome.unspecified':'Te damos la bienvenida',
    'greeting.morning':'Buenos días','greeting.afternoon':'Buenas tardes','greeting.evening':'Buenas noches',
    'search.placeholder':'Buscar','balance.label':'Saldo',
    'qa.expense':'Añadir gasto','qa.income':'Añadir ingreso','qa.details':'Detalles','qa.more':'Más',
    'movements.title':'Movimientos','movements.showAll':'Mostrar todos','movements.all':'Todos los movimientos',
    'filter.title':'Filtros','filter.period':'Periodo','filter.all':'Todo','filter.day':'Día','filter.week':'Semana','filter.month':'Mes','filter.year':'Año',
    'filter.merchant':'Establecimiento','filter.category':'Categoría','filter.allCategories':'Todas las categorías',
    'filter.account':'Cuenta','filter.allAccounts':'Todas las cuentas',
    'filter.apply':'Aplicar filtros','filter.clear':'Borrar filtros',
    'empty.noMovements':'Aún no hay movimientos.<br>Toca un botón de arriba para añadir el primero.',
    'empty.noResults':'Sin resultados para tu búsqueda.',
    'day.today':'Hoy','day.yesterday':'Ayer',
    'sheet.title':'Nuevo movimiento','sheet.editTitle':'Editar movimiento','type.expense':'Gasto','type.income':'Ingreso',
    'action.edit':'Editar','txdetail.date':'Fecha y hora',
    'field.merchant':'Nombre','merchant.placeholder':'Ej. Mercadona, Netflix, Amazon…',
    'desc.placeholder':'Nota','cat.search':'Buscar categorías',
    'field.category':'Categoría','field.account':'Cuenta','field.date':'Fecha','action.save2':'Guardar',
    'logo.searching':'Buscando logo…','logo.found':'Logo encontrado para {d}','logo.notfound':'Sin logo — se usarán las iniciales',
    'toast.expenseAdded':'Gasto añadido','toast.incomeAdded':'Ingreso añadido','toast.updated':'Movimiento actualizado','toast.deleted':'Movimiento eliminado','toast.comingSoon':'Próximamente',
    'confirm.delete':'¿Eliminar este movimiento?',
    'confirm.deleteAccount':'¿Seguro que quieres eliminar esta cuenta?',
    'accounts.needAtLeastOne':'Debes tener al menos una cuenta para continuar.',
    'settings.title':'Ajustes','settings.darkMode':'Modo oscuro',
    'settings.language':'Idioma','settings.pronoun':'Pronombres','settings.accentTone':'Tono de acento',
    'settings.languageHint':'Para aplicar completamente el cambio de idioma, recarga la web.',
    'nav.home':'Inicio','nav.stats':'Estadísticas',
    'settings.profile':'Ajustes de perfil','profile.title':'Perfil','profile.name':'Nombre',
    'settings.changePin':'Cambiar código PIN','settings.change':'Cambiar','settings.createPin':'Crear contraseña','settings.createBtn':'Crear','settings.deletePin':'Borrar contraseña',
    'settings.export':'Exportar datos (.json)','settings.exportBtn':'Exportar',
    'settings.import':'Importar datos (.json)','settings.importBtn':'Importar',
    'settings.deleteAll':'Borrar todos los datos','settings.deleteBtn':'Borrar',
    'toast.exported':'Datos exportados','toast.imported':'Datos importados','toast.dataDeleted':'Datos borrados','toast.pinChanged':'PIN actualizado','toast.pinCreated':'Contraseña creada','toast.pinDeleted':'Contraseña borrada',
    'confirm.import':'Se importarán {n} movimientos. ¿Reemplazar los datos actuales?',
    'error.invalidBackup':'El archivo no es un backup válido.',
    'confirm.reset':'Esto borrará todos los movimientos guardados en este dispositivo. ¿Continuar?',
    'delete.warning':'Al borrar todos los datos, eliminarás toda la actividad, cuentas y todo lo relacionado con Fyn en este navegador. Exporta tus datos (.json) antes de borrar todo, por si acaso. Para borrar completamente todos los datos, borra los datos de este sitio web desde los ajustes de tu navegador.',
    'delete.cancel':'Cancelar','delete.continue':'Continuar','delete.pinPrompt':'Introduce tu PIN para confirmar',
    'cat.supermarket':'Supermercado','cat.restaurant':'Restaurante','cat.salary':'Salario','cat.transport':'Transporte',
    'cat.leisure':'Ocio','cat.housing':'Vivienda','cat.shopping':'Compras','cat.clothing':'Ropa',
    'cat.subscriptions':'Suscripciones','cat.health':'Salud','cat.travel':'Viajes',
    'cat.gifts':'Regalos','cat.food':'Alimentación','cat.other':'Otros','cat.bills':'Facturas','cat.personalCare':'Cuidado personal',
    'cat.education':'Educación','cat.donations':'Donaciones','cat.sideJob':'Trabajo extra','cat.refunds':'Reembolsos',
    'cat.aid':'Ayudas','cat.sales':'Ventas','cat.transfersIn':'Transferencias recibidas',
  }
};
function t(key, vars){
  let str = (I18N[state.language] && I18N[state.language][key]) || I18N.en[key] || key;
  if (vars) Object.keys(vars).forEach(k=> str = str.replace(`{${k}}`, vars[k]));
  return str;
}

const DB = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch(e){ return fallback; }
  },
  set(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
};

const CATS = [
  // Gastos
  { id:'supermercado',       type:'expense', key:'cat.supermarket',      color:'#1ec87a', icon:'🛒' },
  { id:'restaurante',        type:'expense', key:'cat.restaurant',       color:'#ff8a3d', icon:'🍽️' },
  { id:'alimentacion',       type:'expense', key:'cat.food',             color:'#eab308', icon:'🍎' },
  { id:'transporte',         type:'expense', key:'cat.transport',        color:'#4436e2', icon:'🚌' },
  { id:'vivienda',           type:'expense', key:'cat.housing',          color:'#8b5cf6', icon:'🏠' },
  { id:'compras',            type:'expense', key:'cat.shopping',         color:'#ff4d8f', icon:'🛍️' },
  { id:'ocio',               type:'expense', key:'cat.leisure',          color:'#ff6bd6', icon:'🎬' },
  { id:'suscripciones',      type:'expense', key:'cat.subscriptions',    color:'#f43f5e', icon:'🔁' },
  { id:'facturas',           type:'expense', key:'cat.bills',            color:'#0ea5e9', icon:'🧾' },
  { id:'salud',              type:'expense', key:'cat.health',           color:'#00b8d9', icon:'💊' },
  { id:'ropa',               type:'expense', key:'cat.clothing',         color:'#e879f9', icon:'👕' },
  { id:'cuidado-personal',   type:'expense', key:'cat.personalCare',     color:'#f472b6', icon:'🧴' },
  { id:'educacion',          type:'expense', key:'cat.education',        color:'#22c55e', icon:'🎓' },
  { id:'viajes',             type:'expense', key:'cat.travel',           color:'#06b6d4', icon:'✈️' },
  { id:'regalos-gasto',      type:'expense', key:'cat.gifts',            color:'#f97316', icon:'🎁' },
  { id:'donaciones',         type:'expense', key:'cat.donations',        color:'#ef4444', icon:'🎗️' },
  { id:'otros-gasto',        type:'expense', key:'cat.other',            color:'#8b8b93', icon:'⋯' },
  // Ingresos
  { id:'salario',            type:'income',  key:'cat.salary',           color:'#1ec87a', icon:'💼' },
  { id:'trabajo-extra',      type:'income',  key:'cat.sideJob',          color:'#0ea5e9', icon:'🛠️' },
  { id:'regalos-ingreso',    type:'income',  key:'cat.gifts',            color:'#f97316', icon:'🎁' },
  { id:'reembolsos',         type:'income',  key:'cat.refunds',          color:'#f43f5e', icon:'💸' },
  { id:'ayudas',             type:'income',  key:'cat.aid',              color:'#8b5cf6', icon:'🤲' },
  { id:'ventas',             type:'income',  key:'cat.sales',            color:'#eab308', icon:'🏷️' },
  { id:'transferencias',     type:'income',  key:'cat.transfersIn',      color:'#4436e2', icon:'📥' },
  { id:'otros-ingreso',      type:'income',  key:'cat.other',            color:'#8b8b93', icon:'⋯' },
];
const DEFAULT_HUE = 248;

async function sha256(text){
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

let state = {
  language: DB.get('language', 'en'),
  userName: DB.get('userName', ''),
  pronoun: DB.get('pronoun', null),
  currency: DB.get('currency', null),
  themeMode: DB.get('themeMode', null),
  hue: DB.get('hue', DEFAULT_HUE),
  accounts: DB.get('accounts', []),
  selectedAccountView: DB.get('selectedAccountView', 'networth'),
  pinHash: DB.get('pinHash', null),
  avatar: DB.get('avatar', null),
  onboardingDone: DB.get('onboardingDone', false),
  transactions: DB.get('transactions', []),
};
let enteredPin = '';
let lockFailCount = 0;
let currentType = 'expense';
let selectedCat = null;
let selectedAccountForTx = null;
let logoUrlCache = {};
let editingTxId = null;
let sheetReturnPage = 'page-home';
let settingsReturnPage = 'page-home';
let searchQuery = '';
let mvSearchQuery = '';
let mvFilter = { period:'all', category:'all', account:'all' };

const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

window.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  applyTheme();
  applyHue(state.hue);
  buildCategoryChips();
  wireKeypad('#lock-keypad', onLockDigit);
  wireForgotPin();
  wireKeypad('#setup-keypad', onSetupDigit);
  $('#skip-pin-btn').addEventListener('click', skipPinSetup);
  wireKeypad('#chpin-keypad', onChangePinDigit);
  wireKeypad('#importverify-keypad', onImportVerifyDigit);
  wireImportVerify();
  wireHome();
  wireProfile();
  wireAccountsEditor();
  wireConfirmModal();
  wireBottomNav();
  wireSettings();
  wireSettingsSheets();
  wireSheet();
  wireTxDetail();
  wireMovements();
  wireAccountSwitch();
  renderAvatar();
  renderGreeting();
  renderHome();
  refreshPinRows();

  setTimeout(()=>{
    $('#splash').classList.add('hidden');
    if (!state.onboardingDone) {
      $('#setup').classList.add('show');
      startOnboarding();
    } else if (!state.pinHash) {
      $('#app').classList.add('show');
      renderGreeting();
      buildAccountChips();
    } else {
      $('#lock-title').textContent = t('welcome.' + (state.pronoun || 'unspecified'));
      $('#lock').classList.remove('hidden');
    }
  }, 1300);
});

function applyTranslations(){
  document.documentElement.lang = state.language;
  $$('[data-i18n]').forEach(el=>{ el.innerHTML = t(el.dataset.i18n); });
  $$('[data-i18n-ph]').forEach(el=>{ el.placeholder = t(el.dataset.i18nPh); });
  $$('[data-i18n-title]').forEach(el=>{ el.title = t(el.dataset.i18nTitle); });
}

function applyTheme(){
  let mode = state.themeMode;
  if (!mode) mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.body.classList.toggle('dark', mode === 'dark');
  const isLight = mode === 'light';
  $('#setup').classList.toggle('light-mode', isLight);
  $('#lock').classList.toggle('light-mode', isLight);
}
function toggleTheme(){
  const isDark = document.body.classList.contains('dark');
  state.themeMode = isDark ? 'light' : 'dark';
  DB.set('themeMode', state.themeMode);
  applyTheme();
  $('#dark-switch').classList.toggle('on', !isDark);
}
function hueColors(h){
  return {
    a: `hsl(${h},72%,21%)`,
    b: `hsl(${h},75%,55%)`,
    c: `hsl(${h},100%,68%)`,
  };
}
function applyHue(h){
  const c = hueColors(h);
  document.documentElement.style.setProperty('--card-a', c.a);
  document.documentElement.style.setProperty('--card-b', c.b);
  document.documentElement.style.setProperty('--card-c', c.c);
}

const OB_STEPS = ['step-lang','step-name','step-pronoun','step-currency','step-accounts','step-theme','step-hue','step-pin'];
function goToStep(id){
  OB_STEPS.forEach(s => $('#'+s).classList.toggle('active', s===id));
  const idx = OB_STEPS.indexOf(id);
  const total = OB_STEPS.length - 1;
  if (idx <= 0) {
    $('#ob-progress').classList.remove('show');
  } else {
    $('#ob-progress').classList.add('show');
    $('#ob-progress-fill').style.width = (idx / total * 100) + '%';
  }
}
function startOnboarding(){
  wireLangStep();
  wireNameStep();
  wirePronounStep();
  wireCurrencyStep();
  wireAccountsStep();
  wireThemeStep();
  wireHueStep();
  goToStep('step-lang');
}

function wireLangStep(){
  $$('#step-lang .ob-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      state.language = card.dataset.lang;
      DB.set('language', state.language);
      $$('#step-lang .ob-card').forEach(c=>c.classList.remove('selected'));
      card.classList.add('selected');
      applyTranslations();
      setTimeout(()=> goToStep('step-name'), 280);
    });
  });
  $('#ob-import-btn').addEventListener('click', ()=> $('#ob-import-file').click());
  $('#ob-import-file').addEventListener('change', onObImportFile);
}
function onObImportFile(e){
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!Array.isArray(data.transactions)) throw new Error('formato inválido');
      if (data.pinHash) {
        beginImportVerify(data, 'onboarding');
      } else {
        finishImport(data, 'onboarding');
      }
    } catch(err){
      alert(t('error.invalidBackup'));
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function wireNameStep(){
  const input = $('#name-input');
  const btn = $('#name-continue');
  input.addEventListener('input', ()=> { btn.disabled = input.value.trim().length === 0; });
  btn.addEventListener('click', ()=>{
    state.userName = input.value.trim();
    DB.set('userName', state.userName);
    renderPronounList();
    goToStep('step-pronoun');
  });
}

function renderPronounList(){
  const opts = ['he','she','they','unspecified'];
  $('#pronoun-list').innerHTML = opts.map(p=>
    `<button type="button" class="ob-row" data-p="${p}"><span>${t('pronoun.'+p)}</span><span class="check"></span></button>`
  ).join('');
  $$('#pronoun-list .ob-row').forEach(row=>{
    row.addEventListener('click', ()=>{
      $$('#pronoun-list .ob-row').forEach(r=>r.classList.remove('selected'));
      row.classList.add('selected');
      state.pronoun = row.dataset.p;
      $('#pronoun-continue').disabled = false;
    });
  });
}
function wirePronounStep(){
  $('#pronoun-continue').addEventListener('click', ()=>{
    DB.set('pronoun', state.pronoun);
    renderCurrencyList();
    goToStep('step-currency');
  });
}

function renderCurrencyList(){
  const opts = [['USD','currency.usd'],['EUR','currency.eur']];
  $('#currency-list').innerHTML = opts.map(([code,key])=>
    `<button type="button" class="ob-row" data-c="${code}"><span>${t(key)}</span><span class="check"></span></button>`
  ).join('');
  $$('#currency-list .ob-row').forEach(row=>{
    row.addEventListener('click', ()=>{
      $$('#currency-list .ob-row').forEach(r=>r.classList.remove('selected'));
      row.classList.add('selected');
      state.currency = row.dataset.c;
      $('#currency-continue').disabled = false;
    });
  });
}
function wireCurrencyStep(){
  $('#currency-continue').addEventListener('click', ()=>{
    DB.set('currency', state.currency);
    goToStep('step-accounts');
  });
}

let confirmModalCallback = null;
function showConfirmModal(message, onConfirm){
  $('#confirm-modal-text').textContent = message;
  confirmModalCallback = onConfirm;
  $('#confirm-backdrop').classList.add('show');
  $('#confirm-modal').classList.add('show');
}
function closeConfirmModal(){
  $('#confirm-backdrop').classList.remove('show');
  $('#confirm-modal').classList.remove('show');
  confirmModalCallback = null;
}
function wireConfirmModal(){
  $('#confirm-modal-cancel').addEventListener('click', closeConfirmModal);
  $('#confirm-backdrop').addEventListener('click', closeConfirmModal);
  $('#confirm-modal-ok').addEventListener('click', ()=>{
    const cb = confirmModalCallback;
    closeConfirmModal();
    if (cb) cb();
  });
}

function wireBottomNav(){
  $$('.bottom-nav-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const nav = btn.dataset.nav;
      if (nav === 'home') {
        $$('.bottom-nav-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        $$('.page').forEach(p=>p.classList.remove('active'));
        $('#page-home').classList.add('active');
        updateBottomNav();
        renderHome();
      } else if (nav === 'movements') {
        openMovementsPage();
      } else {
        showToast(t('toast.comingSoon'));
      }
    });
  });
}

let obAccType = null;
function wireAccountsStep(){
  $('#acc-type-cash').addEventListener('click', ()=> setObAccType('cash'));
  $('#acc-type-card').addEventListener('click', ()=> setObAccType('card'));
  $('#acc-save-btn').addEventListener('click', saveObAccount);
  $('#accounts-continue').addEventListener('click', ()=>{
    DB.set('accounts', state.accounts);
    renderThemeDefault();
    goToStep('step-theme');
  });
  renderObAccountList();
}
function setObAccType(type){
  obAccType = type;
  $('#acc-type-cash').classList.toggle('active', type==='cash');
  $('#acc-type-card').classList.toggle('active', type==='card');
  $('#acc-name-input').value = '';
  $('#acc-desc-input').value = '';
  $('#acc-balance-input').value = '';
  $('#acc-form').classList.add('show');
}
function saveObAccount(){
  const name = $('#acc-name-input').value.trim();
  if (!name || !obAccType) return;
  const bal = parseFloat($('#acc-balance-input').value) || 0;
  const acc = {
    id: 'acc' + Date.now().toString(36) + Math.random().toString(36).slice(2,5),
    type: obAccType,
    name,
    description: $('#acc-desc-input').value.trim(),
    initialBalance: bal,
  };
  state.accounts.push(acc);
  $('#acc-form').classList.remove('show');
  $$('.acc-type-btn').forEach(b=>b.classList.remove('active'));
  obAccType = null;
  renderObAccountList();
}
function accountIcon(type){
  return type === 'cash'
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>';
}
function renderObAccountList(){
  const list = $('#acc-list');
  const label = $('#acc-list-label');
  if (state.accounts.length === 0) { list.innerHTML=''; label.style.display='none'; $('#accounts-continue').disabled = true; return; }
  label.style.display='block';
  $('#accounts-continue').disabled = false;
  list.innerHTML = state.accounts.map(a=>`
    <div class="acc-item" data-id="${a.id}">
      <div class="acc-item-icon">${accountIcon(a.type)}</div>
      <div class="acc-item-info">
        <div class="acc-item-name">${escapeHtml(a.name)}</div>
        ${a.description ? `<div class="acc-item-desc">${escapeHtml(a.description)}</div>` : ''}
      </div>
      <div class="acc-item-balance">${fmt(a.initialBalance)}</div>
      <button type="button" class="acc-item-del" data-del="${a.id}">✕</button>
    </div>
  `).join('');
  list.querySelectorAll('[data-del]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if (state.accounts.length <= 1) { showToast(t('accounts.needAtLeastOne')); return; }
      showConfirmModal(t('confirm.deleteAccount'), ()=>{
        state.accounts = state.accounts.filter(a=>a.id !== btn.dataset.del);
        renderObAccountList();
      });
    });
  });
}

function renderThemeDefault(){
  const deviceDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultMode = deviceDark ? 'dark' : 'light';
  state.themeMode = state.themeMode || defaultMode;
  $$('#step-theme .ob-card').forEach(c=> c.classList.toggle('selected', c.dataset.theme === state.themeMode));
}
function wireThemeStep(){
  $$('#step-theme .ob-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      state.themeMode = card.dataset.theme;
      $$('#step-theme .ob-card').forEach(c=>c.classList.remove('selected'));
      card.classList.add('selected');
      applyTheme();
    });
  });
  $('#theme-continue').addEventListener('click', ()=>{
    DB.set('themeMode', state.themeMode);
    applyTheme();
    goToStep('step-hue');
  });
}

function wireHueStep(){
  const slider = $('#hue-slider');
  const preview = $('#hue-preview');
  const update = (h)=>{
    const c = hueColors(h);
    preview.style.background = `linear-gradient(150deg,${c.a},${c.b} 55%,${c.c})`;
    applyHue(h);
  };
  slider.value = state.hue;
  update(state.hue);
  slider.addEventListener('input', ()=>{ state.hue = parseInt(slider.value,10); update(state.hue); });
  $('#hue-reset').addEventListener('click', ()=>{
    state.hue = DEFAULT_HUE;
    slider.value = DEFAULT_HUE;
    update(DEFAULT_HUE);
  });
  $('#hue-continue').addEventListener('click', ()=>{
    DB.set('hue', state.hue);
    goToStep('step-pin');
  });
}

function skipPinSetup(){
  state.pinHash = null;
  DB.set('pinHash', null);
  state.onboardingDone = true;
  DB.set('onboardingDone', true);
  $('#setup').classList.remove('show');
  renderHome();
  buildAccountChips();
  unlockApp();
}
let setupStage = 1;
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
        $('#setup-sub').textContent = t('pin.repeat');
        renderDots(dotsEl, 0);
      } else {
        if (enteredPin === firstPin) {
          state.pinHash = await sha256(enteredPin);
          DB.set('pinHash', state.pinHash);
          state.onboardingDone = true;
          DB.set('onboardingDone', true);
          $('#setup').classList.remove('show');
          renderHome();
          buildAccountChips();
          unlockApp();
        } else {
          dotsEl.classList.add('shake');
          $$('#setup-dots .pin-dot').forEach(d=>d.classList.add('err'));
          setTimeout(()=>{
            dotsEl.classList.remove('shake');
            setupStage = 1; firstPin=''; enteredPin='';
            $('#setup-sub').textContent = t('pin.create');
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
        lockFailCount = 0;
        unlockApp();
      } else {
        lockFailCount++;
        dotsEl.classList.add('shake');
        $$('#lock-dots .pin-dot').forEach(d=>d.classList.add('err'));
        $('#lock-error').classList.add('show');
        if (lockFailCount >= 2) $('#forgot-pin-btn').classList.remove('hidden');
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
  buildAccountChips();
}
let pendingImportData = null;
let pendingImportContext = null;
let importVerifyPin = '';
function wireImportVerify(){
  $('#importverify-cancel').addEventListener('click', closeImportVerify);
}
function beginImportVerify(data, context){
  pendingImportData = data;
  pendingImportContext = context;
  importVerifyPin = '';
  $('#importverify-error').classList.remove('show');
  renderDots($('#importverify-dots'), 0);
  $('#import-verify-screen').classList.add('show');
}
function closeImportVerify(){
  $('#import-verify-screen').classList.remove('show');
  pendingImportData = null; pendingImportContext = null; importVerifyPin = '';
}
function finishImport(data, context){
  applyImportedData(data);
  applyTranslations();
  applyTheme();
  applyHue(state.hue);
  buildAccountChips();
  renderGreeting();
  renderHome();
  if (context === 'onboarding') {
    state.onboardingDone = true;
    DB.set('onboardingDone', true);
    $('#setup').classList.remove('show');
    $('#lock').classList.add('hidden');
    $('#app').classList.add('show');
  } else {
    showToast(t('toast.imported'));
  }
}
function onImportVerifyDigit(d){
  const dotsEl = $('#importverify-dots');
  if (d === 'del') { importVerifyPin = importVerifyPin.slice(0,-1); renderDots(dotsEl, importVerifyPin.length); return; }
  if (importVerifyPin.length >= 4) return;
  importVerifyPin += d;
  renderDots(dotsEl, importVerifyPin.length);
  if (importVerifyPin.length === 4) {
    setTimeout(async () => {
      const hash = await sha256(importVerifyPin);
      if (hash === pendingImportData.pinHash) {
        const data = pendingImportData;
        const context = pendingImportContext;
        closeImportVerify();
        finishImport(data, context);
      } else {
        dotsEl.classList.add('shake');
        $$('#importverify-dots .pin-dot').forEach(el=>el.classList.add('err'));
        $('#importverify-error').classList.add('show');
        navigator.vibrate && navigator.vibrate(80);
        setTimeout(()=>{ dotsEl.classList.remove('shake'); importVerifyPin=''; renderDots(dotsEl,0); }, 450);
      }
    }, 100);
  }
}
function renderDots(container, count){
  const dots = container.querySelectorAll('.pin-dot');
  dots.forEach((el,i)=>{
    el.classList.toggle('filled', i < count);
    el.classList.remove('err');
  });
}

let chPinStage = 'current';
let chPinCurrent = '';
let chPinNew = '';
let chPinConfirm = '';
let chPinMode = 'change';
function openChangePinScreen(mode){
  chPinMode = state.pinHash ? (mode || 'change') : 'create';
  chPinStage = chPinMode === 'create' ? 'new' : 'current';
  chPinCurrent = ''; chPinNew = ''; chPinConfirm = '';
  $('#chpin-sub').textContent = chPinStage === 'current' ? t('pin.enterCurrent') : t('pin.create');
  $('#chpin-error').classList.remove('show');
  renderDots($('#chpin-dots'), 0);
  $('#changepin-screen').classList.add('show');
}
function closeChangePinScreen(){
  $('#changepin-screen').classList.remove('show');
  chPinStage = 'current';
  chPinCurrent = ''; chPinNew = ''; chPinConfirm = '';
}
function onChangePinDigit(d){
  const dotsEl = $('#chpin-dots');
  const getBuf = () => chPinStage === 'current' ? chPinCurrent : chPinStage === 'new' ? chPinNew : chPinConfirm;
  const setBuf = (v) => {
    if (chPinStage === 'current') chPinCurrent = v;
    else if (chPinStage === 'new') chPinNew = v;
    else chPinConfirm = v;
  };
  if (d === 'del') { setBuf(getBuf().slice(0,-1)); renderDots(dotsEl, getBuf().length); return; }
  let buf = getBuf();
  if (buf.length >= 4) return;
  buf += d;
  setBuf(buf);
  renderDots(dotsEl, buf.length);
  if (buf.length === 4) {
    setTimeout(async () => {
      if (chPinStage === 'current') {
        const hash = await sha256(chPinCurrent);
        if (hash === state.pinHash) {
          chPinStage = 'new';
          chPinCurrent = '';
          $('#chpin-error').classList.remove('show');
          $('#chpin-sub').textContent = t('pin.create');
          renderDots(dotsEl, 0);
        } else {
          dotsEl.classList.add('shake');
          $$('#chpin-dots .pin-dot').forEach(el=>el.classList.add('err'));
          $('#chpin-error').classList.add('show');
          navigator.vibrate && navigator.vibrate(80);
          setTimeout(()=>{ dotsEl.classList.remove('shake'); chPinCurrent=''; renderDots(dotsEl,0); }, 450);
        }
      } else if (chPinStage === 'new') {
        chPinStage = 'confirm';
        $('#chpin-sub').textContent = t('pin.repeat');
        renderDots(dotsEl, 0);
      } else {
        if (chPinConfirm === chPinNew) {
          state.pinHash = await sha256(chPinNew);
          DB.set('pinHash', state.pinHash);
          const wasCreate = chPinMode === 'create';
          closeChangePinScreen();
          refreshPinRows();
          showToast(wasCreate ? t('toast.pinCreated') : t('toast.pinChanged'));
        } else {
          dotsEl.classList.add('shake');
          $$('#chpin-dots .pin-dot').forEach(el=>el.classList.add('err'));
          setTimeout(()=>{
            dotsEl.classList.remove('shake');
            chPinStage = 'new'; chPinNew=''; chPinConfirm='';
            $('#chpin-sub').textContent = t('pin.create');
            renderDots(dotsEl, 0);
          }, 500);
        }
      }
    }, 120);
  }
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
  let key = 'greeting.morning';
  if (h >= 12 && h < 20) key = 'greeting.afternoon';
  else if (h >= 20 || h < 6) key = 'greeting.evening';
  const name = state.userName ? `, <b>${escapeHtml(state.userName)}</b>` : '';
  $('#greeting').innerHTML = `${t(key)}${name}`;
}
function renderAvatar(){
  const initial = state.userName ? state.userName.trim()[0].toUpperCase() : 'F';
  [$('#avatar-btn'), $('#mv-avatar-btn'), $('#profile-avatar-preview')].forEach(el=>{
    if (!el) return;
    if (state.avatar) {
      el.style.backgroundImage = `url(${state.avatar})`;
      el.textContent = '';
    } else {
      el.style.backgroundImage = '';
      el.textContent = initial;
    }
  });
}
function wireHome(){
  $('#avatar-btn').addEventListener('click', ()=> openProfile(false));
  $('#avatar-file').addEventListener('change', onAvatarChange);
  $('#gear-btn').addEventListener('click', ()=> openSettings());
  $('#settings-back').addEventListener('click', ()=> closeSettings());
  $('#qa-expense').addEventListener('click', ()=> openSheet('expense'));
  $('#qa-income').addEventListener('click', ()=> openSheet('income'));
  $('#qa-details').addEventListener('click', ()=> showToast(t('toast.comingSoon')));
  $('#qa-more').addEventListener('click', ()=> showToast(t('toast.comingSoon')));
  $('#accounts-btn').addEventListener('click', openAccountSwitch);
  $('#search-input').addEventListener('input', (e)=>{
    searchQuery = e.target.value.trim().toLowerCase();
    renderHome();
  });
  $('#tx-show-all-btn').addEventListener('click', openMovementsPage);
}
let profileReturnPage = 'page-home';
function updateBottomNav(){
  const navActive = $('#page-home').classList.contains('active') || $('#page-movements').classList.contains('active');
  $('#bottom-nav').classList.toggle('hidden', !navActive);
  $('#bottom-nav-fade').classList.toggle('hidden', !navActive);
}
function openProfile(fromSettings){
  profileReturnPage = fromSettings ? 'page-settings' : ($('#page-movements').classList.contains('active') ? 'page-movements' : 'page-home');
  $('#profile-name-input').value = state.userName || '';
  renderAvatar();
  $('#page-home').classList.remove('active');
  $('#page-movements').classList.remove('active');
  $('#page-settings').classList.remove('active');
  $('#page-profile').classList.add('active');
  updateBottomNav();
}
function closeProfile(){
  $('#page-profile').classList.remove('active');
  $('#'+profileReturnPage).classList.add('active');
  updateBottomNav();
  if (profileReturnPage === 'page-movements') renderMovements();
}
function wireProfile(){
  $('#profile-back').addEventListener('click', closeProfile);
  $('#profile-open-btn').addEventListener('click', ()=> openProfile(true));
  $('#profile-avatar-edit').addEventListener('click', ()=> $('#avatar-file').click());
  $('#profile-pronoun-open-btn').addEventListener('click', openPronounSheet);
  $('#profile-name-input').addEventListener('input', (e)=>{
    state.userName = e.target.value.trim();
    DB.set('userName', state.userName);
    renderAvatar();
    renderGreeting();
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
  settingsReturnPage = $('#page-movements').classList.contains('active') ? 'page-movements' : 'page-home';
  $('#dark-switch').classList.toggle('on', document.body.classList.contains('dark'));
  refreshPinRows();
  $('#page-home').classList.remove('active');
  $('#page-movements').classList.remove('active');
  $('#page-settings').classList.add('active');
  updateBottomNav();
}
function refreshPinRows(){
  const hasPin = !!state.pinHash;
  const labelKey = hasPin ? 'settings.changePin' : 'settings.createPin';
  const btnKey = hasPin ? 'settings.change' : 'settings.createBtn';
  $('#pin-row-label').dataset.i18n = labelKey;
  $('#pin-row-label').textContent = t(labelKey);
  $('#changepin-btn').dataset.i18n = btnKey;
  $('#changepin-btn').textContent = t(btnKey);
  $('#deletepin-row').classList.toggle('hidden', !hasPin);
  $('#pin-row').style.borderBottom = hasPin ? '' : 'none';
}
function wireSettingsSheets(){
  $('#lang-open-btn').addEventListener('click', openLangSheet);
  $('#lang-sheet-close').addEventListener('click', closeSettingsSheets);
  $('#pronoun-sheet-close').addEventListener('click', closeSettingsSheets);
  $('#settings-sheet-backdrop').addEventListener('click', closeSettingsSheets);
  $('#hue-open-btn').addEventListener('click', openHueEditor);
  $('#accent-hue-done').addEventListener('click', closeHueEditor);
}
function closeSettingsSheets(){
  $('#settings-sheet-backdrop').classList.remove('show');
  $('#lang-sheet').classList.remove('show');
  $('#pronoun-sheet').classList.remove('show');
}
function openLangSheet(){
  const opts = [['en','English'],['es','Español']];
  $('#lang-sheet-list').innerHTML = opts.map(([code,label])=>
    `<button type="button" class="sheet-option-row${state.language===code?' active':''}" data-lang="${code}"><span>${label}</span><span class="check"></span></button>`
  ).join('');
  $$('#lang-sheet-list .sheet-option-row').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if (state.language !== btn.dataset.lang) {
        state.language = btn.dataset.lang;
        DB.set('language', state.language);
        applyTranslations();
        renderHome();
      }
      closeSettingsSheets();
    });
  });
  $('#settings-sheet-backdrop').classList.add('show');
  $('#lang-sheet').classList.add('show');
}
function openPronounSheet(){
  const opts = ['he','she','they','unspecified'];
  $('#pronoun-sheet-list').innerHTML = opts.map(p=>
    `<button type="button" class="sheet-option-row${state.pronoun===p?' active':''}" data-p="${p}"><span>${t('pronoun.'+p)}</span><span class="check"></span></button>`
  ).join('');
  $$('#pronoun-sheet-list .sheet-option-row').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      state.pronoun = btn.dataset.p;
      DB.set('pronoun', state.pronoun);
      renderGreeting();
      closeSettingsSheets();
    });
  });
  $('#settings-sheet-backdrop').classList.add('show');
  $('#pronoun-sheet').classList.add('show');
}
function openHueEditor(){
  const slider = $('#accent-hue-slider');
  const preview = $('#accent-hue-preview');
  const update = (h)=>{
    const c = hueColors(h);
    preview.style.background = `linear-gradient(150deg,${c.a},${c.b} 55%,${c.c})`;
    applyHue(h);
  };
  slider.value = state.hue;
  update(state.hue);
  slider.oninput = ()=>{ state.hue = parseInt(slider.value,10); update(state.hue); };
  $('#accent-hue-reset').onclick = ()=>{
    state.hue = DEFAULT_HUE;
    slider.value = DEFAULT_HUE;
    update(DEFAULT_HUE);
  };
  $('#hue-editor').classList.add('show');
}
function closeHueEditor(){
  DB.set('hue', state.hue);
  $('#hue-editor').classList.remove('show');
}
function closeSettings(){
  $('#page-settings').classList.remove('active');
  $('#'+settingsReturnPage).classList.add('active');
  updateBottomNav();
  if (settingsReturnPage === 'page-movements') renderMovements();
}

function wireAccountSwitch(){
  $('#accsheet-close').addEventListener('click', closeAccountSwitch);
  $('#accsheet-backdrop').addEventListener('click', closeAccountSwitch);
}
function accountBalance(accId){
  const acc = state.accounts.find(a=>a.id===accId);
  if (!acc) return 0;
  const delta = state.transactions
    .filter(tx=>tx.account===accId)
    .reduce((s,tx)=> s + (tx.type==='income' ? tx.amount : -tx.amount), 0);
  return acc.initialBalance + delta;
}
function netWorth(){
  return state.accounts.reduce((s,a)=> s + accountBalance(a.id), 0);
}
function openAccountSwitch(){
  const list = $('#acc-switch-list');
  const rows = [`<div class="accsw-row ${state.selectedAccountView==='networth'?'selected':''}" data-v="networth">
      <div class="accsw-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18M7 15l4-5 3 3 5-7"/></svg></div>
      <div class="accsw-info"><div class="accsw-name">${t('accounts.networth')}</div><div class="accsw-balance">${fmt(netWorth())}</div></div>
      <div class="accsw-check"></div>
    </div>`];
  state.accounts.forEach(a=>{
    rows.push(`<div class="accsw-row ${state.selectedAccountView===a.id?'selected':''}" data-v="${a.id}">
      <div class="accsw-icon">${accountIcon(a.type)}</div>
      <div class="accsw-info"><div class="accsw-name">${escapeHtml(a.name)}</div><div class="accsw-balance">${fmt(accountBalance(a.id))}</div></div>
      <div class="accsw-check"></div>
    </div>`);
  });
  rows.push(`<div class="accsw-row accsw-add" id="accsw-add-row">
      <div class="accsw-icon accsw-icon-add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></div>
      <div class="accsw-info"><div class="accsw-name">${t('accounts.addEdit')}</div></div>
    </div>`);
  list.innerHTML = rows.join('');
  list.querySelectorAll('.accsw-row[data-v]').forEach(row=>{
    row.addEventListener('click', ()=> switchAccountView(row.dataset.v));
  });
  $('#accsw-add-row').addEventListener('click', ()=>{
    closeAccountSwitch();
    openAccountsEditor();
  });
  $('#accsheet-backdrop').classList.add('show');
  $('#acc-switch-sheet').classList.add('show');
}
function closeAccountSwitch(){
  $('#accsheet-backdrop').classList.remove('show');
  $('#acc-switch-sheet').classList.remove('show');
}
function switchAccountView(v){
  closeAccountSwitch();
  if (v === state.selectedAccountView) return;
  const label = $('#balance-label');
  const amount = $('#balance-amount');
  label.classList.add('balance-switching');
  amount.classList.add('balance-switching');
  setTimeout(()=>{
    state.selectedAccountView = v;
    DB.set('selectedAccountView', v);
    renderHome();
    requestAnimationFrame(()=>{
      label.classList.remove('balance-switching');
      amount.classList.remove('balance-switching');
    });
  }, 170);
}

let acceAccType = null;
function openAccountsEditor(){
  acceAccType = null;
  $('#acce-form').classList.remove('show');
  $$('#accounts-editor .acc-type-btn').forEach(b=>b.classList.remove('active'));
  renderAcceList();
  $('#accounts-editor').classList.add('show');
}
function closeAccountsEditor(){
  $('#accounts-editor').classList.remove('show');
  if (state.selectedAccountView !== 'networth' && !accInfo(state.selectedAccountView)) {
    state.selectedAccountView = 'networth';
    DB.set('selectedAccountView', state.selectedAccountView);
  }
  renderHome();
}
function setAcceAccType(type){
  acceAccType = type;
  $('#acce-type-cash').classList.toggle('active', type==='cash');
  $('#acce-type-card').classList.toggle('active', type==='card');
  $('#acce-name-input').value = '';
  $('#acce-desc-input').value = '';
  $('#acce-balance-input').value = '';
  $('#acce-form').classList.add('show');
}
function saveAcceAccount(){
  const name = $('#acce-name-input').value.trim();
  if (!name || !acceAccType) return;
  const bal = parseFloat($('#acce-balance-input').value) || 0;
  const acc = {
    id: 'acc' + Date.now().toString(36) + Math.random().toString(36).slice(2,5),
    type: acceAccType,
    name,
    description: $('#acce-desc-input').value.trim(),
    initialBalance: bal,
  };
  state.accounts.push(acc);
  DB.set('accounts', state.accounts);
  $('#acce-form').classList.remove('show');
  $$('#accounts-editor .acc-type-btn').forEach(b=>b.classList.remove('active'));
  acceAccType = null;
  renderAcceList();
}
function renderAcceList(){
  const list = $('#acce-list');
  const label = $('#acce-list-label');
  if (state.accounts.length === 0) { list.innerHTML=''; label.style.display='none'; return; }
  label.style.display='block';
  list.innerHTML = state.accounts.map(a=>`
    <div class="acc-item" data-id="${a.id}">
      <div class="acc-item-icon">${accountIcon(a.type)}</div>
      <div class="acc-item-info">
        <div class="acc-item-name">${escapeHtml(a.name)}</div>
        ${a.description ? `<div class="acc-item-desc">${escapeHtml(a.description)}</div>` : ''}
      </div>
      <div class="acc-item-balance">${fmt(a.initialBalance)}</div>
      <button type="button" class="acc-item-del" data-del="${a.id}">✕</button>
    </div>
  `).join('');
  list.querySelectorAll('[data-del]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if (state.accounts.length <= 1) { showToast(t('accounts.needAtLeastOne')); return; }
      showConfirmModal(t('confirm.deleteAccount'), ()=>{
        state.accounts = state.accounts.filter(a=>a.id !== btn.dataset.del);
        DB.set('accounts', state.accounts);
        renderAcceList();
      });
    });
  });
}
function wireAccountsEditor(){
  $('#acce-type-cash').addEventListener('click', ()=> setAcceAccType('cash'));
  $('#acce-type-card').addEventListener('click', ()=> setAcceAccType('card'));
  $('#acce-save-btn').addEventListener('click', saveAcceAccount);
  $('#acce-done-btn').addEventListener('click', closeAccountsEditor);
  $('#acce-cancel').addEventListener('click', closeAccountsEditor);
}

function buildCategoryChips(filterText){
  const grid = $('#cat-grid');
  const q = (filterText || '').trim().toLowerCase();
  const byType = CATS.filter(c => c.type === currentType);
  const list = q ? byType.filter(c => t(c.key).toLowerCase().includes(q)) : byType;
  grid.innerHTML = list.map(c=>
    `<button type="button" class="chip ${c.id===selectedCat?'active':''}" data-cat="${c.id}"><span>${c.icon}</span>${t(c.key)}</button>`
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
function buildAccountChips(){
  const grid = $('#account-grid');
  if (!grid) return;
  grid.innerHTML = state.accounts.map(a=>
    `<button type="button" class="chip" data-acc="${a.id}"><span>${accountIcon(a.type)}</span>${escapeHtml(a.name)}</button>`
  ).join('');
  grid.querySelectorAll('.chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      grid.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      selectedAccountForTx = chip.dataset.acc;
      validateForm();
    });
  });
}

function wireSheet(){
  $('#addtx-back').addEventListener('click', closeSheet);
  $('#type-expense').addEventListener('click', ()=> setType('expense'));
  $('#type-income').addEventListener('click', ()=> setType('income'));
  $('#amount-input').addEventListener('input', validateForm);
  $('#merchant-input').addEventListener('input', (e)=>{
    debounceLogo(e.target.value);
    validateForm();
  });
  $('#cat-search-input').addEventListener('input', (e)=> buildCategoryChips(e.target.value));
  $('#save-tx').addEventListener('click', saveTransaction);
  $('#cat-grid').addEventListener('wheel', (e)=>{
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      $('#cat-grid').scrollLeft += e.deltaY;
    }
  }, {passive:false});
}
function setType(t){
  currentType = t;
  $('#type-expense').classList.toggle('active', t==='expense');
  $('#type-income').classList.toggle('active', t==='income');
  selectedCat = null;
  $('#cat-search-input').value = '';
  buildCategoryChips();
  validateForm();
}
function openSheet(type, editId){
  buildAccountChips();
  editingTxId = editId || null;
  sheetReturnPage = $('#page-movements').classList.contains('active') ? 'page-movements' : 'page-home';
  const tx = editingTxId ? state.transactions.find(x=>x.id===editingTxId) : null;

  $('#addtx-title').textContent = tx ? t('sheet.editTitle') : t('sheet.title');

  $('#amount-input').value = tx ? tx.amount : '';
  $('#merchant-input').value = tx ? tx.merchant : '';
  $('#desc-input').value = tx ? (tx.description || '') : '';
  $('#cat-search-input').value = '';
  const now = new Date();
  $('#date-input').value = tx ? tx.date : now.toISOString().slice(0,10);
  $('#time-input').value = tx ? tx.time : now.toTimeString().slice(0,5);

  if (tx && tx.logo) {
    logoUrlCache[tx.merchant] = tx.logo;
    $('#logo-preview').innerHTML = `<img src="${tx.logo}"><span>${t('logo.found',{d:guessDomain(tx.merchant)})}</span>`;
  } else {
    $('#logo-preview').innerHTML = '';
  }

  $$('#account-grid .chip').forEach(c=>c.classList.remove('active'));
  const viewAcc = (state.selectedAccountView && state.selectedAccountView !== 'networth' && accInfo(state.selectedAccountView))
    ? state.selectedAccountView : null;
  selectedAccountForTx = tx ? tx.account : viewAcc;
  if (selectedAccountForTx) {
    $$('#account-grid .chip').forEach(c=> c.classList.toggle('active', c.dataset.acc===selectedAccountForTx));
  }

  setType(tx ? tx.type : (type || 'expense'));
  if (tx) {
    selectedCat = tx.category;
    buildCategoryChips();
  }
  validateForm();
  $('#page-home').classList.remove('active');
  $('#page-addtx').classList.add('active');
  updateBottomNav();
  setTimeout(()=> $('#amount-input').focus(), 350);
}
function closeSheet(){
  editingTxId = null;
  $('#page-addtx').classList.remove('active');
  $('#'+sheetReturnPage).classList.add('active');
  updateBottomNav();
}
function validateForm(){
  const amt = parseFloat($('#amount-input').value);
  const merchant = $('#merchant-input').value.trim();
  const ok = amt > 0 && merchant.length > 0 && selectedCat && selectedAccountForTx;
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
  previewEl.innerHTML = `<span>${t('logo.searching')}</span>`;
  const img = new Image();
  img.onload = () => {
    logoUrlCache[name] = url;
    previewEl.innerHTML = `<img src="${url}"><span>${t('logo.found',{d:domain})}</span>`;
  };
  img.onerror = () => {
    delete logoUrlCache[name];
    previewEl.innerHTML = `<span>${t('logo.notfound')}</span>`;
  };
  img.src = url;
}

function saveTransaction(){
  const amt = parseFloat($('#amount-input').value);
  const merchant = $('#merchant-input').value.trim();
  const description = $('#desc-input').value.trim();
  const date = $('#date-input').value || new Date().toISOString().slice(0,10);
  const time = $('#time-input').value || new Date().toTimeString().slice(0,5);

  if (editingTxId) {
    const idx = state.transactions.findIndex(x=>x.id===editingTxId);
    if (idx !== -1) {
      state.transactions[idx] = {
        ...state.transactions[idx],
        type: currentType,
        amount: Math.abs(amt),
        merchant,
        description,
        category: selectedCat,
        account: selectedAccountForTx,
        date,
        time,
        logo: logoUrlCache[merchant] || null,
      };
    }
    DB.set('transactions', state.transactions);
    closeSheet();
    renderHome();
    renderMovements();
    showToast(t('toast.updated'));
    return;
  }

  const tx = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2,6),
    type: currentType,
    amount: Math.abs(amt),
    merchant,
    description,
    category: selectedCat,
    account: selectedAccountForTx,
    date,
    time,
    logo: logoUrlCache[merchant] || null,
  };
  state.transactions.unshift(tx);
  DB.set('transactions', state.transactions);
  closeSheet();
  renderHome();
  renderMovements();
  showToast(currentType==='expense' ? t('toast.expenseAdded') : t('toast.incomeAdded'));
}

function deleteTransaction(id){
  state.transactions = state.transactions.filter(t=>t.id!==id);
  DB.set('transactions', state.transactions);
  renderHome();
  renderMovements();
  showToast(t('toast.deleted'));
}

function fmt(n){
  const currency = state.currency || 'EUR';
  const locale = currency === 'USD' ? 'en-US' : 'es-ES';
  try {
    return n.toLocaleString(locale, {style:'currency', currency});
  } catch(e){
    return n.toFixed(2) + ' ' + currency;
  }
}
function catInfo(id){ return CATS.find(c=>c.id===id) || CATS[CATS.length-1]; }
function accInfo(id){ return state.accounts.find(a=>a.id===id); }

function txRowHTML(tx){
  const c = catInfo(tx.category);
  const acc = accInfo(tx.account);
  const logo = tx.logo
    ? `<img src="${tx.logo}" onerror="this.parentElement.textContent='${initials(tx.merchant)}'">`
    : initials(tx.merchant);
  const badgeIcon = tx.type==='income'
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12l7 7 7-7"/></svg>';
  return `<div class="tx-row" data-id="${tx.id}">
      <div class="tx-logo-wrap">
        <div class="tx-logo">${logo}</div>
        <div class="tx-badge ${tx.type==='income'?'income':'expense'}">${badgeIcon}</div>
      </div>
      <div class="tx-info">
        <div class="tx-name">${escapeHtml(tx.merchant)}</div>
        <div class="tx-meta">${formatDay(tx.date)}, ${tx.time} · ${t(c.key)}</div>
      </div>
      <div class="tx-right">
        <div class="tx-amount ${tx.type==='income'?'pos':'neg'}">${tx.type==='income'?'+':'-'}${fmt(tx.amount)}</div>
        <div class="tx-account">${acc ? `<span class="tx-account-icon">${accountIcon(acc.type)}</span>${escapeHtml(acc.name)}` : ''}</div>
      </div>
    </div>`;
}
function wireTxRows(container){
  container.querySelectorAll('.tx-row').forEach(row=>{
    let pressTimer;
    let longPressed = false;
    const start = ()=>{
      longPressed = false;
      pressTimer = setTimeout(()=>{ longPressed = true; confirmDelete(row.dataset.id); }, 550);
    };
    const cancel = ()=> clearTimeout(pressTimer);
    row.addEventListener('touchstart', start);
    row.addEventListener('touchend', cancel);
    row.addEventListener('mousedown', start);
    row.addEventListener('mouseup', cancel);
    row.addEventListener('click', ()=>{
      if (!longPressed) openTxDetail(row.dataset.id);
    });
  });
}

function compareTxDesc(a, b){
  const ka = a.date + a.time, kb = b.date + b.time;
  if (ka !== kb) return kb.localeCompare(ka);
  return (b.id || '').localeCompare(a.id || '');
}
function renderHome(){
  let balance;
  const iconEl = $('#balance-label-icon');
  if (state.selectedAccountView === 'networth' || !accInfo(state.selectedAccountView)) {
    balance = netWorth();
    $('#balance-label-text').textContent = t('accounts.networth');
    iconEl.innerHTML = '';
    iconEl.classList.remove('show');
  } else {
    balance = accountBalance(state.selectedAccountView);
    $('#balance-label-text').textContent = accInfo(state.selectedAccountView).name;
    iconEl.innerHTML = accountIcon(accInfo(state.selectedAccountView).type);
    iconEl.classList.add('show');
  }
  $('#balance-amount').textContent = fmt(balance);

  const list = $('#tx-list');
  let items = state.transactions.slice();
  if (state.selectedAccountView !== 'networth' && accInfo(state.selectedAccountView)) {
    items = items.filter(tx=> tx.account === state.selectedAccountView);
  }
  if (searchQuery) {
    items = items.filter(tx => tx.merchant.toLowerCase().includes(searchQuery));
  }
  if (items.length === 0) {
    list.innerHTML = `<div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10h18M7 15h2m4 0h4M5 6h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/></svg>
      <p>${searchQuery ? t('empty.noResults') : t('empty.noMovements')}</p>
    </div>`;
    $('#tx-widget-fade').classList.remove('show');
    $('#tx-show-all-btn').classList.remove('show');
    return;
  }
  items.sort(compareTxDesc);
  const previewItems = items.slice(0, 5);
  $('#tx-widget-fade').classList.toggle('show', previewItems.length >= 4);
  $('#tx-show-all-btn').classList.add('show');
  list.innerHTML = previewItems.map(txRowHTML).join('');
  wireTxRows(list);
}

function matchesPeriod(tx, period){
  if (period === 'all') return true;
  const d = new Date(tx.date + 'T00:00:00');
  const now = new Date(); now.setHours(0,0,0,0);
  if (period === 'day') {
    return tx.date === now.toISOString().slice(0,10);
  }
  if (period === 'week') {
    const dow = (now.getDay() + 6) % 7; // Monday = 0
    const monday = new Date(now); monday.setDate(now.getDate() - dow);
    const sunday = new Date(monday); sunday.setDate(monday.getDate() + 6);
    return d >= monday && d <= sunday;
  }
  if (period === 'month') {
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
  }
  if (period === 'year') {
    return d.getFullYear() === now.getFullYear();
  }
  return true;
}

function renderMovements(){
  const list = $('#mv-tx-list');
  let items = state.transactions.slice();

  if (mvSearchQuery) {
    items = items.filter(tx => tx.merchant.toLowerCase().includes(mvSearchQuery));
  }
  items = items.filter(tx => matchesPeriod(tx, mvFilter.period));
  if (mvFilter.category !== 'all') {
    items = items.filter(tx => tx.category === mvFilter.category);
  }
  if (mvFilter.account !== 'all') {
    items = items.filter(tx => tx.account === mvFilter.account);
  }

  if (items.length === 0) {
    list.innerHTML = `<div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10h18M7 15h2m4 0h4M5 6h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/></svg>
      <p>${(mvSearchQuery || mvFilter.period!=='all' || mvFilter.category!=='all' || mvFilter.account!=='all') ? t('empty.noResults') : t('empty.noMovements')}</p>
    </div>`;
    return;
  }
  items.sort(compareTxDesc);
  list.innerHTML = items.map(txRowHTML).join('');
  wireTxRows(list);
}

function buildMvFilterChips(){
  const periods = ['all','day','week','month','year'];
  $('#mv-filter-period').innerHTML = periods.map(p=>
    `<button type="button" class="chip ${mvFilter.period===p?'active':''}" data-p="${p}">${t('filter.'+p)}</button>`
  ).join('');
  $$('#mv-filter-period .chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      $$('#mv-filter-period .chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      mvFilter.period = chip.dataset.p;
    });
  });

  const catOpts = [{id:'all', label:t('filter.allCategories'), icon:'✦'}]
    .concat(CATS.map(c=>({id:c.id, label:t(c.key), icon:c.icon})));
  $('#mv-filter-category').innerHTML = catOpts.map(c=>
    `<button type="button" class="chip ${mvFilter.category===c.id?'active':''}" data-cat="${c.id}"><span>${c.icon}</span>${escapeHtml(c.label)}</button>`
  ).join('');
  $$('#mv-filter-category .chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      $$('#mv-filter-category .chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      mvFilter.category = chip.dataset.cat;
    });
  });

  const accOpts = [{id:'all', label:t('filter.allAccounts'), icon:''}]
    .concat(state.accounts.map(a=>({id:a.id, label:a.name, icon:accountIcon(a.type)})));
  $('#mv-filter-account').innerHTML = accOpts.map(a=>
    `<button type="button" class="chip ${mvFilter.account===a.id?'active':''}" data-acc="${a.id}">${a.icon?`<span>${a.icon}</span>`:''}${escapeHtml(a.label)}</button>`
  ).join('');
  $$('#mv-filter-account .chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      $$('#mv-filter-account .chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      mvFilter.account = chip.dataset.acc;
    });
  });
}
function openMvFilter(){
  $('#mv-filter-merchant-input').value = mvSearchQuery;
  buildMvFilterChips();
  $('#mv-filter-backdrop').classList.add('show');
  $('#mv-filter-sheet').classList.add('show');
}
function closeMvFilter(){
  $('#mv-filter-backdrop').classList.remove('show');
  $('#mv-filter-sheet').classList.remove('show');
}
function wireMovements(){
  $('#mv-avatar-btn').addEventListener('click', ()=> openProfile(false));
  $('#mv-gear-btn').addEventListener('click', openMvFilter);
  $('#mv-search-input').addEventListener('input', (e)=>{
    mvSearchQuery = e.target.value.trim().toLowerCase();
    renderMovements();
  });
  $('#mv-filter-close').addEventListener('click', closeMvFilter);
  $('#mv-filter-backdrop').addEventListener('click', closeMvFilter);
  $('#mv-filter-apply').addEventListener('click', ()=>{
    mvSearchQuery = $('#mv-filter-merchant-input').value.trim().toLowerCase();
    $('#mv-search-input').value = $('#mv-filter-merchant-input').value;
    closeMvFilter();
    renderMovements();
  });
  $('#mv-filter-clear').addEventListener('click', ()=>{
    mvFilter = { period:'all', category:'all', account:'all' };
    mvSearchQuery = '';
    $('#mv-search-input').value = '';
    $('#mv-filter-merchant-input').value = '';
    closeMvFilter();
    renderMovements();
  });
}
function openMovementsPage(){
  $$('.bottom-nav-btn').forEach(b=>b.classList.remove('active'));
  $('#nav-movements').classList.add('active');
  $$('.page').forEach(p=>p.classList.remove('active'));
  $('#page-movements').classList.add('active');
  updateBottomNav();
  renderMovements();
}
function confirmDelete(id){
  if (confirm(t('confirm.delete'))) deleteTransaction(id);
}

function openTxDetail(id){
  const tx = state.transactions.find(x=>x.id===id);
  if (!tx) return;
  const c = catInfo(tx.category);
  const acc = accInfo(tx.account);
  const logo = tx.logo
    ? `<img src="${tx.logo}" onerror="this.parentElement.textContent='${initials(tx.merchant)}'">`
    : initials(tx.merchant);
  const badgeIcon = tx.type==='income'
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12l7 7 7-7"/></svg>';

  $('#txdetail-title').textContent = tx.merchant;
  $('#txdetail-logo').innerHTML = logo;
  $('#txdetail-badge').innerHTML = badgeIcon;
  $('#txdetail-badge').className = 'tx-badge ' + (tx.type==='income' ? 'income' : 'expense');
  $('#txdetail-amount').textContent = (tx.type==='income'?'+':'-') + fmt(tx.amount);
  $('#txdetail-amount').className = 'txdetail-amount ' + (tx.type==='income'?'pos':'neg');
  $('#txdetail-date').textContent = `${formatDay(tx.date)}, ${tx.time}`;
  if (tx.description) {
    $('#txdetail-desc-row').style.display = '';
    $('#txdetail-desc').textContent = tx.description;
  } else {
    $('#txdetail-desc-row').style.display = 'none';
  }
  $('#txdetail-cat').textContent = t(c.key);
  $('#txdetail-acc').innerHTML = acc ? `<span class="txdetail-acc-icon">${accountIcon(acc.type)}</span>${escapeHtml(acc.name)}` : '';
  $('#txdetail-edit-btn').dataset.id = tx.id;

  $('#txdetail-backdrop').classList.add('show');
  $('#txdetail-sheet').classList.add('show');
}
function closeTxDetail(){
  $('#txdetail-backdrop').classList.remove('show');
  $('#txdetail-sheet').classList.remove('show');
}
function wireTxDetail(){
  $('#txdetail-close').addEventListener('click', closeTxDetail);
  $('#txdetail-backdrop').addEventListener('click', closeTxDetail);
  $('#txdetail-edit-btn').addEventListener('click', ()=>{
    const id = $('#txdetail-edit-btn').dataset.id;
    closeTxDetail();
    openSheet(null, id);
  });
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
  if (diff===0) return t('day.today');
  if (diff===1) return t('day.yesterday');
  const locale = state.language === 'en' ? 'en-US' : 'es-ES';
  return d.toLocaleDateString(locale, {day:'numeric', month:'short'});
}

function wireSettings(){
  $('#dark-switch').addEventListener('click', toggleTheme);
  $('#export-btn').addEventListener('click', exportData);
  $('#import-btn').addEventListener('click', ()=> $('#import-file').click());
  $('#import-file').addEventListener('change', importData);
  $('#reset-btn').addEventListener('click', openDeleteWarning);
  $('#delete-cancel-btn').addEventListener('click', closeDeleteModals);
  $('#delete-backdrop').addEventListener('click', closeDeleteModals);
  $('#delete-continue-btn').addEventListener('click', openDeletePinConfirm);
  $('#delete-pin-cancel').addEventListener('click', closeDeleteModals);
  wireKeypad('#delete-pin-keypad', onDeletePinDigit);
  $('#deletepin-btn').addEventListener('click', openDeletePinPasswordConfirm);
  $('#deletepin-pin-cancel').addEventListener('click', closeDeletePinPasswordModal);
  wireKeypad('#deletepin-pin-keypad', onDeletePinPasswordDigit);
  $('#changepin-btn').addEventListener('click', ()=> openChangePinScreen());
  $('#chpin-cancel').addEventListener('click', closeChangePinScreen);
}
function exportData(){
  const payload = {
    language: state.language,
    userName: state.userName,
    pronoun: state.pronoun,
    currency: state.currency,
    themeMode: state.themeMode,
    hue: state.hue,
    pinHash: state.pinHash,
    accounts: state.accounts,
    transactions: state.transactions,
    exportedAt: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `fyn-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(t('toast.exported'));
}
function applyImportedData(data){
  state.transactions = Array.isArray(data.transactions) ? data.transactions : [];
  if (Array.isArray(data.accounts)) state.accounts = data.accounts;
  if (typeof data.language === 'string') state.language = data.language;
  if (typeof data.userName === 'string') state.userName = data.userName;
  if (typeof data.pronoun === 'string') state.pronoun = data.pronoun;
  if (typeof data.currency === 'string') state.currency = data.currency;
  if (typeof data.themeMode === 'string') state.themeMode = data.themeMode;
  if (typeof data.hue === 'number') state.hue = data.hue;
  if ('pinHash' in data) state.pinHash = (typeof data.pinHash === 'string') ? data.pinHash : null;
  DB.set('transactions', state.transactions);
  DB.set('accounts', state.accounts);
  DB.set('language', state.language);
  DB.set('userName', state.userName);
  DB.set('pronoun', state.pronoun);
  DB.set('currency', state.currency);
  DB.set('themeMode', state.themeMode);
  DB.set('hue', state.hue);
  if ('pinHash' in data) DB.set('pinHash', state.pinHash);
}
function importData(e){
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!Array.isArray(data.transactions)) throw new Error('formato inválido');
      if (data.pinHash) {
        beginImportVerify(data, 'settings');
      } else if (confirm(t('confirm.import',{n:data.transactions.length}))) {
        applyImportedData(data);
        applyTranslations();
        applyTheme();
        applyHue(state.hue);
        buildAccountChips();
        renderGreeting();
        renderHome();
        showToast(t('toast.imported'));
      }
    } catch(err){
      alert(t('error.invalidBackup'));
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}
let deletePin = '';

function openDeleteWarning(){
  $('#delete-backdrop').classList.add('show');
  $('#delete-warning-modal').classList.add('show');
}
function openDeletePinConfirm(){
  $('#delete-warning-modal').classList.remove('show');
  if (!state.pinHash) {
    eraseAllData();
    return;
  }
  deletePin = '';
  renderDots($('#delete-pin-dots'), 0);
  $('#delete-pin-error').classList.remove('show');
  $('#delete-pin-modal').classList.add('show');
}
function closeDeleteModals(){
  $('#delete-backdrop').classList.remove('show');
  $('#delete-warning-modal').classList.remove('show');
  $('#delete-pin-modal').classList.remove('show');
  deletePin = '';
}
function onDeletePinDigit(d){
  const dotsEl = $('#delete-pin-dots');
  if (d === 'del') { deletePin = deletePin.slice(0,-1); renderDots(dotsEl, deletePin.length); return; }
  if (deletePin.length >= 4) return;
  deletePin += d;
  renderDots(dotsEl, deletePin.length);
  if (deletePin.length === 4) {
    setTimeout(async () => {
      const hash = await sha256(deletePin);
      if (hash === state.pinHash) {
        eraseAllData();
      } else {
        dotsEl.classList.add('shake');
        $$('#delete-pin-dots .pin-dot').forEach(el=>el.classList.add('err'));
        $('#delete-pin-error').classList.add('show');
        navigator.vibrate && navigator.vibrate(80);
        setTimeout(()=>{ dotsEl.classList.remove('shake'); deletePin=''; renderDots(dotsEl,0); }, 450);
      }
    }, 100);
  }
}
function eraseAllData(){
  ['language','pinHash','userName','pronoun','currency','accounts','selectedAccountView','avatar','themeMode','hue','transactions','onboardingDone']
    .forEach(key => localStorage.removeItem(key));
  closeDeleteModals();
  location.reload();
}

let deletePinPassword = '';
function openDeletePinPasswordConfirm(){
  deletePinPassword = '';
  $('#delete-backdrop').classList.add('show');
  $('#deletepin-pin-modal').classList.add('show');
  $('#deletepin-pin-error').classList.remove('show');
  renderDots($('#deletepin-pin-dots'), 0);
}
function closeDeletePinPasswordModal(){
  $('#delete-backdrop').classList.remove('show');
  $('#deletepin-pin-modal').classList.remove('show');
  deletePinPassword = '';
}
function onDeletePinPasswordDigit(d){
  const dotsEl = $('#deletepin-pin-dots');
  if (d === 'del') { deletePinPassword = deletePinPassword.slice(0,-1); renderDots(dotsEl, deletePinPassword.length); return; }
  if (deletePinPassword.length >= 4) return;
  deletePinPassword += d;
  renderDots(dotsEl, deletePinPassword.length);
  if (deletePinPassword.length === 4) {
    setTimeout(async () => {
      const hash = await sha256(deletePinPassword);
      if (hash === state.pinHash) {
        state.pinHash = null;
        DB.set('pinHash', null);
        closeDeletePinPasswordModal();
        refreshPinRows();
        showToast(t('toast.pinDeleted'));
      } else {
        dotsEl.classList.add('shake');
        $$('#deletepin-pin-dots .pin-dot').forEach(el=>el.classList.add('err'));
        $('#deletepin-pin-error').classList.add('show');
        navigator.vibrate && navigator.vibrate(80);
        setTimeout(()=>{ dotsEl.classList.remove('shake'); deletePinPassword=''; renderDots(dotsEl,0); }, 450);
      }
    }, 100);
  }
}
function wireForgotPin(){
  $('#forgot-pin-btn').addEventListener('click', ()=>{
    $('#forgot-backdrop').classList.add('show');
    $('#forgot-modal').classList.add('show');
  });
  $('#forgot-cancel-btn').addEventListener('click', closeForgotModal);
  $('#forgot-backdrop').addEventListener('click', closeForgotModal);
  $('#forgot-erase-btn').addEventListener('click', eraseAllData);
}
function closeForgotModal(){
  $('#forgot-backdrop').classList.remove('show');
  $('#forgot-modal').classList.remove('show');
}

let toastTimer;
function showToast(msg){
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> el.classList.remove('show'), 1800);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', ()=> navigator.serviceWorker.register('sw.js').catch(()=>{}));
}
