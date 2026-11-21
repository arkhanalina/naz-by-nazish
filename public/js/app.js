/**
 * naz by nazish — Architecture & Spatial Design
 * Client-Side JavaScript Application
 */

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  initNavigation();
  initHeaderScroll();
  initPortfolioFilter();
  initPortfolioLightbox();
  initFAQAccordion();
  initContactForm();
}

if (document.readyState !== 'loading') {
  initApp();
}

/* ==========================================================================
   Navigation & Page Routing System
   ========================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, [data-navigate]');
  const pageViews = document.querySelectorAll('.page-view');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  function navigateTo(pageId) {
    if (!pageId) return;
    
    // Normalize pageId
    pageId = pageId.replace('#', '');

    // Map legacy pricing hash to services if services view is present
    if (pageId === 'pricing' && document.getElementById('services')) {
      pageId = 'services';
    } else if (pageId === 'services' && !document.getElementById('services') && document.getElementById('pricing')) {
      pageId = 'pricing';
    }

    const targetPage = document.getElementById(pageId) || document.getElementById('home');
    if (!targetPage) return;

    // Update active view
    pageViews.forEach(view => {
      view.classList.remove('active');
    });
    targetPage.classList.add('active');

    // Update active nav link
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      const linkTarget = link.getAttribute('href')?.replace('#', '').replace('.html', '') || link.getAttribute('data-navigate');
      if (linkTarget === pageId || (pageId === 'services' && linkTarget === 'pricing')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile menu if open
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      if (mobileToggle) mobileToggle.classList.remove('active');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Dynamic Title based on current language
    window.updateI18nTitles = function() {
      const rawHash = window.location.hash.replace('#', '') || 'home';
      const currentHash = (rawHash === 'pricing' && document.getElementById('services')) ? 'services' : rawHash;
      const lang = localStorage.getItem('naz_lang') || 'en';
      
      const titlesMap = {
        en: {
          home: 'naz by nazish — Architecture & Spatial Design | Ar. Alina Nazish',
          services: 'Architectural Services & Practice — naz by nazish',
          pricing: 'Architectural Services & Practice — naz by nazish',
          portfolio: 'Selected Works & Portfolio — naz by nazish',
          faq: 'Practice & FAQ — naz by nazish',
          contact: 'Inquiry — naz by nazish'
        },
        ar: {
          home: 'ناز باي نزيش — العمارة والتصميم المكاني | المهندسة ألينا نزيش',
          services: 'الخدمات والممارسات المعمارية — ناز باي نزيش',
          pricing: 'الخدمات والممارسات المعمارية — ناز باي نزيش',
          portfolio: 'معرض المشاريع المعمارية — ناز باي نزيش',
          faq: 'المنهجية والأسئلة الشائعة — ناز باي نزيش',
          contact: 'الاستفسارات والتواصل — ناز باي نزيش'
        },
        ru: {
          home: 'naz by nazish — Архитектура и пространственный дизайн | Арх. Алина Назиш',
          services: 'Архитектурные услуги и практика — naz by nazish',
          pricing: 'Архитектурные услуги и практика — naz by nazish',
          portfolio: 'Архитектурное портфолио — naz by nazish',
          faq: 'Практика и FAQ — naz by nazish',
          contact: 'Запрос — naz by nazish'
        }
      };

      const langTitles = titlesMap[lang] || titlesMap.en;
      document.title = langTitles[currentHash] || langTitles.home;
    };

    window.updateI18nTitles();

    // Recalculate open FAQ heights when switching to FAQ page
    if (pageId === 'faq') {
      setTimeout(() => {
        document.querySelectorAll('.faq-item.open').forEach(item => {
          const content = item.querySelector('.faq-content');
          if (content) {
            content.style.maxHeight = (content.scrollHeight > 0 ? content.scrollHeight + 30 : 600) + 'px';
          }
        });
      }, 50);
    }

    // Update URL hash without breaking history
    if (history.pushState) {
      history.pushState(null, null, `#${pageId}`);
    } else {
      location.hash = `#${pageId}`;
    }
  }

  // Bind click events to nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const navTarget = link.getAttribute('data-navigate');

      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.replace('#', '');
        navigateTo(targetId);
      } else if (navTarget) {
        e.preventDefault();
        navigateTo(navTarget);
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && mobileMenu && !mobileToggle.dataset.listenerAttached) {
    mobileToggle.dataset.listenerAttached = 'true';
    mobileToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = mobileMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('open') && 
          !mobileMenu.contains(e.target) && 
          !mobileToggle.contains(e.target)) {
        mobileMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      }
    });
  }

  // Handle initial page load hash
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && document.getElementById(initialHash)) {
    navigateTo(initialHash);
  } else {
    navigateTo('home');
  }

  // Handle popstate hash changes
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    navigateTo(hash);
  });
}

/* ==========================================================================
   Header Scroll State
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   Portfolio Filter System (Residential & Commercial Architecture)
   ========================================================================== */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-card');

  if (!filterBtns.length || !portfolioItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      // Active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter animation
      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(15px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   Portfolio Lightbox System
   ========================================================================== */
function initPortfolioLightbox() {
  const lightboxModal = document.getElementById('portfolioLightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  if (!lightboxModal) return;

  portfolioCards.forEach(card => {
    card.addEventListener('click', () => {
      const itemKey = card.getAttribute('data-item-key') || '';
      const lang = localStorage.getItem('naz_lang') || 'en';
      const dict = (window.translations && window.translations[lang]) ? window.translations[lang] : {};

      const title = (itemKey && dict[`${itemKey}_title`]) || card.querySelector('.portfolio-card-title')?.innerText || 'Architectural Project';
      const isRes = card.getAttribute('data-category') === 'residential';
      const category = isRes ? (dict['badge_residential'] || 'Residential Architecture') : (dict['badge_commercial'] || 'Commercial & Hospitality');
      const imgSrc = card.querySelector('img')?.src || '';
      const outcome = (itemKey && dict[`${itemKey}_outcome`]) || card.getAttribute('data-outcome') || 'Spatial Planning & Architecture';
      const desc = (itemKey && dict[`${itemKey}_desc`]) || card.getAttribute('data-desc') || 'Bespoke architectural design, spatial reconfiguration, and materiality curation by Ar. Alina Nazish.';

      const titleEl = document.getElementById('lightboxTitle');
      const catEl = document.getElementById('lightboxCategory');
      const imgEl = document.getElementById('lightboxImage');
      const outcomeEl = document.getElementById('lightboxOutcome');
      const descEl = document.getElementById('lightboxDesc');

      if (titleEl) titleEl.innerText = title;
      if (catEl) catEl.innerText = category;
      if (imgEl) imgEl.src = imgSrc;
      if (outcomeEl) outcomeEl.innerText = outcome;
      if (descEl) descEl.innerText = desc;

      const inquiryBtn = document.getElementById('lightboxInquiryBtn');
      if (inquiryBtn) {
        if (dict['lightbox_inquiry_btn']) {
          inquiryBtn.innerText = dict['lightbox_inquiry_btn'];
        }
        inquiryBtn.href = window.location.pathname.includes('contact') ? '#consultationForm' : (document.getElementById('contact') ? '#contact' : 'contact.html');
      }

      lightboxModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('open');
      document.body.style.overflow = 'auto';
    });
  }

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      lightboxModal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });
}

/* ==========================================================================
   FAQ Accordion Logic
   ========================================================================== */
function initFAQAccordion() {
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.faq-trigger');
    if (!trigger) return;

    e.preventDefault();
    e.stopPropagation();

    const faqItem = trigger.closest('.faq-item');
    if (!faqItem) return;

    const isOpen = faqItem.classList.contains('open');
    const parentList = faqItem.closest('.faq-list') || document;

    // Close all other items in the same list
    parentList.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('open');
        const otherTrigger = item.querySelector('.faq-trigger');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        const content = item.querySelector('.faq-content');
        if (content) content.style.maxHeight = null;
      }
    });

    // Toggle selected item
    if (isOpen) {
      faqItem.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
      const content = faqItem.querySelector('.faq-content');
      if (content) content.style.maxHeight = null;
    } else {
      faqItem.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
      const content = faqItem.querySelector('.faq-content');
      if (content) {
        requestAnimationFrame(() => {
          const height = content.scrollHeight;
          content.style.maxHeight = (height > 0 ? height + 30 : 600) + 'px';
        });
      }
    }
  });

  // Calculate height for initially open FAQ items on load
  document.querySelectorAll('.faq-item.open').forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    const content = item.querySelector('.faq-content');
    if (content) {
      content.style.maxHeight = (content.scrollHeight > 0 ? content.scrollHeight + 30 : 600) + 'px';
    }
  });
}

