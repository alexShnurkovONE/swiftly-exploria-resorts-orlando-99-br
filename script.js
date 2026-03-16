/* ============================================
   EXPLORIA RESORTS – ORLANDO CAMPAIGN
   Vanilla JS (converted from React)
   ============================================ */

/* ---- URL Param Utilities ---- */
function getDecodedParam(name) {
  const params = new URLSearchParams(window.location.search);
  const val = params.get(name);
  if (!val) return null;
  try { return atob(val); } catch { return val; }
}

function getFirstName() {
  const raw = getDecodedParam('fn');
  if (!raw) return null;
  return raw.trim().split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

/* ---- Scroll to section ---- */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 140;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

/* ============================================
   DATA
   ============================================ */
const accommodationImages = [
  { src: 'images/ORLANDO/accommodations/a2.webp', label: 'Summer Bay Orlando' },
  { src: 'images/ORLANDO/accommodations/a3.webp', label: 'Summer Bay Orlando' },
  { src: 'images/ORLANDO/accommodations/a4.webp', label: 'Summer Bay Orlando' },
  { src: 'images/ORLANDO/accommodations/a5.webp', label: 'Summer Bay Orlando' },
  { src: 'images/ORLANDO/accommodations/a6.webp', label: 'Summer Bay Orlando' },
];

const condoImages = [
  { src: 'images/ORLANDO/accommodations/c5_bloom_4x.webp', label: 'One Bedroom Condo' },
  { src: 'images/ORLANDO/accommodations/c2.webp', label: 'One Bedroom Condo' },
  { src: 'images/ORLANDO/accommodations/c3.webp', label: 'One Bedroom Condo' },
  { src: 'images/ORLANDO/accommodations/c4.webp', label: 'One Bedroom Condo' },
];

const resortImages = [
  { src: 'images/ORLANDO/accommodations/mexico.webp', label: 'Resort Condo Stay' },
  { src: 'images/ORLANDO/accommodations/caribbean.webp', label: 'Resort Condo Stay' },
  { src: 'images/ORLANDO/accommodations/canada_img.webp', label: 'Resort Condo Stay' },
];

const thingsToDoImages = [
  { src: 'images/ORLANDO/things-to-do/things-to-do-in-disney-springs.webp', label: 'Disney Springs' },
  { src: 'images/ORLANDO/things-to-do/223cb74e-5100-415c-b956-60a282b57e62-1753265429850-294552.webp', label: 'Theme Parks' },
  { src: 'images/ORLANDO/things-to-do/universal-resort.webp', label: 'Universal Orlando Resort' },
  { src: 'images/ORLANDO/things-to-do/swo_sharks1.webp', label: 'SeaWorld Orlando' },
];

const activityImages = [
  { src: 'images/ORLANDO/accommodations/exteriorpool2.webp', label: 'Pool Paradise' },
  { src: 'images/ORLANDO/things-to-do/DisneyImage1.webp', label: 'Theme Parks' },
  { src: 'images/ORLANDO/things-to-do/VolcanoBay.webp', label: "Universal's Volcano Bay™" },
  { src: 'images/ORLANDO/things-to-do/Pool1.webp', label: 'Resort Pool' },
  { src: 'images/ORLANDO/things-to-do/OutletsImage.webp', label: 'Orlando Adventures' },
];

const offerImages = [
  { src: 'images/ORLANDO/accommodations/LivingRoom1.webp', label: 'Living Room' },
  { src: 'images/ORLANDO/accommodations/OneBedroom.webp', label: 'Master Bedroom' },
  { src: 'images/ORLANDO/accommodations/Kitchen1.webp', label: 'Full Kitchen' },
  { src: 'images/ORLANDO/accommodations/Bathroom.webp', label: 'Spa Bathroom' },
  { src: 'images/ORLANDO/accommodations/PrivateBalcony.webp', label: 'Patio or Balcony' },
];

const testimonials = [
  { quote: "Love this place! We do our family reunions here each year and can't be any happier with everything they have to offer.", name: "Wayne M.", title: "Verified Owner", theme: "orange" },
  { quote: "We've been coming to Summer Bay for 15 years!", name: "Joanne G.", title: "Verified Owner", theme: "teal" },
  { quote: "I love this place. I've been An owner since it was in Pre-construction!", name: "Tori M.", title: "Verified Owner", theme: "orange" },
  { quote: "We have been staying at Summer Bay ... for nearly two decades now. The staff is friendly and efficient, the units are well designed and well maintained. We find them to be a perfect!", name: "Rob C.", title: "Verified Owner", theme: "teal" },
];

const bentoItems = [
  {
    id: 1,
    iconId: 'icon-star',
    title: 'Walt Disney World® Resort',
    text: 'Just 6.5 miles away - experience all four parks.',
    image: 'images/ORLANDO/things-to-do/disney-night-fireworks.webp',
    colSpan: 2,
    rowSpan: 0,
    details: {
      description: "Experience the magic of Walt Disney World® Resort, featuring four incredible theme parks: Magic Kingdom® Park, EPCOT®, Disney's Hollywood Studios®, and Disney's Animal Kingdom® Theme Park. Create unforgettable memories with world-class attractions, entertainment, and dining.",
      location: 'Lake Buena Vista, FL - Just 6.5 miles from resort',
      hours: 'Park hours vary - Check Disney website',
      highlights: ['Four theme parks', 'World-class entertainment', 'Character experiences', 'Fireworks & shows'],
    },
  },
  {
    id: 2,
    iconId: 'icon-star',
    title: 'Wizarding World of Harry Potter™',
    text: 'Thrilling rides, magical adventures, and world-class entertainment at Universal Orlando.',
    image: 'images/ORLANDO/things-to-do/hp-world.webp',
    colSpan: 0,
    rowSpan: 2,
    details: {
      description: "Universal Orlando Resort brings movies to life with incredible attractions at Universal Studios Florida® and Universal's Islands of Adventure®. Step into The Wizarding World of Harry Potter™ and experience thrilling rides based on your favorite films. Cool off at Universal's Volcano Bay™ water theme park.",
      location: 'Orlando, FL - 25 miles from resort',
      hours: 'Park hours vary - Check Universal website',
      highlights: ["The Wizarding World of Harry Potter™", 'Thrilling roller coasters', "Universal's Volcano Bay™", 'CityWalk entertainment'],
    },
  },
  {
    id: 3,
    iconId: 'icon-waves',
    title: 'SeaWorld Orlando',
    text: 'Marine life encounters, thrilling coasters, spectacular shows.',
    image: 'images/ORLANDO/things-to-do/Aquarium.webp',
    colSpan: 0,
    rowSpan: 0,
    details: {
      description: 'SeaWorld Orlando combines up-close animal encounters with world-class roller coasters and live shows. Meet dolphins, penguins, and sea lions while enjoying exciting attractions like Mako®, Kraken, and Manta. Visit Aquatica® for water park fun.',
      location: 'Orlando, FL - 30 miles from resort',
      highlights: ['Marine animal encounters', 'Mako® roller coaster', 'Aquatica® water park', 'Educational experiences'],
    },
  },
  {
    id: 4,
    iconId: 'icon-trees',
    title: 'LEGOLAND Florida',
    text: 'Perfect for families with young children, 30 miles away.',
    image: 'images/ORLANDO/things-to-do/KidsActivity.webp',
    colSpan: 0,
    rowSpan: 0,
    details: {
      description: 'LEGOLAND Florida Resort is the ultimate destination for families with children ages 2-12. With more than 50 rides, shows, and attractions, plus a water park and hotel, it is an interactive, hands-on experience.',
      location: 'Winter Haven, FL - 30 miles from resort',
      hours: 'Park hours vary by season',
      highlights: ['50+ rides & attractions', 'LEGO-themed experiences', 'Water park', 'Perfect for ages 2-12'],
    },
  },
  {
    id: 5,
    iconId: 'icon-shopping-bag',
    title: 'Premium Outlet Malls',
    text: 'Orlando International Premium Outlets and Lake Buena Vista Factory Stores.',
    image: 'images/ORLANDO/things-to-do/OutletsImage.webp',
    colSpan: 2,
    rowSpan: 0,
    details: {
      description: "Shop till you drop at Orlando's world-famous outlet malls. Orlando International Premium Outlets features over 180 designer and brand-name stores with savings up to 65% off retail prices.",
      location: 'Multiple locations near Orlando',
      hours: 'Mon-Sat 10am-9pm, Sun 10am-7pm',
      highlights: ['180+ brand-name stores', 'Up to 65% off retail', 'Dining options', 'Tax-free shopping options'],
    },
  },
  {
    id: 6,
    iconId: 'icon-trees',
    title: 'Gatorland®',
    text: "Get up close with Florida's native wildlife and gator shows.",
    image: 'images/ORLANDO/things-to-do/GatorlandImage.webp',
    colSpan: 0,
    rowSpan: 0,
    details: {
      description: 'Gatorland® is the "Alligator Capital of the World" - a 110-acre theme park and wildlife preserve combining Old Florida charm with exciting attractions. See thousands of alligators, crocodiles, and the famous white leucistic gators.',
      location: 'Orlando, FL - 15 miles from resort',
      hours: 'Daily 10am - 5pm',
      highlights: ['Gator shows', 'Zip line adventure', 'Wildlife encounters', 'Old Florida experience'],
    },
  },
];

/* ============================================
   CAROUSEL STATE
   ============================================ */
const carousels = {
  accom: { images: accommodationImages, index: 0 },
  condo: { images: condoImages, index: 0 },
  resort: { images: resortImages, index: 0 },
  things: { images: thingsToDoImages, index: 0 },
};

function carouselPrev(name) {
  const c = carousels[name];
  c.index = (c.index === 0) ? c.images.length - 1 : c.index - 1;
  updateCarousel(name);
}

function carouselNext(name) {
  const c = carousels[name];
  c.index = (c.index === c.images.length - 1) ? 0 : c.index + 1;
  updateCarousel(name);
}

function updateCarousel(name) {
  const c = carousels[name];
  const img = document.getElementById(`carousel-${name}-img`);
  if (img) {
    img.src = c.images[c.index].src;
    img.alt = c.images[c.index].label;
  }
  const dots = document.querySelectorAll(`#carousel-${name}-dots .carousel-dot`);
  dots.forEach((d, i) => d.classList.toggle('active', i === c.index));
}

function buildCarouselDots(name) {
  const container = document.getElementById(`carousel-${name}-dots`);
  if (!container) return;
  const c = carousels[name];
  container.innerHTML = c.images.map((_, i) => `
    <button class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="setCarouselIndex('${name}', ${i})" aria-label="Image ${i+1}"></button>
  `).join('');
}

function setCarouselIndex(name, index) {
  carousels[name].index = index;
  updateCarousel(name);
}

/* ============================================
   AUTO-SCROLLING GALLERY
   ============================================ */
let galleryImages = [];
let galleryLightboxIndex = null;

function initGallery() {
  const track = document.getElementById('gallery-track');
  if (!track) return;

  let position = 0;
  let velocity = 0;
  let isScrolling = true;
  let isMomentum = false;
  let rafId;
  const autoSpeed = 0.5;
  const friction = 0.95;
  const minVelocity = 0.1;

  const touch = { startX: 0, startY: 0, lastX: 0, lastTime: 0, startPos: 0, direction: null };

  function getHalfWidth() { return track.scrollWidth / 2; }

  function wrapPosition() {
    const half = getHalfWidth();
    if (position <= -half) position += half;
    else if (position > 0) position -= half;
  }

  function animate() {
    if (isMomentum) {
      velocity *= friction;
      position += velocity;
      if (Math.abs(velocity) < minVelocity) { velocity = 0; isMomentum = false; isScrolling = true; }
    } else if (isScrolling) {
      position -= autoSpeed;
    }
    wrapPosition();
    track.style.transform = `translateX(${position}px)`;
    rafId = requestAnimationFrame(animate);
  }

  rafId = requestAnimationFrame(animate);

  track.addEventListener('mouseenter', () => { isScrolling = false; });
  track.addEventListener('mouseleave', () => { isScrolling = true; });

  track.addEventListener('touchstart', e => {
    isScrolling = false; isMomentum = false; velocity = 0;
    Object.assign(touch, {
      startX: e.touches[0].clientX, startY: e.touches[0].clientY,
      lastX: e.touches[0].clientX, lastTime: Date.now(),
      startPos: position, direction: null
    });
  }, { passive: true });

  track.addEventListener('touchmove', e => {
    const cx = e.touches[0].clientX, cy = e.touches[0].clientY;
    if (!touch.direction) {
      const dx = Math.abs(cx - touch.startX), dy = Math.abs(cy - touch.startY);
      if (dx < 5 && dy < 5) return;
      touch.direction = dx > dy ? 'horizontal' : 'vertical';
    }
    if (touch.direction === 'vertical') return;
    if (e.cancelable) e.preventDefault();
    const now = Date.now(), dt = now - touch.lastTime || 16;
    velocity = (cx - touch.lastX) / dt * 16;
    touch.lastX = cx; touch.lastTime = now;
    position = touch.startPos + (cx - touch.startX);
    wrapPosition();
    track.style.transform = `translateX(${position}px)`;
  }, { passive: false });

  track.addEventListener('touchend', () => {
    if (Math.abs(velocity) > 0.5) { isMomentum = true; } else { isScrolling = true; }
    touch.direction = null;
  });
}

function openGalleryLightbox(idx) {
  galleryLightboxIndex = ((idx % galleryImages.length) + galleryImages.length) % galleryImages.length;
  updateGalleryLightbox();
  const backdrop = document.getElementById('gallery-lightbox');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGalleryLightbox() {
  document.getElementById('gallery-lightbox').classList.remove('open');
  document.body.style.overflow = '';
  galleryLightboxIndex = null;
}

function updateGalleryLightbox() {
  if (galleryLightboxIndex === null) return;
  const img = galleryImages[galleryLightboxIndex];
  document.getElementById('gallery-lightbox-img').src = img.src;
  document.getElementById('gallery-lightbox-img').alt = img.label;
  document.getElementById('gallery-lightbox-label').textContent = img.label;
  document.getElementById('gallery-lightbox-counter').textContent = `${galleryLightboxIndex + 1} / ${galleryImages.length}`;
}

function initGalleryLightbox() {
  const allItems = document.querySelectorAll('#gallery-track .gallery-item');
  galleryImages = Array.from(allItems).slice(0, allItems.length / 2).map(item => {
    const img = item.querySelector('img');
    return { src: img.getAttribute('src'), label: img.getAttribute('alt') };
  });

  const backdrop = document.getElementById('gallery-lightbox');
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop || e.target.classList.contains('gallery-modal-backdrop')) closeGalleryLightbox();
  });

  document.getElementById('gallery-lightbox-close').addEventListener('click', closeGalleryLightbox);
  document.getElementById('gallery-lightbox-prev').addEventListener('click', e => {
    e.stopPropagation();
    galleryLightboxIndex = (galleryLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGalleryLightbox();
  });
  document.getElementById('gallery-lightbox-next').addEventListener('click', e => {
    e.stopPropagation();
    galleryLightboxIndex = (galleryLightboxIndex + 1) % galleryImages.length;
    updateGalleryLightbox();
  });

  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.addEventListener('click', () => openGalleryLightbox(i % galleryImages.length));
  });
}

