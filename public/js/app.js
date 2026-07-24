/**
 * naz by nazish — Luxury Interior Design & Staging
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
  initWhatsAppButtons();
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
    const targetPage = document.getElementById(pageId) || document.getElementById('home');

    if (!targetPage) return;

    // Update active view
    pageViews.forEach(view => {
      view.classList.remove('active');
    });
    targetPage.classList.add('active');

    // Update active nav link
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      const linkTarget = link.getAttribute('href')?.replace('#', '') || link.getAttribute('data-navigate');
      if (linkTarget === pageId) {
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
      const currentHash = window.location.hash.replace('#', '') || 'home';
      const lang = localStorage.getItem('naz_lang') || 'en';
      
      const titlesMap = {
        en: {
          home: 'naz by nazish — Luxury Interior Design & Staging',
          pricing: 'Pricing Plans — naz by nazish',
          portfolio: 'Portfolio — naz by nazish',
          faq: 'FAQ — naz by nazish',
          contact: 'Book Consultation — naz by nazish'
        },
        ar: {
          home: 'ناز باي نزيش — التنسيق العقاري والتصميم الداخلي الفاخر',
          pricing: 'خطط الأسعار — ناز باي نزيش',
          portfolio: 'معرض الأعمال — ناز باي نزيش',
          faq: 'الأسئلة الشائعة — ناز باي نزيش',
          contact: 'حجز استشارة — ناز باي نزيش'
        },
        ru: {
          home: 'naz by nazish — Дизайн интерьера и хоум-стейджинг в ОАЭ',
          pricing: 'Тарифы — naz by nazish',
          portfolio: 'Портфолио — naz by nazish',
          faq: 'Часто задаваемые вопросы — naz by nazish',
          contact: 'Записаться на консультацию — naz by nazish'
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
   Portfolio Filter System (Residential & Commercial)
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

      const title = (itemKey && dict[`${itemKey}_title`]) || card.querySelector('.portfolio-card-title')?.innerText || 'Luxury Project';
      const isRes = card.getAttribute('data-category') === 'residential';
      const category = isRes ? (dict['badge_residential'] || 'Residential') : (dict['badge_commercial'] || 'Commercial');
      const imgSrc = card.querySelector('img')?.src || '';
      const outcome = (itemKey && dict[`${itemKey}_outcome`]) || card.getAttribute('data-outcome') || 'Sold 3x faster';
      const desc = (itemKey && dict[`${itemKey}_desc`]) || card.getAttribute('data-desc') || 'Bespoke architectural layout, furniture curation, and lighting design by Ar. Alina Nazish.';

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

      const whatsappBtn = document.getElementById('lightboxWhatsappBtn');
      if (whatsappBtn) {
        if (dict['lightbox_wa_btn']) {
          whatsappBtn.innerText = dict['lightbox_wa_btn'];
        }
        const msg = encodeURIComponent(`Hello Ar. Alina, I am interested in a similar transformation to "${title}".`);
        whatsappBtn.href = `https://wa.me/971563092692?text=${msg}`;
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
        // Measure after adding 'open' so padding and CSS dimensions apply
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
   Contact Form to WhatsApp Handler
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('consultationForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName')?.value.trim() || 'Client';
    const phone = document.getElementById('formPhone')?.value.trim() || 'Not specified';
    const userRole = document.getElementById('formUserRole')?.value || 'Property Owner';
    const location = document.getElementById('formLocation')?.value || 'Dubai';
    const propType = document.getElementById('formPropType')?.value || 'Residential';
    const planTier = document.getElementById('formPlanTier')?.value || 'Essential (499 AED)';
    const notes = document.getElementById('formNotes')?.value.trim() || 'No additional details provided.';

    const text = `Hello Ar. Alina Nazish,

I would like to request a property consultation for naz by nazish.

*Client Name:* ${name}
*Client Role:* ${userRole}
*Phone/WhatsApp:* ${phone}
*Property Location:* ${location}
*Property Type:* ${propType}
*Service Tier Interested:* ${planTier}
*Property Details:* ${notes}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/971563092692?text=${encodedText}`;

    // Launch WhatsApp
    window.open(whatsappUrl, '_blank');
  });
}

/* ==========================================================================
   WhatsApp Dynamic Action Buttons
   ========================================================================== */
function initWhatsAppButtons() {
  const bookBtns = document.querySelectorAll('[data-plan-book]');

  bookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const planName = btn.getAttribute('data-plan-book');
      let text = `Hello Ar. Alina Nazish, I would like to book a consultation for the ${planName} tier for my property.`;
      
      const whatsappUrl = `https://wa.me/971563092692?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    });
  });
}
