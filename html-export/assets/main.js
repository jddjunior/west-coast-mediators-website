/* ─────────────────────────────────────────────────────────────
   West Coast Mediators — main.js
   Navbar scroll, mobile menu, schedule dropdown,
   credentials accordions, contact form success state
   ───────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── Navbar scroll class ──────────────────────────────────── */
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    function onScroll() {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile menu toggle ───────────────────────────────────── */
  var menuToggle = document.querySelector('.menu-toggle');
  var mobileNav  = document.querySelector('.mobile-nav');
  var menuIconOpen  = document.querySelector('.icon-menu');
  var menuIconClose = document.querySelector('.icon-close');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      if (menuIconOpen)  menuIconOpen.style.display  = open ? 'none'  : 'block';
      if (menuIconClose) menuIconClose.style.display = open ? 'block' : 'none';
    });

    /* Close mobile nav on link click */
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        if (menuIconOpen)  menuIconOpen.style.display  = 'block';
        if (menuIconClose) menuIconClose.style.display = 'none';
      });
    });
  }

  /* ── Desktop schedule dropdown(s) ─────────────────────────── */
  /* Supports multiple .schedule-wrap instances per page (e.g. the
     nav dropdown plus an in-page CTA dropdown). */
  var schedWraps = document.querySelectorAll('.schedule-wrap');

  if (schedWraps.length) {
    var schedInstances = [];

    schedWraps.forEach(function (wrap) {
      var btn = wrap.querySelector('.schedule-btn');
      var dropdown = wrap.querySelector('.schedule-dropdown');
      if (!btn || !dropdown) return;
      schedInstances.push({ btn: btn, dropdown: dropdown });
    });

    function closeAllSchedDropdowns() {
      schedInstances.forEach(function (inst) {
        inst.dropdown.classList.remove('open');
        inst.btn.setAttribute('aria-expanded', 'false');
      });
    }

    schedInstances.forEach(function (inst) {
      inst.btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var willOpen = !inst.dropdown.classList.contains('open');
        closeAllSchedDropdowns();
        if (willOpen) {
          inst.dropdown.classList.add('open');
          inst.btn.setAttribute('aria-expanded', 'true');
        }
      });

      inst.dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    });

    /* Close on outside click */
    document.addEventListener('click', closeAllSchedDropdowns);
  }

  /* ── Mobile schedule sub-accordion ───────────────────────── */
  var mobSchedToggle = document.querySelector('.mob-schedule-toggle');
  var mobSchedItems  = document.querySelector('.mob-schedule-items');

  if (mobSchedToggle && mobSchedItems) {
    mobSchedToggle.addEventListener('click', function () {
      var open = mobSchedItems.classList.toggle('open');
      mobSchedToggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* ── Credentials accordions (multiple on same page) ──────── */
  document.querySelectorAll('.attorney-creds-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panel = btn.nextElementSibling;
      if (!panel) return;
      var open = panel.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      var chevron = btn.querySelector('.chevron');
      if (chevron) chevron.style.transform = open ? 'rotate(180deg)' : '';
    });
  });

  /* ── Contact / inquiry form success state ─────────────────── */
  document.querySelectorAll('.js-contact-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var wrap    = form.closest('.js-form-wrap');
      var success = wrap && wrap.querySelector('.contact-success, .form-success');
      if (success) {
        form.style.display = 'none';
        success.classList.add('show');
      }
    });
  });

  /* ── Reset form buttons ────────────────────────────────────── */
  document.querySelectorAll('.js-reset-form').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var wrap    = btn.closest('.js-form-wrap');
      if (!wrap) return;
      var form    = wrap.querySelector('.js-contact-form');
      var success = wrap.querySelector('.contact-success, .form-success');
      if (form && success) {
        form.reset();
        form.style.display = '';
        success.classList.remove('show');
      }
    });
  });

  /* ── Smooth scroll for in-page anchor links ───────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href').slice(1);
      if (!id) return;
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        var navH = (document.querySelector('.navbar') || { offsetHeight: 0 }).offsetHeight;
        var top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();