/* ============================================
   OFFER SLIDER
   ============================================ */
let offerSlideIndex = 0;

function buildOfferSlider() {
  const thumbContainer = document.getElementById('offer-thumbs');
  if (!thumbContainer) return;

  thumbContainer.innerHTML = offerImages.map((img, i) => `
    <button class="offer-thumb ${i === 0 ? 'active' : ''}" onclick="setOfferSlide(${i})">
      <img src="${img.src}" alt="${img.label}" loading="lazy" />
    </button>
  `).join('');

  document.getElementById('offer-prev').addEventListener('click', () => {
    offerSlideIndex = (offerSlideIndex === 0) ? offerImages.length - 1 : offerSlideIndex - 1;
    updateOfferSlider();
  });

  document.getElementById('offer-next').addEventListener('click', () => {
    offerSlideIndex = (offerSlideIndex + 1) % offerImages.length;
    updateOfferSlider();
  });
}

function setOfferSlide(index) {
  offerSlideIndex = index;
  updateOfferSlider();
}

function updateOfferSlider() {
  const img = offerImages[offerSlideIndex];
  document.getElementById('offer-slide-img').src = img.src;
  document.getElementById('offer-slide-img').alt = img.label;
  document.getElementById('offer-slide-name').textContent = img.label;
  document.getElementById('offer-slide-count').textContent = `${offerSlideIndex + 1} of ${offerImages.length}`;

  document.querySelectorAll('.offer-thumb').forEach((btn, i) => {
    btn.classList.toggle('active', i === offerSlideIndex);
  });
}

