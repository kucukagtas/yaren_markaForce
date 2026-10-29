document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // navbar scroll
  const navbar = document.getElementById('mainNavbar');

  function handleNavbarScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('navbar-shrink');
    } else {
      navbar.classList.remove('navbar-shrink');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll();

  // mobile menu
  const navLinks = document.querySelectorAll('.yaren-navbar .nav-btn, .mobile-nav-btn');
  const navbarCollapse = document.getElementById('mobileMenu');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // flip cards
  const flipCards = document.querySelectorAll('.flip-card');

  flipCards.forEach(function (card) {
    card.addEventListener('click', function () {
      this.classList.toggle('is-flipped');
    });
  });

  // contact form
  const contactForm = document.getElementById('contactForm');
  const contactCard = document.getElementById('contactCard');
  const userNameInput = document.getElementById('userName');
  const userEmailInput = document.getElementById('userEmail');
  const userMessageInput = document.getElementById('userMessage');

  const feedbackAlert = document.getElementById('feedbackAlert');
  const feedbackIcon = document.getElementById('feedbackIcon');
  const feedbackMessage = document.getElementById('feedbackMessage');

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let isFormValid = true;
    contactCard.classList.remove('animate-shake', 'animate-success');

    // name check
    if (userNameInput.value.trim() === '') {
      userNameInput.classList.add('is-invalid');
      userNameInput.classList.remove('is-valid');
      isFormValid = false;
    } else {
      userNameInput.classList.remove('is-invalid');
      userNameInput.classList.add('is-valid');
    }

    // email check
    if (userEmailInput.value.trim() === '' || !isValidEmail(userEmailInput.value)) {
      userEmailInput.classList.add('is-invalid');
      userEmailInput.classList.remove('is-valid');
      isFormValid = false;
    } else {
      userEmailInput.classList.remove('is-invalid');
      userEmailInput.classList.add('is-valid');
    }

    // message check
    if (userMessageInput.value.trim() === '') {
      userMessageInput.classList.add('is-invalid');
      userMessageInput.classList.remove('is-valid');
      isFormValid = false;
    } else {
      userMessageInput.classList.remove('is-invalid');
      userMessageInput.classList.add('is-valid');
    }

    // error animation
    if (!isFormValid) {
      void contactCard.offsetWidth;
      contactCard.classList.add('animate-shake');

      feedbackAlert.className = 'alert alert-danger d-block mb-3 py-2';
      feedbackIcon.className = 'fa-solid fa-triangle-exclamation fs-5 me-2 text-danger';
      feedbackMessage.innerHTML = '<strong>Hata:</strong> Lütfen kırmızı işaretli alanları kontrol ediniz.';

      setTimeout(function () {
        contactCard.classList.remove('animate-shake');
      }, 600);

      return;
    }

    // success animation
    void contactCard.offsetWidth;
    contactCard.classList.add('animate-success');

    feedbackAlert.className = 'alert alert-success d-block mb-3 py-2';
    feedbackIcon.className = 'fa-solid fa-circle-check fs-5 me-2 text-success';
    feedbackMessage.innerHTML = '<strong>Teşekkürler ' + escapeHtml(userNameInput.value.trim()) + '!</strong> Mesajınız alındı, en kısa sürede bir kahve eşliğinde dönüş yapacağız.';

    contactForm.reset();

    userNameInput.classList.remove('is-valid');
    userEmailInput.classList.remove('is-valid');
    userMessageInput.classList.remove('is-valid');

    setTimeout(function () {
      feedbackAlert.classList.add('d-none');
      contactCard.classList.remove('animate-success');
    }, 5000);
  });

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // scroll to top
  const btnBackToTop = document.getElementById('btnBackToTop');

  function handleBackToTopVisibility() {
    if (window.scrollY > 350) {
      btnBackToTop.classList.add('show');
    } else {
      btnBackToTop.classList.remove('show');
    }
  }

  window.addEventListener('scroll', handleBackToTopVisibility);
  handleBackToTopVisibility();

  btnBackToTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // scroll reveal
  const revealGroups = [
    '#intro .hero-heading, #intro .hero-subtitle, #intro .hero-description, #intro .d-flex',
    '#about-us .section-title, #about-us .cards-gradient-wrapper > div, #about-us .flip-hint-badge',
    '#discover .section-title, #discover .section-lead, #discover .row > div',
    '#menu .section-title, #menu p.text-muted, #menu .menu-grid > div',
    '#contact-footer .contact-split-media, #contact-footer .contact-form-inner, #contact-footer .yaren-footer'
  ];

  revealGroups.forEach(function (selector) {
    const items = document.querySelectorAll(selector);
    items.forEach(function (el, index) {
      el.classList.add('reveal');
      el.style.transitionDelay = (index * 0.12) + 's';
    });
  });

  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  // disable image right click & drag
  document.addEventListener('contextmenu', function (event) {
    if (event.target.tagName === 'IMG') {
      event.preventDefault();
    }
  });

  document.addEventListener('dragstart', function (event) {
    if (event.target.tagName === 'IMG') {
      event.preventDefault();
    }
  });
});
