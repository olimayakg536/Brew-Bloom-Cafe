/**
 * Brew & Bloom Café - Interactive JavaScript
 * Simple, vanilla, robust scripts for college project demo.
 * Features:
 *  1. Day-based "Today's Special" dynamic updater
 *  2. Quick Reservation Form client validation & friendly feedback
 *  3. Dynamic Menu Category Filter
 *  4. Fullscreen Image Lightbox with Next/Prev/Keyboard controls
 *  5. Mobile Hamburger Navigation Drawer
 *  6. Sticky Header & Active Nav Scroll Spy
 *  7. Smooth Scrolling & Menu/Offer Pre-fill Handlers
 *  8. Dynamic Footer Year
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. TODAY'S SPECIAL (DYNAMIC BASED ON DAY OF WEEK)
     ========================================================================== */
  const initTodaysSpecial = () => {
    // Array of 7 specials for Sunday (0) through Saturday (6)
    const dailySpecials = [
      {
        dayName: 'Sunday',
        title: 'Sunday Brunch Special',
        comboName: 'Fluffy Pancakes + Artisan Brew',
        desc: 'Start your weekend morning peacefully with a triple stack of fluffy buttermilk pancakes, real maple syrup, and your choice of hot pour-over or Americano.',
        price: '₹159',
        origPrice: '₹220',
        save: 'Save ₹61',
        pill: 'Weekend Brunch',
        image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80'
      },
      {
        dayName: 'Monday',
        title: 'Monday Motivation Deal',
        comboName: 'Cappuccino + Belgian Brownie',
        desc: 'Beat the start-of-week blues with our velvety double-shot Italian Cappuccino paired with a warm, decadent dark chocolate walnut fudge brownie.',
        price: '₹169',
        origPrice: '₹220',
        save: 'Save ₹51',
        pill: 'Monday Booster',
        image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=700&q=80'
      },
      {
        dayName: 'Tuesday',
        title: 'Tuesday Refresh Special',
        comboName: 'Signature Cold Coffee + Grilled Veg Sandwich',
        desc: 'A cooling midday pick-me-up! Our rich, blended cold coffee served alongside a golden toasted herb-infused vegetable and cheese sandwich.',
        price: '₹179',
        origPrice: '₹250',
        save: 'Save ₹71',
        pill: 'Midweek Treat',
        image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80'
      },
      {
        dayName: 'Wednesday',
        title: 'Wednesday Desi Chai Chai',
        comboName: 'Nilgiri Masala Tea + Crispy Hot Snacks',
        desc: 'Slow-brewed aromatic spiced chai with crushed cardamom and fresh ginger, served with crispy tea-time favorites and tangy mint chutney.',
        price: '₹119',
        origPrice: '₹170',
        save: 'Save ₹51',
        pill: 'Desi Classic',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80'
      },
      {
        dayName: 'Thursday',
        title: 'Thursday Italian Comfort',
        comboName: 'White Sauce Pasta + Lemon Iced Tea',
        desc: 'Silky parmesan white sauce penne cooked with sauteed corn and mushrooms, accompanied by a tall, crisp glass of freshly shaken lemon iced tea.',
        price: '₹189',
        origPrice: '₹260',
        save: 'Save ₹71',
        pill: 'Chef Favorite',
        image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=700&q=80'
      },
      {
        dayName: 'Friday',
        title: 'Friday Party Starter',
        comboName: 'Gourmet Veg Pizza + Chilled Cold Coffee',
        desc: 'Celebrate the weekend arrival with our hand-stretched thin crust mozzarella pizza paired with our signature creamy cold coffee blend.',
        price: '₹199',
        origPrice: '₹290',
        save: 'Save ₹91',
        pill: 'TGIF Special',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80'
      },
      {
        dayName: 'Saturday',
        title: 'Saturday Hangout Combo',
        comboName: 'Café Burger + Peri-Peri Fries + Iced Brew',
        desc: 'The ultimate weekend companion! A crisp veggie patty burger layered with cheese, hot peri-peri seasoned fries, and a chilled beverage of your choice.',
        price: '₹179',
        origPrice: '₹240',
        save: 'Save ₹61',
        pill: 'Crowd Favorite',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80'
      }
    ];

    const todayIndex = new Date().getDay(); // 0 is Sunday, 6 is Saturday
    const special = dailySpecials[todayIndex];

    const dayNameEl = document.getElementById('special-day-name');
    const taglineEl = document.getElementById('special-tagline');
    const comboNameEl = document.getElementById('special-combo-name');
    const comboDescEl = document.getElementById('special-combo-desc');
    const priceEl = document.getElementById('special-price');
    const origPriceEl = document.getElementById('special-orig-price');
    const discountEl = document.getElementById('special-discount-badge');
    const imageEl = document.getElementById('special-image');
    const pillTextEl = document.getElementById('special-pill-text');
    const reserveBtn = document.getElementById('special-reserve-btn');

    if (dayNameEl) dayNameEl.textContent = `${special.dayName} Special`;
    if (taglineEl) taglineEl.textContent = special.title;
    if (comboNameEl) comboNameEl.textContent = special.comboName;
    if (comboDescEl) comboDescEl.textContent = special.desc;
    if (priceEl) priceEl.textContent = special.price;
    if (origPriceEl) origPriceEl.textContent = special.origPrice;
    if (discountEl) discountEl.textContent = special.save;
    if (pillTextEl) pillTextEl.textContent = special.pill;
    if (imageEl) {
      imageEl.src = special.image;
      imageEl.alt = `${special.dayName} Special - ${special.comboName}`;
    }

    // Auto fill reservation notes when user clicks reserve deal
    if (reserveBtn) {
      reserveBtn.addEventListener('click', (e) => {
        const notesField = document.getElementById('res-notes');
        if (notesField) {
          notesField.value = `Interested in Today's Special: ${special.comboName} (${special.price})`;
        }
      });
    }
  };

  /* ==========================================================================
     2. QUICK RESERVATION FORM (CLIENT VALIDATION & FEEDBACK)
     ========================================================================== */
  const initReservationForm = () => {
    const form = document.getElementById('reservation-form');
    const successCard = document.getElementById('reservation-success');
    const summaryBox = document.getElementById('reservation-summary');
    const bookAnotherBtn = document.getElementById('book-another-btn');
    const dateInput = document.getElementById('res-date');

    if (!form) return;

    // Set minimum selectable date to today
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      dateInput.value = today; // default to today
    }

    // Form inputs and error message elements
    const fields = {
      name: {
        input: document.getElementById('res-name'),
        error: document.getElementById('error-name'),
        validate: (val) => val.trim().length >= 2
      },
      phone: {
        input: document.getElementById('res-phone'),
        error: document.getElementById('error-phone'),
        validate: (val) => {
          // Accept 10 digits or with optional +91/0 prefix and spaces/dashes
          const clean = val.replace(/[\s\-\(\)\+]/g, '');
          return clean.length >= 10 && /^\d+$/.test(clean);
        }
      },
      date: {
        input: document.getElementById('res-date'),
        error: document.getElementById('error-date'),
        validate: (val) => Boolean(val)
      },
      time: {
        input: document.getElementById('res-time'),
        error: document.getElementById('error-time'),
        validate: (val) => Boolean(val)
      },
      guests: {
        input: document.getElementById('res-guests'),
        error: document.getElementById('error-guests'),
        validate: (val) => Boolean(val)
      }
    };

    // Real-time input clearing of errors
    Object.keys(fields).forEach((key) => {
      const field = fields[key];
      if (field.input) {
        field.input.addEventListener('input', () => {
          field.input.classList.remove('is-invalid');
          if (field.error) field.error.classList.remove('visible');
        });
        field.input.addEventListener('change', () => {
          field.input.classList.remove('is-invalid');
          if (field.error) field.error.classList.remove('visible');
        });
      }
    });

    // Form submission handler
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate each required field
      Object.keys(fields).forEach((key) => {
        const field = fields[key];
        const valid = field.validate(field.input.value);
        if (!valid) {
          field.input.classList.add('is-invalid');
          if (field.error) field.error.classList.add('visible');
          isValid = false;
        } else {
          field.input.classList.remove('is-invalid');
          if (field.error) field.error.classList.remove('visible');
        }
      });

      if (!isValid) {
        // Focus first invalid element
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Collect data for summary
      const name = fields.name.input.value.trim();
      const phone = fields.phone.input.value.trim();
      const date = fields.date.input.value;
      const time = fields.time.input.value;
      const guests = fields.guests.input.value;
      const seating = document.getElementById('res-seating')?.value || 'Standard Table';
      const notes = document.getElementById('res-notes')?.value.trim();

      // Render summary
      if (summaryBox) {
        summaryBox.innerHTML = `
          <strong>📋 Booking Request Summary:</strong><br>
          • <strong>Guest:</strong> ${name} (${phone})<br>
          • <strong>Date & Time:</strong> ${date} at ${time}<br>
          • <strong>Party Size:</strong> ${guests} (${seating})<br>
          ${notes ? `• <strong>Special Request:</strong> <em>"${notes}"</em><br>` : ''}
          <div style="margin-top: 10px; font-size: 0.82rem; color: #15803d; font-weight: 600;">
            ✓ Status: Demo Request Logged Successfully
          </div>
        `;
      }

      // Hide form, show confirmation
      form.hidden = true;
      if (successCard) {
        successCard.hidden = false;
        successCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    // Reset button to book another
    if (bookAnotherBtn) {
      bookAnotherBtn.addEventListener('click', () => {
        form.reset();
        if (dateInput) {
          const today = new Date().toISOString().split('T')[0];
          dateInput.value = today;
        }
        if (successCard) successCard.hidden = true;
        form.hidden = false;
      });
    }

    // Connect combo cards and menu items to reservation note
    document.querySelectorAll('.offer-btn, .menu-order-link').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const combo = btn.getAttribute('data-combo');
        const item = btn.getAttribute('data-item');
        const notesField = document.getElementById('res-notes');
        if (notesField) {
          if (combo) {
            notesField.value = `Reserving for Offer: ${combo}`;
          } else if (item) {
            notesField.value = `Table reservation - Interested in trying: ${item}`;
          }
        }
      });
    });
  };

  /* ==========================================================================
     3. MENU FILTERING (PURE JAVASCRIPT)
     ========================================================================== */
  const initMenuFilter = () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    if (!filterButtons.length || !menuCards.length) return;

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Toggle active button
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const selectedCategory = btn.getAttribute('data-category');

        menuCards.forEach((card) => {
          const cardCategory = card.getAttribute('data-category');

          if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.classList.remove('hidden');
            // Subtle entrance animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px)';
            setTimeout(() => {
              card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  };

  /* ==========================================================================
     4. GALLERY LIGHTBOX MODAL
     ========================================================================== */
  const initGalleryLightbox = () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const closeBtn = document.getElementById('lightbox-close');
    const backdrop = document.getElementById('lightbox-backdrop');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    if (!lightbox || !galleryItems.length) return;

    let currentIndex = 0;
    const itemsData = [];

    // Extract item data
    galleryItems.forEach((item, index) => {
      const img = item.querySelector('img');
      const caption = item.getAttribute('data-caption') || img?.alt || 'Brew & Bloom Gallery';
      const src = img?.src || '';

      itemsData.push({ src, caption });

      item.addEventListener('click', () => {
        openLightbox(index);
      });
    });

    const openLightbox = (index) => {
      currentIndex = index;
      updateLightboxContent();
      lightbox.classList.add('active');
      lightbox.removeAttribute('hidden');
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // prevent page background scrolling
    };

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      lightbox.setAttribute('hidden', '');
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    };

    const updateLightboxContent = () => {
      const data = itemsData[currentIndex];
      if (!data) return;

      lightboxImg.src = data.src;
      lightboxImg.alt = data.caption;
      lightboxCaption.textContent = data.caption;
      lightboxCounter.textContent = `${currentIndex + 1} / ${itemsData.length}`;
    };

    const showPrev = () => {
      currentIndex = (currentIndex - 1 + itemsData.length) % itemsData.length;
      updateLightboxContent();
    };

    const showNext = () => {
      currentIndex = (currentIndex + 1) % itemsData.length;
      updateLightboxContent();
    };

    // Event listeners for close button, backdrop, and navigation
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeLightbox();
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        e.preventDefault();
        closeLightbox();
      });
    }

    // Also close if clicking modal overlay outside content
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
      });
    }

    // Keyboard support (Escape key and arrow keys)
    document.addEventListener('keydown', (e) => {
      const isVisible = lightbox.classList.contains('active') || !lightbox.hidden;
      if (!isVisible) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  };

  /* ==========================================================================
     5. MOBILE HAMBURGER & SCROLL NAVIGATION
     ========================================================================== */
  const initNavigation = () => {
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('open');
        hamburger.classList.toggle('active', !isOpen);
        navMenu.classList.toggle('open', !isOpen);
        hamburger.setAttribute('aria-expanded', String(!isOpen));
      });

      // Close mobile drawer when clicking any link
      navLinks.forEach((link) => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });

      // Close mobile drawer if clicked outside
      document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('open')) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Sticky Navbar elevation on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    });

    // Scroll Spy: Highlight active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const onScrollSpy = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach((link) => link.classList.remove('active'));
          if (activeLink) activeLink.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', onScrollSpy);
  };

  /* ==========================================================================
     6. FOOTER DYNAMIC YEAR
     ========================================================================== */
  const initFooterYear = () => {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  };

  // Initialize all features
  initTodaysSpecial();
  initReservationForm();
  initMenuFilter();
  initGalleryLightbox();
  initNavigation();
  initFooterYear();

});