/* ============================================
   TESTIMONIALS
   ============================================ */
function buildTestimonials() {
  const container = document.getElementById('reviews-scroll');
  if (!container) return;

  function truncate(text, wordLimit) {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  }

  container.innerHTML = testimonials.map((t, i) => `
    <div class="review-card">
      <div class="review-quote-icon ${t.theme}">
        <svg viewBox="0 0 24 24" width="40" height="40"><use href="#icon-quote"/></svg>
      </div>
      <div style="position:relative;z-index:1;">
        <p class="review-text">"${truncate(t.quote, 15)}"</p>
        <button class="review-read-more ${t.theme}" onclick="openTestimonialModal(${i})">Read more</button>
        <div class="review-divider">
          <p class="review-name">${t.name}</p>
          <p class="review-title">${t.title}</p>
        </div>
      </div>
    </div>
  `).join('');

  const cards = Array.from(container.querySelectorAll('.review-card'));

  function scrollToCard(idx) {
    const card = cards[Math.max(0, Math.min(idx, cards.length - 1))];
    container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: 'smooth' });
  }

  function currentIndex() {
    const scrollLeft = container.scrollLeft;
    let closest = 0, minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - container.offsetLeft - scrollLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    return closest;
  }

  const prevBtn = document.getElementById('reviews-prev');
  const nextBtn = document.getElementById('reviews-next');

  function updateButtons() {
    const atStart = container.scrollLeft <= 4;
    const atEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 4;
    prevBtn.style.visibility = atStart ? 'hidden' : 'visible';
    nextBtn.style.visibility = atEnd ? 'hidden' : 'visible';
  }

  container.addEventListener('scroll', updateButtons, { passive: true });
  updateButtons();

  prevBtn.addEventListener('click', () => scrollToCard(currentIndex() - 1));
  nextBtn.addEventListener('click', () => scrollToCard(currentIndex() + 1));
}