/* ==========================================================================
   Architectural Inquiry Form Handler
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('consultationForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName')?.value.trim() || 'Client';
    const phone = document.getElementById('formPhone')?.value.trim() || 'Not specified';
    const userRole = document.getElementById('formUserRole')?.value || 'Private Homeowner';
    const location = document.getElementById('formLocation')?.value || 'Dubai';
    const propType = document.getElementById('formPropType')?.value || 'Residential Architecture';
    const planTier = document.getElementById('formPlanTier')?.value || 'Full Architecture & Spatial Design';
    const notes = document.getElementById('formNotes')?.value.trim() || 'No additional project brief provided.';

    const subject = `Architectural Inquiry: ${name} (${propType})`;
    const body = `Hello Ar. Alina Nazish,

I would like to initiate an inquiry for naz by nazish.

Client Name: ${name}
Client Role: ${userRole}
Phone / WhatsApp: ${phone}
Project Location: ${location}
Project Typology: ${propType}
Services Required: ${planTier}

Project Brief & Details:
${notes}`;

    // Display inline confirmation banner
    let alertBanner = document.getElementById('consultationSuccessBanner');
    if (!alertBanner) {
      alertBanner = document.createElement('div');
      alertBanner.id = 'consultationSuccessBanner';
      alertBanner.style.cssText = 'background: rgba(184, 151, 106, 0.15); border: 1px solid var(--gold-dark); border-radius: 8px; padding: 1.25rem; margin-bottom: 1.5rem; text-align: center; color: var(--text-primary); font-size: 0.95rem; line-height: 1.5;';
      contactForm.parentNode.insertBefore(alertBanner, contactForm);
    }
    const currentLang = localStorage.getItem('naz_lang') || 'en';
    const successMessages = {
      en: 'Thank you for your inquiry! Ar. Alina Nazish will review your project brief and contact you shortly.',
      ar: 'شكراً لاستفسارك! ستقوم المهندسة ألينا نزيش بمراجعة تفاصيل طلبك والتواصل معك قريباً.',
      ru: 'Благодарим за ваш запрос! Арх. Алина Назиш ознакомится с описанием проекта и свяжется с вами в ближайшее время.'
    };
    alertBanner.innerHTML = `<strong>${successMessages[currentLang] || successMessages.en}</strong>`;
    alertBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Launch email client with pre-filled inquiry details
    const mailtoUrl = `mailto:ar.khan.alina@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    contactForm.reset();
  });
}
