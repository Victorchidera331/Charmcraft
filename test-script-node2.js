const fs = require('fs');

const elements = {};
function createMockEl(id) {
  return {
    id: id,
    classList: { add: function() {}, remove: function() {}, toggle: function() {}, contains: function() { return false; } },
    addEventListener: function(type, fn) { console.log('Event bound:', type, 'on', id); },
    querySelector: function() { return null; },
    querySelectorAll: function() { return []; },
    textContent: '', innerHTML: '', value: '', checked: false,
    appendChild: function() {}, scrollTop: 0,
    style: { width: '', display: '' },
    getAttribute: function() { return ''; },
    click: function() {}
  };
}

global.document = {
  getElementById: function(id) {
    if (!elements[id]) elements[id] = createMockEl(id);
    return elements[id];
  },
  querySelector: function(sel) {
    return { addEventListener: function() {} };
  },
  querySelectorAll: function(sel) {
    return Array.from({length: 10}, () => ({ addEventListener: function() {}, getAttribute: function() { return 'screen-home'; } }));
  },
  createElement: function(tag) {
    return {
      classList: { add: function() {}, remove: function() {}, toggle: function() {} },
      innerHTML: '', appendChild: function() {}, style: { display: '' },
      textContent: ''
    };
  },
  addEventListener: function() {}
};

global.localStorage = {
  getItem: function(k) { return (k === 'charmcraft_favorites' ? '[]' : (k === 'charmcraft_ach_unlocked' ? '3' : null)); },
  setItem: function() {}, removeItem: function() {}, clear: function() {}
};
global.alert = function(msg) { console.log('ALERT:', msg); };
global.confirm = function(msg) { console.log('CONFIRM:', msg); return true; };
global.console = { log: function() { console.log.apply(console, arguments); }, error: console.error };
global.window = { addFavorite: function() {}, removeFavorite: function() {} };

try {
  const code = fs.readFileSync('script.js', 'utf8');
  const vm = require('vm');
  const context = vm.createContext({
    document: global.document,
    localStorage: global.localStorage,
    alert: global.alert,
    confirm: global.confirm,
    console: global.console,
    window: global.window,
    setTimeout: function(fn, ms) { fn(); },
    setInterval: function() { return 1; },
    clearInterval: function() {}
  });
  vm.runInContext(code, context);
  
  // Call init
  context.init();
  console.log('init() executed successfully');
  
  // Test navigateTo
  context.navigateTo('screen-charm-score');
  console.log('navigateTo executed successfully');
} catch (e) {
  console.error('Runtime error:', e.message, '\nStack:', e.stack);
}