function openTestimonialModal(index) {
  const t = testimonials[index];
  document.getElementById('testimonial-modal-text').textContent = `"${t.quote}"`;
  document.getElementById('testimonial-modal-name').textContent = t.name;
  document.getElementById('testimonial-modal-title').textContent = t.title;
  const iconEl = document.getElementById('testimonial-modal-quote-icon');
  iconEl.className = `testimonial-quote-icon ${t.theme}`;
  document.getElementById('testimonial-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeTestimonialModal(event) {
  if (event.target === document.getElementById('testimonial-modal') || event.target.closest('.modal-close-btn')) {
    document.getElementById('testimonial-modal').classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/* ============================================
   BENTO GRID
   ============================================ */
function buildBentoGrid() {
  const grid = document.getElementById('bento-grid');
  if (!grid) return;

  grid.innerHTML = bentoItems.map(item => {
    const colClass = item.colSpan === 2 ? 'col-span-2' : '';
    const rowClass = item.rowSpan === 2 ? 'row-span-2' : '';
    return `
      <div class="bento-item ${colClass} ${rowClass}" onclick="openBentoLightbox(${item.id})">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="bento-item-overlay"></div>
        <div class="bento-item-content">
          <div class="bento-item-title-row">
            <svg width="20" height="20" viewBox="0 0 24 24"><use href="#${item.iconId}"/></svg>
            <h3 class="bento-item-title">${item.title}</h3>
          </div>
          <p class="bento-item-text">${item.text}</p>
        </div>
      </div>
    `;
  }).join('');
}

function openBentoLightbox(id) {
  const item = bentoItems.find(b => b.id === id);
  if (!item) return;

  document.getElementById('bento-lb-img').src = item.image;
  document.getElementById('bento-lb-img').alt = item.title;
  document.getElementById('bento-lb-title').textContent = item.title;
  document.getElementById('bento-lb-icon').innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><use href="#${item.iconId}"/></svg>`;
  document.getElementById('bento-lb-desc').textContent = item.details.description;

  const meta = document.getElementById('bento-lb-meta');
  let metaHtml = `
    <div class="bento-meta-item">
      <svg width="20" height="20" viewBox="0 0 24 24"><use href="#icon-map-pin"/></svg>
      <span>${item.details.location}</span>
    </div>
  `;
  if (item.details.hours) {
    metaHtml += `
      <div class="bento-meta-item">
        <svg width="20" height="20" viewBox="0 0 24 24"><use href="#icon-clock"/></svg>
        <span>${item.details.hours}</span>
      </div>
    `;
  }
  meta.innerHTML = metaHtml;

  document.getElementById('bento-lb-highlights').innerHTML = item.details.highlights.map(h => `<li>${h}</li>`).join('');

  document.getElementById('bento-lightbox').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeBentoLightbox(event) {
  if (event.target === document.getElementById('bento-lightbox') || event.target.closest('.bento-lightbox-bg')) {
    document.getElementById('bento-lightbox').classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/* ============================================
   FAQ ACCORDION
   ============================================ */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  // Open if was closed
  if (!isOpen) item.classList.add('open');
}

/* ============================================
   NAVIGATION
   ============================================ */
function initNav() {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
  const hamburgerIcon = hamburger.querySelector('svg use');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburgerIcon.setAttribute('href', isOpen ? '#icon-x' : '#icon-menu');
  });

  // Close on link click
  document.querySelectorAll('.nav-mobile-link, .nav-link').forEach(btn => {
    btn.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburgerIcon.setAttribute('href', '#icon-menu');
    });
  });

  // Scroll-to links
  document.querySelectorAll('[data-scroll-to]').forEach(el => {
    el.addEventListener('click', () => scrollToSection(el.dataset.scrollTo));
  });
}

/* ============================================
   SCROLL EFFECTS
   ============================================ */
function initScrollEffects() {
  const nav = document.getElementById('main-nav');
  const heroSection = document.getElementById('hero');
  const stickyBar = document.getElementById('sticky-mobile-bar');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const progressCircle = document.getElementById('scroll-progress-circle');
  const circumference = 2 * Math.PI * 21;
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docH > 0 ? Math.min(scrollY / docH, 1) : 0;

      // Sticky mobile bar
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        stickyBar.classList.toggle('visible', heroBottom < 0);
      } else {
        stickyBar.classList.toggle('visible', scrollY > 300);
      }

      // Scroll top button
      scrollTopBtn.classList.toggle('visible', progress > 0.05);

      // Progress ring
      if (progressCircle) {
        progressCircle.style.strokeDashoffset = circumference * (1 - progress);
      }

      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================
   SCROLL ANIMATIONS (IntersectionObserver)
   ============================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-animate, .scroll-left, .scroll-right, .scroll-scale, .scroll-fade').forEach(el => {
    observer.observe(el);
  });
}

/* ============================================
   HERO PERSONALIZATION
   ============================================ */
function initHeroPersonalization() {
  const firstName = getFirstName();
  if (firstName) {
    const title = document.getElementById('hero-title');
    if (title) {
      title.innerHTML = `Hi <span class="hero-name">${firstName}</span>, Claim Your $99 Orlando Getaway`;
    }
  }
}

/* ============================================
   HLS VIDEO BACKGROUND
   ============================================ */
const HLS_STREAM_ID = 'f98744b95b2b16258836eeab8ae45c2e';
const HLS_CUSTOMER = 'customer-7ldym2inxocnu39e';
const HLS_URL = `https://${HLS_CUSTOMER}.cloudflarestream.com/${HLS_STREAM_ID}/manifest/video.m3u8`;

function initHLSVideo() {
  const video = document.getElementById('bonus-video');
  if (!video) return;

  if (typeof Hls !== 'undefined' && Hls.isSupported()) {
    const hls = new Hls({
      enableWorker: true,
      lowLatencyMode: false,
      maxBufferLength: 30,
      maxMaxBufferLength: 60,
    });
    hls.loadSource(HLS_URL);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play().catch(() => {});
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    // Safari native HLS
    video.src = HLS_URL;
    video.addEventListener('loadedmetadata', () => {
      video.play().catch(() => {});
    });
  } else {
    // Fallback: use a static image background
    const section = document.getElementById('bonus-condo');
    if (section) {
      const videoBg = section.querySelector('.bonus-video-bg');
      if (videoBg) videoBg.style.backgroundImage = 'url(images/ORLANDO/accommodations/exteriorpool2.webp)';
    }
  }
}

/* ============================================
   TERMS MODAL
   ============================================ */
function openTermsModal() {
  document.getElementById('terms-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeTermsModal(event) {
  if (event.target === document.getElementById('terms-modal') || event.target.closest('.modal-close-btn')) {
    document.getElementById('terms-modal').classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function openPrivacyModal() {
  document.getElementById('privacy-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closePrivacyModal(event) {
  if (event.target === document.getElementById('privacy-modal') || event.target.closest('.modal-close-btn')) {
    document.getElementById('privacy-modal').classList.add('hidden');
    document.body.style.overflow = '';
  }
}


/* ============================================
   KEYBOARD (Escape key)
   ============================================ */
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      ['terms-modal', 'privacy-modal', 'testimonial-modal', 'bento-lightbox'].forEach(id => {
        const el = document.getElementById(id);
        if (el && !el.classList.contains('hidden')) {
          el.classList.add('hidden');
          document.body.style.overflow = '';
        }
      });
      const gl = document.getElementById('gallery-lightbox');
      if (gl && gl.classList.contains('open')) closeGalleryLightbox();
    }
  });
}

/* ============================================
   LOAD HLS.JS DYNAMICALLY
   ============================================ */
function loadHlsJs(callback) {
  if (typeof Hls !== 'undefined') { callback(); return; }
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/hls.js@latest/dist/hls.min.js';
  script.onload = callback;
  script.onerror = callback; // graceful fail
  document.head.appendChild(script);
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeroPersonalization();
  initNav();
  initScrollEffects();
  initScrollAnimations();

  initKeyboard();

  initGallery();
  initGalleryLightbox();
  buildOfferSlider();
  buildTestimonials();
  buildBentoGrid();

  // Build carousel dots
  Object.keys(carousels).forEach(name => buildCarouselDots(name));

  // Load HLS.js and start video
  loadHlsJs(() => {
    initHLSVideo();
  });
});
