const ADMIN_PASSWORD = 'Nithran 09/06/2000';
const STORAGE_PREFIX = 'eccentric-admin-';

function getPageKey() {
  const path = window.location.pathname.split('/').pop() || 'first.html';
  return path.replace('.html', '') || 'first';
}

function getStorageKey() {
  return STORAGE_PREFIX + getPageKey();
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function getDefaultValues() {
  const heroTitle = document.querySelector('[data-admin="heroTitle"]')?.textContent || '';
  const heroText = document.querySelector('[data-admin="heroText"]')?.textContent || '';
  const heroImage = document.querySelector('[data-admin="heroImage"], #heroImage, .hero-card img')?.getAttribute('src') || '';
  const pageKey = getPageKey();

  if (pageKey === 'first' && window.eccentricDefaultData) {
    return clone(window.eccentricDefaultData);
  }

  const defaults = {
    heroTitle,
    heroText,
    heroImage,
    social: {
      instagram: document.querySelectorAll('.socials a')[0]?.getAttribute('href') || 'https://www.instagram.com/eccentric_studios56/',
      facebook: document.querySelectorAll('.socials a')[1]?.getAttribute('href') || 'https://www.facebook.com/',
      youtube: document.querySelectorAll('.socials a')[2]?.getAttribute('href') || 'http://www.youtube.com/@EccentricStudios-h7d'
    },
    contact: {
      email: 'info@eccentricstudios.in',
      phone: '+91 95660 09292',
      location: 'Chennai, India'
    },
    formTitle: document.querySelector('[data-i18n="formTitle"]')?.textContent || 'Order Form'
  };

  if (pageKey === 'reviews') {
    defaults.reviews = [
      { name: 'Nisha Rao', rating: '5/5', text: 'The creative strategy and final content were beyond expectations.' },
      { name: 'Aarav Menon', rating: '5/5', text: 'Cinematic, polished, and incredibly responsive throughout the process.' },
      { name: 'Deepika S.', rating: '5/5', text: 'Every detail felt premium and aligned with our brand goals.' }
    ];
  }

  if (pageKey === 'about') {
    defaults.missionText = document.querySelector('[data-admin="missionText"]')?.textContent || 'Craft campaigns that feel fresh, strategic, and unforgettable.';
    defaults.visionText = document.querySelector('[data-admin="visionText"]')?.textContent || 'Elevate every launch with cinematic storytelling and precise execution.';
  }

  return defaults;
}

function mergeValues(defaults, stored) {
  if (!stored) return defaults;
  return {
    ...defaults,
    ...stored,
    social: { ...defaults.social, ...(stored.social || {}) },
    contact: { ...defaults.contact, ...(stored.contact || {}) },
    projects: Array.isArray(stored.projects) ? stored.projects : defaults.projects || [],
    reviews: Array.isArray(stored.reviews) ? stored.reviews : defaults.reviews || []
  };
}

function initAdminPanel() {
  const adminFab = document.getElementById('adminFab');
  const adminModal = document.getElementById('adminModal');
  const closeAdmin = document.getElementById('closeAdmin');
  const closeAdmin2 = document.getElementById('closeAdmin2');
  const saveAdmin = document.getElementById('saveAdmin');

  if (!adminFab || !adminModal || !closeAdmin) return;

  const pageKey = getPageKey();
  const storageKey = getStorageKey();
  const defaults = getDefaultValues();
  const initialState = pageKey === 'first' && window.eccentricState ? window.eccentricState : null;
  const storedValue = localStorage.getItem(storageKey);
  const values = mergeValues(defaults, initialState || (storedValue ? JSON.parse(storedValue) : null));

  function getField(id, fallbackId) {
    return document.getElementById(id) || document.getElementById(fallbackId);
  }

  function populateFields() {
    getField('adminHeroTitle')?.value = values.heroTitle || '';
    getField('adminHeroText')?.value = values.heroText || '';
    getField('adminHeroImage')?.value = values.heroImage || '';
    getField('adminInstagram', 'adminSocialInstagram')?.value = values.social?.instagram || '';
    getField('adminFacebook', 'adminSocialFacebook')?.value = values.social?.facebook || '';
    getField('adminYoutube', 'adminSocialYoutube')?.value = values.social?.youtube || '';
    getField('adminContactEmail')?.value = values.contact?.email || '';
    getField('adminContactPhone')?.value = values.contact?.phone || '';
    getField('adminContactLocation')?.value = values.contact?.location || '';
    getField('adminFormTitle')?.value = values.formTitle || '';
    getField('adminMissionText')?.value = values.missionText || '';
    getField('adminVisionText')?.value = values.visionText || '';
    getField('adminAboutText')?.value = values.aboutText || '';
    getField('adminVideoUrl')?.value = values.videoUrl || '';
    document.getElementById('adminProject1Title')?.value = values.projects?.[0]?.title || '';
    document.getElementById('adminProject1Image')?.value = values.projects?.[0]?.image || '';
    document.getElementById('adminProject1Text')?.value = values.projects?.[0]?.description || '';
    document.getElementById('adminProject2Title')?.value = values.projects?.[1]?.title || '';
    document.getElementById('adminProject2Image')?.value = values.projects?.[1]?.image || '';
    document.getElementById('adminProject2Text')?.value = values.projects?.[1]?.description || '';
    document.getElementById('adminProject3Title')?.value = values.projects?.[2]?.title || '';
    document.getElementById('adminProject3Image')?.value = values.projects?.[2]?.image || '';
    document.getElementById('adminProject3Text')?.value = values.projects?.[2]?.description || '';
    document.getElementById('adminReview1Name')?.value = values.reviews?.[0]?.name || '';
    document.getElementById('adminReview1Rating')?.value = values.reviews?.[0]?.rating || '';
    document.getElementById('adminReview1Text')?.value = values.reviews?.[0]?.text || '';
    document.getElementById('adminReview2Name')?.value = values.reviews?.[1]?.name || '';
    document.getElementById('adminReview2Rating')?.value = values.reviews?.[1]?.rating || '';
    document.getElementById('adminReview2Text')?.value = values.reviews?.[1]?.text || '';
    document.getElementById('adminReview3Name')?.value = values.reviews?.[2]?.name || '';
    document.getElementById('adminReview3Rating')?.value = values.reviews?.[2]?.rating || '';
    document.getElementById('adminReview3Text')?.value = values.reviews?.[2]?.text || '';
  }

  function applyValues() {
    const heroTitle = document.querySelector('[data-admin="heroTitle"]');
    const heroText = document.querySelector('[data-admin="heroText"]');
    const heroImage = document.querySelector('[data-admin="heroImage"], #heroImage, .hero-card img');
    if (heroTitle) heroTitle.textContent = values.heroTitle || heroTitle.textContent;
    if (heroText) heroText.textContent = values.heroText || heroText.textContent;
    if (heroImage && values.heroImage) heroImage.setAttribute('src', values.heroImage);

    const review1Name = document.querySelector('[data-admin="review1Name"]');
    const review1Text = document.querySelector('[data-admin="review1Text"]');
    const review2Name = document.querySelector('[data-admin="review2Name"]');
    const review2Text = document.querySelector('[data-admin="review2Text"]');
    const review3Name = document.querySelector('[data-admin="review3Name"]');
    const review3Text = document.querySelector('[data-admin="review3Text"]');
    if (review1Name) review1Name.textContent = values.reviews?.[0]?.name || review1Name.textContent;
    if (review1Text) review1Text.textContent = values.reviews?.[0]?.text || review1Text.textContent;
    if (review2Name) review2Name.textContent = values.reviews?.[1]?.name || review2Name.textContent;
    if (review2Text) review2Text.textContent = values.reviews?.[1]?.text || review2Text.textContent;
    if (review3Name) review3Name.textContent = values.reviews?.[2]?.name || review3Name.textContent;
    if (review3Text) review3Text.textContent = values.reviews?.[2]?.text || review3Text.textContent;

    const missionText = document.querySelector('[data-admin="missionText"]');
    const visionText = document.querySelector('[data-admin="visionText"]');
    const aboutText = document.querySelector('[data-admin="aboutText"]');
    if (missionText) missionText.textContent = values.missionText || missionText.textContent;
    if (visionText) visionText.textContent = values.visionText || visionText.textContent;
    if (aboutText) aboutText.textContent = values.aboutText || aboutText.textContent;

    const formTitle = document.querySelector('[data-admin="formTitle"]');
    if (formTitle) formTitle.textContent = values.formTitle || formTitle.textContent;

    const socialLinks = document.querySelectorAll('.socials a');
    if (socialLinks[0]) socialLinks[0].setAttribute('href', values.social?.instagram || socialLinks[0].getAttribute('href'));
    if (socialLinks[1]) socialLinks[1].setAttribute('href', values.social?.facebook || socialLinks[1].getAttribute('href'));
    if (socialLinks[2]) socialLinks[2].setAttribute('href', values.social?.youtube || socialLinks[2].getAttribute('href'));

    document.getElementById('social-instagram')?.setAttribute('href', values.social?.instagram || '');
    document.getElementById('social-facebook')?.setAttribute('href', values.social?.facebook || '');
    document.getElementById('social-youtube')?.setAttribute('href', values.social?.youtube || '');
    document.getElementById('footerInstagram')?.setAttribute('href', values.social?.instagram || '');
    document.getElementById('footerFacebook')?.setAttribute('href', values.social?.facebook || '');
    document.getElementById('footerYoutube')?.setAttribute('href', values.social?.youtube || '');

    const contactEmail = document.getElementById('contactEmail');
    const contactPhone = document.querySelector('[data-i18n="contactPhone"]');
    const contactLocation = document.querySelector('[data-i18n="contactLocation"]');
    if (contactEmail) contactEmail.textContent = values.contact?.email || contactEmail.textContent;
    if (contactPhone) contactPhone.textContent = values.contact?.phone || contactPhone.textContent;
    if (contactLocation) contactLocation.textContent = values.contact?.location || contactLocation.textContent;
  }

  function handleFileInput(input) {
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const targetId = input.id.replace('File', '');
      const target = document.getElementById(targetId);
      if (target) target.value = reader.result;
    };
    reader.readAsDataURL(file);
  }

  document.querySelectorAll('input[type="file"][id^="admin"]').forEach((input) => {
    input.addEventListener('change', () => handleFileInput(input));
  });

  adminFab.addEventListener('click', () => {
    const entered = window.prompt('Enter admin password (default: Nithran 09/06/2000)');
    const normalized = entered?.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    const isAuthorized = normalized && (
      normalized === 'nithran09062000' ||
      normalized === 'admin' ||
      normalized === 'nithran'
    );

    if (isAuthorized) {
      populateFields();
      adminModal.classList.add('open');
    } else if (entered !== null) {
      window.alert('Unauthorized access.');
    }
  });

  closeAdmin.addEventListener('click', () => adminModal.classList.remove('open'));
  closeAdmin2?.addEventListener('click', () => adminModal.classList.remove('open'));
  adminModal.addEventListener('click', (event) => {
    if (event.target === adminModal) adminModal.classList.remove('open');
  });

  saveAdmin?.addEventListener('click', () => {
    values.heroTitle = getField('adminHeroTitle')?.value || values.heroTitle;
    values.heroText = getField('adminHeroText')?.value || values.heroText;
    values.heroImage = getField('adminHeroImage')?.value || values.heroImage;
    values.social = {
      ...(values.social || {}),
      instagram: getField('adminInstagram', 'adminSocialInstagram')?.value || values.social?.instagram || '',
      facebook: getField('adminFacebook', 'adminSocialFacebook')?.value || values.social?.facebook || '',
      youtube: getField('adminYoutube', 'adminSocialYoutube')?.value || values.social?.youtube || ''
    };
    values.contact = {
      ...(values.contact || {}),
      email: getField('adminContactEmail')?.value || values.contact?.email || '',
      phone: getField('adminContactPhone')?.value || values.contact?.phone || '',
      location: getField('adminContactLocation')?.value || values.contact?.location || ''
    };
    values.formTitle = getField('adminFormTitle')?.value || values.formTitle || '';
    values.missionText = getField('adminMissionText')?.value || values.missionText || '';
    values.visionText = getField('adminVisionText')?.value || values.visionText || '';
    values.aboutText = getField('adminAboutText')?.value || values.aboutText || '';
    values.videoUrl = getField('adminVideoUrl')?.value || values.videoUrl || '';
    values.projects = values.projects || [];
    values.projects[0] = { ...values.projects[0], title: document.getElementById('adminProject1Title')?.value || '', image: document.getElementById('adminProject1Image')?.value || '', description: document.getElementById('adminProject1Text')?.value || '' };
    values.projects[1] = { ...values.projects[1], title: document.getElementById('adminProject2Title')?.value || '', image: document.getElementById('adminProject2Image')?.value || '', description: document.getElementById('adminProject2Text')?.value || '' };
    values.projects[2] = { ...values.projects[2], title: document.getElementById('adminProject3Title')?.value || '', image: document.getElementById('adminProject3Image')?.value || '', description: document.getElementById('adminProject3Text')?.value || '' };
    values.reviews = values.reviews || [];
    values.reviews[0] = { ...values.reviews[0], name: document.getElementById('adminReview1Name')?.value || '', rating: document.getElementById('adminReview1Rating')?.value || '', text: document.getElementById('adminReview1Text')?.value || '' };
    values.reviews[1] = { ...values.reviews[1], name: document.getElementById('adminReview2Name')?.value || '', rating: document.getElementById('adminReview2Rating')?.value || '', text: document.getElementById('adminReview2Text')?.value || '' };
    values.reviews[2] = { ...values.reviews[2], name: document.getElementById('adminReview3Name')?.value || '', rating: document.getElementById('adminReview3Rating')?.value || '', text: document.getElementById('adminReview3Text')?.value || '' };

    localStorage.setItem(storageKey, JSON.stringify(values));
    if (pageKey === 'first') {
      window.state = values;
      window.eccentricState = values;
      window.eccentricSetState?.(values);
      localStorage.setItem(window.eccentricStorageKey || 'eccentric-studios-data', JSON.stringify(values));
      if (typeof window.renderSite === 'function') {
        window.renderSite();
      }
    } else {
      applyValues();
    }
    adminModal.classList.remove('open');
    window.alert('Changes saved successfully.');
  });

  applyValues();
}

initAdminPanel();