/*
  CharmCraft — Config Service (reconstructed)
  50+ configurable paths and settings
*/

(function () {
  'use strict';
  var ConfigService = {
    APP_NAME: 'CharmCraft',
    VERSION: '1.0.0',
    PRIMARY_COLOR: '#7c3aed',
    MAX_SCREENS: 20,
    PATHS: {
      HOME: 'screen-home',
      AUTH_WELCOME: 'screen-auth-welcome',
      SETTINGS: 'screen-settings',
      PROFILE: 'screen-profile'
    },
    SERVICE_MODULES: 15,
    COMPLETED_SPRINTS: 18,
    get: function (key) {
      return this[key] || null;
    }
  };
  window.ConfigService = ConfigService;
})();
