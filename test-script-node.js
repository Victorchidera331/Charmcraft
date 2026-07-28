const fs = require('fs');

// Minimal mock environment
global.document = {
  getElementById: function(id) {
    return {
      classList: { add: function() {}, remove: function() {} },
      addEventListener: function() {},
      querySelector: function() { return null; },
      textContent: '',
      innerHTML: '',
      value: '',
      checked: false,
      appendChild: function() {},
      scrollTop: 0,
      style: { width: '' },
      getAttribute: function() { return ''; }
    };
  },
  querySelector: function() { return null; },
  querySelectorAll: function() { return []; },
  createElement: function(tag) {
    return {
      classList: { add: function() {}, remove: function() {}, toggle: function() {} },
      innerHTML: '',
      appendChild: function() {},
      style: { display: '' }
    };
  },
  addEventListener: function() {}
};
global.localStorage = {
  getItem: function() { return null; },
  setItem: function() {},
  removeItem: function() {},
  clear: function() {}
};
global.alert = function() {};
global.confirm = function() { return true; };
global.console = { log: console.log, error: console.error };
global.window = { addFavorite: function() {}, removeFavorite: function() {} };

try {
  require('vm').runInThisContext(fs.readFileSync('script.js', 'utf8'));
  console.log('Script loaded without syntax errors');
} catch (e) {
  console.error('Script execution error:', e.message, 'at', e.stack);
}
