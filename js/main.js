/* ============================================
   UnfallExperten NRW – Interactive Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Sticky Header ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile Menu ---------- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    // close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- FAQ Accordion ---------- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');

      // close all
      document.querySelectorAll('.faq-item.active').forEach(i => {
        i.classList.remove('active');
      });

      // toggle clicked
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });


  /* ---------- Smooth Scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---------- Bar Chart Animation ---------- */
  const barFills = document.querySelectorAll('.bar-fill');
  if (barFills.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll('.bar-fill');
          fills.forEach(fill => {
            fill.style.width = fill.dataset.width;
            fill.classList.add('animated');
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const chartSection = document.querySelector('.bar-chart');
    if (chartSection) observer.observe(chartSection);
  }

  /* ---------- Scroll-In Animations ---------- */
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  if (animateElements.length) {
    const showObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          showObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animateElements.forEach(el => showObserver.observe(el));
  }

  /* ---------- Form Validation ---------- */
  const form = document.querySelector('.callback-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.querySelector('#name');
      const phone = form.querySelector('#phone');
      let valid = true;

      [name, phone].forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = '#E53E3E';
          valid = false;
        } else {
          input.style.borderColor = '';
        }
      });

      if (valid) {
        const btn = form.querySelector('.form-submit');
        btn.textContent = '✓ Anfrage gesendet!';
        btn.style.background = '#25D366';
        setTimeout(() => {
          btn.textContent = 'Rückruf anfordern';
          btn.style.background = '';
          form.reset();
        }, 3000);
      }
    });
  }

  /* ---------- Current Year ---------- */
  const yearEl = document.querySelector('.current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
