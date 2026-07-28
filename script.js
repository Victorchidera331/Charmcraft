/*
  CharmCraft — Main App Engine (reconstructed)
  All interactivity, screen navigation, tool logic
*/

(function () {
  'use strict';

  // === STATE ===
  var currentScreen = 'screen-home';
  var previousScreen = 'screen-home';

  // === UTILS ===
  function $(id) { return document.getElementById(id); }

  // === NAVIGATION ===
  function navigateTo(screenId) {
    if (!$(screenId)) {
      console.error('navigateTo: screen not found:', screenId);
      return;
    }
    var prev = currentScreen;
    previousScreen = prev;
    $(prev).classList.remove('active');
    $(prev).classList.add('screen');
    $(screenId).classList.add('screen');
    $(screenId).classList.add('active');
    currentScreen = screenId;
  }

  // === INIT ===
  function init() {
    console.log('init() executed');
    bindEvents();
    updateProfileStats();
    updateTodayProgress();
    updateCharmScoreUI();
    renderAchievements();
    renderFavorites();
  }

  // === BIND EVENTS ===
  function bindEvents() {
    console.log('bindEvents() executed');

    // Bottom nav
    document.querySelectorAll('.nav-item').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-screen');
        navigateTo(target);
      });
    });

    // Auth buttons
    $('btn-auth-email').addEventListener('click', function () { navigateTo('screen-auth-login'); });
    $('btn-auth-guest').addEventListener('click', function () { navigateTo('screen-home'); alert('Guest mode active'); });
    $('btn-auth-google').addEventListener('click', function () { navigateTo('screen-home'); alert('Google sign-in'); });
    $('btn-goto-login').addEventListener('click', function () { navigateTo('screen-auth-login'); });
    $('btn-goto-register').addEventListener('click', function () { navigateTo('screen-auth-register'); });
    $('btn-goto-login2').addEventListener('click', function () { navigateTo('screen-auth-login'); });
    $('btn-goto-forgot').addEventListener('click', function () { navigateTo('screen-auth-forgot'); });
    $('btn-back-to-login').addEventListener('click', function () { navigateTo('screen-auth-login'); });

    // Back buttons
    document.querySelectorAll('.btn-back').forEach(function (btn) {
      btn.addEventListener('click', function () {
        navigateTo('screen-home');
      });
    });

    // Tool cards
    $('btn-reply-assistant').addEventListener('click', function () { navigateTo('screen-reply-assistant'); });
    $('btn-chat-analyzer').addEventListener('click', function () { navigateTo('screen-chat-analyzer'); });
    $('btn-pickup-lines').addEventListener('click', function () { navigateTo('screen-pickup-lines'); });
    $('btn-status-studio').addEventListener('click', function () { navigateTo('screen-status-studio'); });
    $('btn-convo-starter').addEventListener('click', function () { navigateTo('screen-convo-starter'); });
    $('btn-charm-score').addEventListener('click', function () { navigateTo('screen-charm-score'); });
    $('btn-account').addEventListener('click', function () { navigateTo('screen-account'); });
    $('btn-achievements').addEventListener('click', function () { navigateTo('screen-achievements'); });
    $('btn-conversation-practice').addEventListener('click', function () { navigateTo('screen-conversation-practice'); });
    $('btn-conversation-insights').addEventListener('click', function () { navigateTo('screen-conversation-insights'); });

    // Home actions
    $('btn-coach-send').addEventListener('click', sendCoachMessage);
    $('btn-go-premium-header').addEventListener('click', function () { navigateTo('screen-subscription'); });

    // Reply Assistant
    $('btn-generate-reply').addEventListener('click', generateReplies);

    // Chat Analyzer
    $('btn-analyze-chat').addEventListener('click', analyzeChat);

    // Pickup Lines
    $('btn-generate-pickup').addEventListener('click', generatePickup);

    // Status Studio
    $('btn-generate-status').addEventListener('click', generateStatus);

    // Conversation Starter
    $('btn-generate-starter').addEventListener('click', generateStarter);

    // Favorites
    $('nav-favorites').addEventListener('click', function () { navigateTo('screen-favorites'); });

    // Profile
    $('btn-edit-profile').addEventListener('click', function () { alert('Edit profile'); });
    $('btn-go-premium-profile').addEventListener('click', function () { navigateTo('screen-subscription'); });

    // Settings
    $('btn-open-admin').addEventListener('click', function () { window.location.href = 'admin.html'; });
    $('btn-reset-progress').addEventListener('click', resetProgress);
    $('btn-clear-memory').addEventListener('click', function () { localStorage.removeItem('charmcraft_memory'); alert('Memory cleared'); });

    // Practice
    $('btn-start-practice').addEventListener('click', startPractice);
    $('btn-finish-practice').addEventListener('click', finishPractice);
    $('btn-practice-send').addEventListener('click', sendPracticeMessage);

    // Auth submit
    $('btn-login-submit').addEventListener('click', loginSubmit);
    $('btn-register-submit').addEventListener('click', registerSubmit);
    $('btn-forgot-submit').addEventListener('click', forgotSubmit);

    // Account
    $('btn-account-logout').addEventListener('click', function () { navigateTo('screen-auth-welcome'); });
    $('btn-manage-subscription').addEventListener('click', function () { navigateTo('screen-subscription'); });
    $('btn-verify-email').addEventListener('click', function () { alert('Verification email sent'); });
    $('btn-sync-now').addEventListener('click', function () { alert('Sync started'); });

    // Subscription
    $('btn-sub-monthly').addEventListener('click', function () { alert('Monthly selected'); });
    $('btn-sub-yearly').addEventListener('click', function () { alert('Yearly selected'); });
    $('btn-sub-lifetime').addEventListener('click', function () { alert('Lifetime selected'); });
    $('btn-restore-purchases').addEventListener('click', function () { alert('Restoring...'); });

    // Premium
    $('btn-premium-monthly').addEventListener('click', function () { alert('Premium monthly'); });
    $('btn-premium-yearly').addEventListener('click', function () { alert('Premium yearly'); });

    // Dark mode
    $('toggle-dark-mode').addEventListener('change', function () {
      document.body.classList.toggle('dark-mode', $('toggle-dark-mode').checked);
      localStorage.setItem('charmcraft_dark_mode', $('toggle-dark-mode').checked ? '1' : '0');
    });

    // Font size
    $('setting-font-size').addEventListener('change', function () {
      localStorage.setItem('charmcraft_font_size', $('setting-font-size').value);
    });
  }

  // === TOOLS ===
  function sendCoachMessage() {
    var input = $('coach-input');
    var chatArea = $('coach-chat-area');
    if (!input || !chatArea) return;
    var text = input.value.trim();
    if (!text) return;
    var bubble = document.createElement('div');
    bubble.className = 'chat-bubble user-bubble';
    bubble.innerHTML = '<p>' + escapeHtml(text) + '</p>';
    chatArea.appendChild(bubble);
    input.value = '';
    chatArea.scrollTop = chatArea.scrollHeight;
    setTimeout(function () {
      var coachBubble = document.createElement('div');
      coachBubble.className = 'chat-bubble coach-bubble';
      coachBubble.innerHTML = '<p>Great question! Let me help with that. 💬</p>';
      chatArea.appendChild(coachBubble);
      chatArea.scrollTop = chatArea.scrollHeight;
    }, 600);
  }

  function generateReplies() {
    var input = $('reply-input');
    var container = $('reply-results');
    if (!input || !container) return;
    container.innerHTML = '<div class="result-card"><span class="result-text">"Hey! That sounds fun — I\'d be up for it. What time works?"</span><button class="btn-fav" onclick="addFavorite(this)">💜</button></div>';
  }

  function analyzeChat() {
    var input = $('analyzer-input');
    var container = $('analyzer-results');
    if (!input || !container) return;
    container.innerHTML = '<div class="result-card"><span class="result-text">Tone: Friendly • Engagement: High • Clarity: Clear</span></div>';
  }

  function generatePickup() {
    var container = $('pickup-results');
    if (!container) return;
    container.innerHTML = '<div class="result-card"><span class="result-text">"Are you a magician? Because whenever I look at you, everyone else disappears."</span></div>';
  }

  function generateStatus() {
    var container = $('status-results');
    if (!container) return;
    container.innerHTML = '<div class="result-card"><span class="result-text">"Not perfect, but perfectly me. ✨"</span></div>';
  }

  function generateStarter() {
    var container = $('starter-results');
    if (!container) return;
    container.innerHTML = '<div class="result-card"><span class="result-text">"What\'s the best thing that happened to you this week?"</span></div>';
  }

  function safeParse(key, def) {
    try {
      return JSON.parse(localStorage.getItem(key) || (def ? JSON.stringify(def) : '[]'));
    } catch (e) { return def || []; }
  }

  // === PROFILE & PROGRESS ===
  function updateProfileStats() {
    var used = parseInt(localStorage.getItem('charmcraft_tools_used') || '0', 10);
    var streak = parseInt(localStorage.getItem('charmcraft_streak') || '0', 10);
    var favs = safeParse('charmcraft_favorites', []);
    var elUsed = $('profile-tools-used');
    var elStreak = $('profile-streak');
    var elFavs = $('profile-favs-count');
    if (elUsed) elUsed.textContent = used;
    if (elStreak) elStreak.textContent = streak;
    if (elFavs) elFavs.textContent = (favs ? favs.length : 0);
  }

  function updateTodayProgress() {
    var xp = parseInt(localStorage.getItem('charmcraft_xp') || '0', 10);
    var level = Math.floor(xp / 100) + 1;
    var progress = (xp % 100) / 100 * 100;
    $('progress-level').textContent = 'Lv.' + level;
    $('progress-xp-text').textContent = (xp % 100) + '/100 XP';
    $('progress-xp-bar').style.width = progress + '%';
  }

  function updateCharmScoreUI() {
    var score = 72; // dynamic later
    $('charm-score-value').textContent = score;
  }

  // === FAVORITES ===
  function renderFavorites() {
    var container = $('favorites-list');
    var empty = $('favorites-empty');
    var favs = safeParse('charmcraft_favorites', []);
    if (!favs || !favs.length) {
      if (empty) empty.style.display = 'block';
      if (container) container.innerHTML = '';
      return;
    }
    if (empty) empty.style.display = 'none';
    container.innerHTML = '';
    favs.forEach(function (item, i) {
      var div = document.createElement('div');
      div.className = 'fav-item';
      div.innerHTML = '<span class="fav-item-text">' + escapeHtml(item) + '</span><button class="fav-item-remove" onclick="removeFavorite(' + i + ')">✕</button>';
      container.appendChild(div);
    });
  }

  window.addFavorite = function (btn) {
    var text = btn.parentElement.querySelector('.result-text').textContent;
    var favs = JSON.parse(localStorage.getItem('charmcraft_favorites') || '[]');
    if (favs.indexOf(text) === -1) {
      favs.push(text);
      localStorage.setItem('charmcraft_favorites', JSON.stringify(favs));
      btn.textContent = '💜';
      btn.classList.add('favorited');
      renderFavorites();
    }
  };

  window.removeFavorite = function (index) {
    var favs = JSON.parse(localStorage.getItem('charmcraft_favorites') || '[]');
    favs.splice(index, 1);
    localStorage.setItem('charmcraft_favorites', JSON.stringify(favs));
    renderFavorites();
  };

  // === PRACTICE ===
  function startPractice() {
    $('practice-chat-card').style.display = 'block';
    $('btn-start-practice').style.display = 'none';
    $('btn-finish-practice').style.display = 'inline-block';
    $('practice-opening-msg').innerHTML = '<p>Practice started! Type a message to chat with the scenario coach.</p>';
  }

  function finishPractice() {
    $('practice-chat-card').style.display = 'none';
    $('btn-start-practice').style.display = 'inline-block';
    $('btn-finish-practice').style.display = 'none';
    $('practice-summary').style.display = 'block';
    $('practice-feedback').style.display = 'block';
  }

  function sendPracticeMessage() {
    var input = $('practice-input');
    var area = $('practice-chat-area');
    if (!input || !area) return;
    var text = input.value.trim();
    if (!text) return;
    var bubble = document.createElement('div');
    bubble.className = 'chat-bubble user-bubble';
    bubble.innerHTML = '<p>' + escapeHtml(text) + '</p>';
    area.appendChild(bubble);
    input.value = '';
    area.scrollTop = area.scrollHeight;
    setTimeout(function () {
      var reply = document.createElement('div');
      reply.className = 'chat-bubble coach-bubble';
      reply.innerHTML = '<p>Interesting response! Keep practicing. 💡</p>';
      area.appendChild(reply);
      area.scrollTop = area.scrollHeight;
    }, 600);
  }

  // === AUTH ===
  function loginSubmit() {
    var email = $('login-email').value;
    var pw = $('login-password').value;
    $('login-error-msg').textContent = '';
    if (!email || !pw) {
      $('login-error-msg').textContent = 'Please fill all fields.';
      return;
    }
    navigateTo('screen-home');
  }

  function registerSubmit() {
    var name = $('register-name').value;
    var email = $('register-email').value;
    var pw = $('register-password').value;
    var confirm = $('register-confirm').value;
    $('register-error-msg').textContent = '';
    if (!name || !email || !pw || !confirm) {
      $('register-error-msg').textContent = 'Please fill all fields.';
      return;
    }
    if (pw !== confirm) {
      $('register-error-msg').textContent = 'Passwords do not match.';
      return;
    }
    localStorage.setItem('charmcraft_user', email);
    navigateTo('screen-home');
  }

  function forgotSubmit() {
    var email = $('forgot-email').value;
    $('forgot-error-msg').textContent = '';
    if (!email) {
      $('forgot-error-msg').textContent = 'Enter your email.';
      return;
    }
    $('forgot-error-msg').textContent = 'Reset link sent to ' + email;
  }

  // === ACHIEVEMENTS ===
  function renderAchievements() {
    var container = $('achievements-grid');
    var total = 24;
    var unlockedStr = localStorage.getItem('charmcraft_ach_unlocked') || '3';
    var unlocked = parseInt(unlockedStr, 10) || 3;
    $('ach-unlocked').textContent = unlocked;
    $('ach-total').textContent = total;
    // Basic render
    container.innerHTML = '';
    for (var i = 0; i < Math.min(unlocked, 5); i++) {
      var card = document.createElement('div');
      card.className = 'achievement-card unlocked';
      card.innerHTML = '<span class="achievement-icon">🏆</span><div class="achievement-info"><div class="achievement-name">Achievement ' + (i + 1) + '</div><div class="achievement-desc">Unlocked via practice.</div></div>';
      container.appendChild(card);
    }
  }

  // === RESET ===
  function resetProgress() {
    if (confirm('Reset all progress?')) {
      localStorage.clear();
      location.reload();
    }
  }

  // === ESCAPE HTML ===
  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // === GLOBAL EXPORTS ===
  window.init = init;
  window.bindEvents = bindEvents;
  window.navigateTo = navigateTo;

  // === AUTO INIT ===
  document.addEventListener('DOMContentLoaded', function () {
    init();
  });

})();
