/*
  CharmCraft — Admin Dashboard Engine (reconstructed)
*/

(function () {
  'use strict';

  function $(id) { return document.getElementById(id); }

  function navigateAdmin(page) {
    document.querySelectorAll('.admin-nav-item').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-page') === page);
    });
    var main = $('admin-main-content');
    main.innerHTML = '<h2>' + page + '</h2><p>Admin module loaded.</p>';
  }

  function initAdmin() {
    console.log('admin init executed');
    bindAdminEvents();
  }

  function bindAdminEvents() {
    console.log('admin bindEvents executed');
    $('btn-admin-login').addEventListener('click', function () {
      var user = $('admin-username').value;
      var pw = $('admin-password').value;
      if (!user || !pw) {
        $('login-error').textContent = 'Please enter username and password.';
        return;
      }
      $('admin-login').classList.remove('active');
      $('admin-app').classList.add('active');
      $('login-error').textContent = '';
    });

    $('btn-admin-logout').addEventListener('click', function () {
      $('admin-app').classList.remove('active');
      $('admin-login').classList.add('active');
    });

    $('btn-menu-toggle').addEventListener('click', function () {
      $('admin-sidebar').classList.toggle('open');
    });

    document.querySelectorAll('.admin-nav-item').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        navigateAdmin(a.getAttribute('data-page'));
      });
    });
  }

  window.initAdmin = initAdmin;
  window.bindAdminEvents = bindAdminEvents;

  document.addEventListener('DOMContentLoaded', function () {
    initAdmin();
  });
})();
