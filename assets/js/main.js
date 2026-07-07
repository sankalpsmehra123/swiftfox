/* ==========================================================================
   SwiftFox — shared site behaviour
   Mobile nav, enquiry modal (with triggers), form validation + Google Form
   submission. Include form-config.js BEFORE this file on every page.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
  }

  /* ---------- Modal elements (optional — not every page has one) ---------- */
  var modalOverlay = document.getElementById('modalOverlay');
  var modalBody, modalSuccess, stickyCta;

  if (modalOverlay) {
    modalBody = document.getElementById('modalBody');
    modalSuccess = document.getElementById('modalSuccess');
    stickyCta = document.getElementById('stickyCta');

    window.openModal = function () {
      modalOverlay.classList.add('open');
      modalBody.style.display = 'block';
      modalSuccess.style.display = 'none';
      document.body.style.overflow = 'hidden';
    };
    window.closeModal = function () {
      modalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) window.closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') window.closeModal();
    });

    if (stickyCta) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 480) stickyCta.classList.add('show');
        else stickyCta.classList.remove('show');
      });
    }

    // Modal now only opens on deliberate button clicks, not on scroll,
    // page load, or exit-intent.
  }

  /* ---------- Form validation + Google Form submit ---------- */
  var cfg = window.SWIFTFOX_FORM_CONFIG;

  function wireForm(form) {
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      var name = form.querySelector('[data-field="name"]');
      var nameWrap = form.querySelector('[data-wrap="name"]');
      if (name.value.trim().length < 2) { nameWrap.classList.add('invalid'); valid = false; }
      else { nameWrap.classList.remove('invalid'); }

      var email = form.querySelector('[data-field="email"]');
      var emailWrap = form.querySelector('[data-wrap="email"]');
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) { emailWrap.classList.add('invalid'); valid = false; }
      else { emailWrap.classList.remove('invalid'); }

      var phone = form.querySelector('[data-field="phone"]');
      var phoneWrap = form.querySelector('[data-wrap="phone"]');
      var phoneDigits = phone.value.replace(/\D/g, '');
      var phonePattern = /^[6-9]\d{9}$/;
      if (!phonePattern.test(phoneDigits)) { phoneWrap.classList.add('invalid'); valid = false; }
      else { phoneWrap.classList.remove('invalid'); }

      var service = form.querySelector('[data-field="service"]');
      var serviceWrap = form.querySelector('[data-wrap="service"]') || service.parentElement;
      var allowedServices = cfg && Array.isArray(cfg.SERVICE_OPTIONS)
        ? cfg.SERVICE_OPTIONS
        : [];
      var serviceValue = service ? service.value.trim() : '';
      if (!serviceValue || (allowedServices.length && allowedServices.indexOf(serviceValue) === -1)) {
        if (serviceWrap) serviceWrap.classList.add('invalid');
        valid = false;
      } else {
        if (serviceWrap) serviceWrap.classList.remove('invalid');
      }

      if (!valid) return;

      submitToGoogleForm({
        name: name.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        service: service ? service.value : ''
      });

      var isInModal = !!form.closest('#modalBody');
      var successEl = isInModal ? null : document.getElementById(form.dataset.successTarget);

      form.reset();

      if (isInModal) {
        modalBody.style.display = 'none';
        modalSuccess.style.display = 'block';
        setTimeout(window.closeModal, 2600);
      } else if (successEl) {
        form.style.display = 'none';
        successEl.style.display = 'block';
      }
    });
  }

  document.querySelectorAll('form[data-enquiry-form]').forEach(wireForm);

  /* Posts the enquiry to Google Forms via its formResponse endpoint.
     mode:'no-cors' means we can't read the response, so we treat the
     request as successful once it's sent — this is the standard way
     to submit a Google Form from a static site with no backend. */
  function submitToGoogleForm(data) {
    var cfg = window.SWIFTFOX_FORM_CONFIG;
    if (!cfg || cfg.FORM_ID.indexOf('REPLACE_WITH') === 0) {
      console.warn('SwiftFox enquiry form: Google Form is not configured yet. ' +
        'Edit assets/js/form-config.js with your Form ID and entry IDs. ' +
        'Captured data (not sent):', data);
      return;
    }

    var url = 'https://docs.google.com/forms/d/e/' + cfg.FORM_ID + '/formResponse';
    var params = new URLSearchParams();
    params.append(cfg.ENTRY_NAME, data.name);
    params.append(cfg.ENTRY_EMAIL, data.email);
    params.append(cfg.ENTRY_PHONE, data.phone);
    if (cfg.ENTRY_SERVICE && data.service) params.append(cfg.ENTRY_SERVICE, data.service);

    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    }).catch(function (err) {
      console.error('SwiftFox enquiry form: submission failed', err);
    });
  }

});
