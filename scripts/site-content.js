const ECCENTRIC_STORAGE_KEY = 'eccentric-studios-data';

function initRevealAnimation() {
  const elements = document.querySelectorAll('.hero-card, .glass-card, .card, .field, .hero-actions, .lang-switch button, .socials a, .pill-btn, .primary-btn, .ghost-btn');
  elements.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal').forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.96) {
        element.classList.add('visible');
      }
    });
  });
}

function getDefaultState() {
  return {
    language: 'en',
    heroTitle: 'We make bold ideas feel cinematic, unforgettable, and ready to grow.',
    heroText: 'Eccentric Studios creates striking visual campaigns, motion content, and curated brand experiences that leave a lasting impression.',
    heroImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
    heroStats: ['120+', '4.9/5', '24/7'],
    homeImages: [
      { title: 'Studio workspace', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80', caption: 'Creative studio setup' }
    ],
    homeVideos: [
      { title: 'Brand reel', url: 'https://www.youtube.com/embed/ScMzIvxBSi4?rel=0' }
    ],
    projects: [
      { title: 'Launch Motion Identity', description: 'A sharp rebrand with launch motion and premium social assets.', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80' },
      { title: 'Luxury Campaign Reel', description: 'A cinematic campaign designed to blend elegance with conversion.', image: 'https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?auto=format&fit=crop&w=900&q=80' },
      { title: 'Digital Growth Series', description: 'High-impact visuals and stories for product launches and events.', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80' }
    ],
    reviews: [
      { name: 'Nisha Rao', rating: '5/5', text: 'The creative strategy and final content were beyond expectations.' },
      { name: 'Aarav Menon', rating: '5/5', text: 'Cinematic, polished, and incredibly responsive throughout the process.' },
      { name: 'Deepika S.', rating: '5/5', text: 'Every detail felt premium and aligned with our brand goals.' }
    ],
    aboutName: 'Eccentric Studios',
    aboutContacts: [
      { name: 'Nithran', phone: '+91 95660 09292', email: 'info@eccentricstudios.in', instagram: '@eccentric_studios56', youtube: '@EccentricStudios-h7d', facebook: 'Eccentric Studios' }
    ],
    social: {
      instagram: 'https://www.instagram.com/eccentric_studios56/',
      facebook: 'https://www.facebook.com/',
      youtube: 'http://www.youtube.com/@EccentricStudios-h7d'
    },
    contact: {
      email: 'info@eccentricstudios.in',
      phone: '+91 95660 09292',
      location: 'Chennai, India'
    },
    formTitle: 'Order Form',
    missionText: 'Craft campaigns that feel fresh, strategic, and unforgettable.',
    visionText: 'Elevate every launch with cinematic storytelling and precise execution.',
    aboutText: 'Eccentric Studios is a premium creative agency blending strategy, design, and motion to translate ideas into high-impact brand stories.',
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?rel=0',
    videoText: 'From launch reels to brand system design, every project is tuned for visual impact and measurable growth.'
  };
}

function readState() {
  const defaults = getDefaultState();
  const existing = JSON.parse(localStorage.getItem(ECCENTRIC_STORAGE_KEY) || '{}');
  return {
    ...defaults,
    ...existing,
    social: { ...defaults.social, ...(existing.social || {}) },
    contact: { ...defaults.contact, ...(existing.contact || {}) },
    projects: Array.isArray(existing.projects) ? existing.projects : defaults.projects,
    reviews: Array.isArray(existing.reviews) ? existing.reviews : defaults.reviews,
    homeImages: Array.isArray(existing.homeImages) ? existing.homeImages : defaults.homeImages,
    homeVideos: Array.isArray(existing.homeVideos) ? existing.homeVideos : defaults.homeVideos,
    aboutContacts: Array.isArray(existing.aboutContacts) ? existing.aboutContacts : defaults.aboutContacts
  };
}

function writeState(state) {
  localStorage.setItem(ECCENTRIC_STORAGE_KEY, JSON.stringify(state));
}

function updateCommonContent(state) {
  document.querySelector('[data-admin="heroTitle"], .hero-copy h1')?.replaceChildren(document.createTextNode(state.heroTitle));
  document.querySelector('[data-admin="heroText"], #heroDescription, [data-admin="reviewText"], [data-admin="aboutText"]')?.replaceChildren(document.createTextNode(state.heroText));
  const heroImage = document.querySelector('[data-admin="heroImage"], #heroImage, .hero-card img');
  if (heroImage) heroImage.setAttribute('src', state.heroImage);
  document.querySelector('[data-admin="formTitle"], [data-i18n="formTitle"]')?.replaceChildren(document.createTextNode(state.formTitle));
  document.querySelector('[data-i18n="contactPhone"]')?.replaceChildren(document.createTextNode(state.contact.phone));
  document.querySelector('[data-i18n="contactLocation"]')?.replaceChildren(document.createTextNode(state.contact.location));
  const emailEl = document.getElementById('contactEmail');
  if (emailEl) emailEl.textContent = state.contact.email;
  const socialLinks = document.querySelectorAll('.socials a');
  if (socialLinks[0]) socialLinks[0].setAttribute('href', state.social.instagram || '');
  if (socialLinks[1]) socialLinks[1].setAttribute('href', state.social.facebook || '');
  if (socialLinks[2]) socialLinks[2].setAttribute('href', state.social.youtube || '');
  const footerLinks = document.querySelectorAll('#footerInstagram, #footerFacebook, #footerYoutube');
  if (footerLinks[0]) footerLinks[0].setAttribute('href', state.social.instagram || '');
  if (footerLinks[1]) footerLinks[1].setAttribute('href', state.social.facebook || '');
  if (footerLinks[2]) footerLinks[2].setAttribute('href', state.social.youtube || '');
}

function renderHomePage(state) {
  updateCommonContent(state);
  const portfolioGrid = document.getElementById('portfolioGrid');
  if (portfolioGrid) {
    portfolioGrid.innerHTML = '';
    (state.projects || []).forEach((project) => {
      const card = document.createElement('article');
      card.className = 'glass-card project-card';
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" />
        <div class="content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>`;
      portfolioGrid.appendChild(card);
    });
  }

  const homeImages = document.getElementById('homeImageGallery');
  if (homeImages) {
    homeImages.innerHTML = '<h2 style="margin-bottom:12px;">More images</h2><div class="card-grid"></div>';
    const inner = homeImages.querySelector('.card-grid');
    (state.homeImages || []).forEach((item) => {
      const card = document.createElement('article');
      card.className = 'glass-card';
      card.innerHTML = `<img src="${item.image}" alt="${item.title}" style="height:180px;object-fit:cover;border-radius:16px;margin-bottom:10px;" /><h3 style="margin:0 0 6px;">${item.title}</h3><p style="margin:0;color:var(--muted);">${item.caption}</p>`;
      inner.appendChild(card);
    });
  }

  const homeVideos = document.getElementById('homeVideoGallery');
  if (homeVideos) {
    homeVideos.innerHTML = '<h2 style="margin-bottom:12px;">Featured videos</h2><div class="card-grid"></div>';
    const inner = homeVideos.querySelector('.card-grid');
    (state.homeVideos || []).forEach((item) => {
      const card = document.createElement('article');
      card.className = 'glass-card';
      card.innerHTML = `<h3 style="margin-top:0;">${item.title}</h3><div class="video-frame" style="min-height:220px;border-radius:16px;overflow:hidden;margin-top:8px;"><iframe src="${item.url}" title="${item.title}" allowfullscreen></iframe></div>`;
      inner.appendChild(card);
    });
  }

  const promoVideo = document.getElementById('promoVideo');
  if (promoVideo) promoVideo.setAttribute('src', state.videoUrl || '');
  const videoDescription = document.getElementById('videoDescription');
  if (videoDescription) videoDescription.textContent = state.videoText || '';
}

function renderReviewsPage(state) {
  updateCommonContent(state);
  const reviewList = document.getElementById('reviewList');
  if (reviewList) {
    const currentLang = window.EccentricLanguage?.getCurrentLanguage?.() || 'en';
    const translations = window.EccentricLanguage?.translations?.[currentLang] || {};
    reviewList.innerHTML = '';
    (state.reviews || []).forEach((review, index) => {
      const card = document.createElement('article');
      card.className = 'glass-card card';
      const displayName = review.name && review.name !== 'Nisha Rao' && review.name !== 'Aarav Menon' && review.name !== 'Deepika S.'
        ? review.name
        : (translations[`review${index + 1}Name`] || review.name);
      const displayText = review.text && review.text !== 'The creative strategy and final content were beyond expectations.' && review.text !== 'Cinematic, polished, and incredibly responsive throughout the process.' && review.text !== 'Every detail felt premium and aligned with our brand goals.'
        ? review.text
        : (translations[`review${index + 1}Text`] || review.text);
      card.innerHTML = `<h2>${displayName}</h2><p>“${displayText}”</p><p><strong>${review.rating}</strong></p>`;
      reviewList.appendChild(card);
    });
  }

  const form = document.getElementById('reviewForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('reviewCustomerName')?.value?.trim();
      const rating = document.getElementById('reviewCustomerRating')?.value?.trim();
      const text = document.getElementById('reviewCustomerText')?.value?.trim();
      if (!name || !text) return;
      const newReview = { name, rating: rating || '5/5', text };
      const nextState = { ...state, reviews: [newReview, ...(state.reviews || [])] };
      writeState(nextState);
      window.location.reload();
    });
  }
}

function renderAboutPage(state) {
  updateCommonContent(state);
  const profile = document.getElementById('aboutProfileName');
  if (profile) profile.textContent = state.aboutName || '';
  const mission = document.querySelector('[data-admin="missionText"], [data-i18n="missionText"]');
  if (mission) mission.textContent = state.missionText || '';
  const vision = document.querySelector('[data-admin="visionText"], [data-i18n="visionText"]');
  if (vision) vision.textContent = state.visionText || '';
  const aboutText = document.querySelector('[data-admin="aboutText"], [data-i18n="aboutText"]');
  if (aboutText) aboutText.textContent = state.aboutText || '';
  const contactContainer = document.getElementById('aboutContacts');
  if (contactContainer) {
    contactContainer.innerHTML = '';
    (state.aboutContacts || []).forEach((item) => {
      const card = document.createElement('article');
      card.className = 'glass-card card';
      card.innerHTML = `
        <h3>${item.name}</h3>
        <p><strong>Phone:</strong> ${item.phone}</p>
        <p><strong>Email:</strong> ${item.email}</p>
        <p><strong>Instagram:</strong> ${item.instagram}</p>
        <p><strong>YouTube:</strong> ${item.youtube}</p>
        <p><strong>Facebook:</strong> ${item.facebook}</p>`;
      contactContainer.appendChild(card);
    });
  }
}

function renderOrderPage(state) {
  updateCommonContent(state);
  document.querySelector('[data-admin="formTitle"]')?.replaceChildren(document.createTextNode(state.formTitle || 'Order Form'));
}

function initSiteContent() {
  initRevealAnimation();
  const state = readState();
  window.eccentricState = state;
  if (document.getElementById('portfolioGrid') || document.getElementById('homeImageGallery') || document.getElementById('homeVideoGallery')) {
    renderHomePage(state);
  }
  if (document.getElementById('reviewList') || document.getElementById('reviewForm')) {
    renderReviewsPage(state);
  }
  if (document.getElementById('aboutContacts') || document.getElementById('aboutProfileName')) {
    renderAboutPage(state);
  }
  if (document.querySelector('[data-admin="formTitle"]') || document.querySelector('[data-admin="heroTitle"]')) {
    renderOrderPage(state);
  }
}

window.addEventListener('DOMContentLoaded', initSiteContent);
