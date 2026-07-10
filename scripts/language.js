const langStorageKey = 'eccentric-studios-lang';
const translations = {
  en: {
    brandSub: 'Creative Studio',
    brandMain: 'Eccentric Studios',
    navHome: 'Home',
    navOrder: 'Order',
    navGames: 'Games',
    navReviews: 'Reviews',
    navAbout: 'About',
    orderBadge: 'Order Placement',
    orderTitle: 'Bring your next campaign to life with a premium creative brief.',
    orderText: 'Share your project details and we will prepare a striking, conversion-ready experience for your brand.',
    waCta: 'Open WhatsApp',
    emailCta: 'Email Us',
    formTitle: 'Order Form',
    formName: 'Full Name',
    formCompany: 'Business or Company Name',
    formPhone: 'Phone Number',
    formEmail: 'Address',
    formService: 'Required Service',
    servicePlaceholder: 'Select a service',
    serviceLogo: 'Logo & Brand Identity',
    serviceWebsite: 'Website Development',
    serviceGraphic: 'Graphic Design',
    serviceSocial: 'Social Media Management',
    serviceVideo: 'Video Editing',
    serviceAi: 'AI Content Creation',
    serviceSeo: 'SEO & Digital Marketing',
    serviceAds: 'Google & Meta Ads',
    serviceEcommerce: 'E-commerce Solutions',
    serviceMaintenance: 'Website Maintenance',
    formDescription: 'Project Description',
    formSubmit: 'Send Request',
    nextTitle: 'What happens next?',
    nextItem1: 'Your request is prepared for quick follow-up.',
    nextItem2: 'We review your brief and confirm the best creative direction.',
    nextItem3: 'We deliver polished work with premium visuals and strategy.',
    reviewBadge: 'Client Reviews',
    reviewTitle: 'Trusted by brands that want premium visuals and seamless execution.',
    reviewText: 'Our clients value strategy, craft, and thoughtful delivery from concept to launch.',
    review1Name: 'Nisha Rao',
    review1Text: '“The creative strategy and final content were beyond expectations.”',
    review2Name: 'Aarav Menon',
    review2Text: '“Cinematic, polished, and incredibly responsive throughout the process.”',
    review3Name: 'Deepika S.',
    review3Text: '“Every detail felt premium and aligned with our brand goals.”',
    reviewFormTitle: 'Leave a review',
    reviewFormName: 'Name',
    reviewFormRating: 'Rating',
    reviewFormRatingPlaceholder: '5/5',
    reviewFormReview: 'Review',
    reviewFormSubmit: 'Submit review',
    aboutBadge: 'About Us',
    aboutTitle: 'Eccentric Studios crafts bold brand stories with cinematic polish.',
    aboutText: 'We blend strategy, motion, and visual direction to create premium experiences that stand out and convert.',
    missionTitle: 'Mission',
    missionText: 'Craft campaigns that feel fresh, strategic, and unforgettable.',
    visionTitle: 'Vision',
    visionText: 'Elevate every launch with cinematic storytelling and precise execution.',
    footerCopy: '© 2026 Eccentric Studios'
  },
  ta: {
    brandSub: 'சிரேஷ்ட படைப்புகள்',
    brandMain: 'எக்கென்ட்ரிக் ஸ்டுடியோஸ்',
    navHome: 'முகப்பு',
    navOrder: 'ஆர்டர்',
    navGames: 'விளையாட்டுகள்',
    navReviews: 'மதிப்புரைகள்',
    navAbout: 'எங்களைப் பற்றி',
    orderBadge: 'ஆர்டர் அளித்தல்',
    orderTitle: 'உங்கள் அடுத்த பிரச்சாரத்தை பிரீமியம் கிரியேட்டிவ் பிரைஃபுடன் உயிர்ப்பிக்கவும்.',
    orderText: 'உங்கள் திட்ட விவரங்களைப் பகிரவும்; நாங்கள் உங்கள் பிராண்டிற்கு வலுவான, மாற்றத்தை உருவாக்கும் அனுபவத்தை தயார் செய்வோம்.',
    waCta: 'WhatsApp-ஐ திறக்கவும்',
    emailCta: 'மின்னஞ்சல் அனுப்பவும்',
    formTitle: 'ஆர்டர் படிவம்',
    formName: 'முழு பெயர்',
    formCompany: 'வணிகம் அல்லது நிறுவனத்தின் பெயர்',
    formPhone: 'தொலைபேசி எண்',
    formEmail: 'முகவரி',
    formService: 'தேவையான சேவை',
    servicePlaceholder: 'ஒரு சேவையைத் தேர்ந்தெடுக்கவும்',
    serviceLogo: 'லோகோ & பிராண்ட் அடையாளம்',
    serviceWebsite: 'வலைத்தள உருவாக்கம்',
    serviceGraphic: 'கிராஃபிக் டிசைன்',
    serviceSocial: 'சோஷியல் மீடியா மேலாண்மை',
    serviceVideo: 'வீடியோ எடிட்டிங்',
    serviceAi: 'AI உள்ளடக்க உருவாக்கம்',
    serviceSeo: 'SEO & டிஜிட்டல் மார்க்கெட்டிங்',
    serviceAds: 'Google & Meta விளம்பரங்கள்',
    serviceEcommerce: 'இ-காமர்ஸ் தீர்வுகள்',
    serviceMaintenance: 'வலைத்தள பராமரிப்பு',
    formDescription: 'திட்ட விவரம்',
    formSubmit: 'கோரிக்கையை அனுப்பவும்',
    nextTitle: 'அடுத்து என்ன நடக்கும்?',
    nextItem1: 'உங்கள் கோரிக்கை விரைவான பின்தொடர்புக்காக தயார் செய்யப்படுகிறது.',
    nextItem2: 'உங்கள் பிரைஃபை மதிப்பாய்வு செய்து சிறந்த கிரியேட்டிவ் திசையை உறுதிப்படுத்துகிறோம்.',
    nextItem3: 'நாங்கள் பிரீமியம் விசுவல்கள் மற்றும் உத்தியுடன் நேர்த்தியான வேலைகளை வழங்குகிறோம்.',
    reviewBadge: 'வாடிக்கையாளர் மதிப்புரைகள்',
    reviewTitle: 'பிரீமியம் காட்சிகள் மற்றும் மென்மையான செயல்பாட்டை விரும்பும் பிராண்டுகளால் நம்பப்படுகிறது.',
    reviewText: 'எங்கள் வாடிக்கையாளர்கள் கருத்து, கைவினை மற்றும் கருத்தியல் வழங்கலுக்கு மதிப்பளிக்கிறார்கள்.',
    review1Name: 'நிஷா ராவ்',
    review1Text: '“கிரியேட்டிவ் உத்தி மற்றும் இறுதி உள்ளடக்கம் எதிர்பார்ப்புகளை மிஞ்சியது.”',
    review2Name: 'ஆரவ் மேனன்',
    review2Text: '“சினிமா பாணியில், நேர்த்தியாகவும், முழு செயல்முறையிலும் மிகவும் பதிலளிக்கக்கூடியதாகவும் இருந்தது.”',
    review3Name: 'தீபிகா எஸ்.',
    review3Text: '“ஒவ்வொரு விவரமும் பிரீமியம் மற்றும் எங்கள் பிராண்ட் நோக்கங்களுடன் ஒத்துப்போனது.”',
    reviewFormTitle: 'ஒரு மதிப்புரையை விடுங்கள்',
    reviewFormName: 'பெயர்',
    reviewFormRating: 'மதிப்பீடு',
    reviewFormRatingPlaceholder: '5/5',
    reviewFormReview: 'மதிப்புரை',
    reviewFormSubmit: 'மதிப்புரையை அனுப்பவும்',
    aboutBadge: 'எங்களைப் பற்றி',
    aboutTitle: 'எக்கென்ட்ரிக் ஸ்டுடியோஸ் சினிமா பாணியில் துணிச்சலான பிராண்ட் கதைகளை உருவாக்குகிறது.',
    aboutText: 'நாங்கள் உத்தி, மோஷன் மற்றும் காட்சி திசையை இணைத்து, தனித்து நின்று மாற்றத்தை உருவாக்கும் பிரீமியம் அனுபவங்களை உருவாக்குகிறோம்.',
    missionTitle: 'பணிக்கூறு',
    missionText: 'புதுமையான, உத்தி சார்ந்த, மறக்க முடியாத பிரச்சாரங்களை உருவாக்கவும்.',
    visionTitle: 'கனவு',
    visionText: 'ஒவ்வொரு அறிமுகத்தையும் சினிமா பாணியிலான கதையாடல் மற்றும் துல்லியமான செயல்பாட்டுடன் உயர்த்தவும்.',
    footerCopy: '© 2026 எக்கென்ட்ரிக் ஸ்டுடியோஸ்'
  }
};

function getCurrentLanguage() {
  return localStorage.getItem(langStorageKey) || 'en';
}

function applyLanguage(lang) {
  const selected = translations[lang] ? lang : 'en';
  document.documentElement.lang = selected;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const targetAttr = el.getAttribute('data-i18n-attr');
    const value = translations[selected][key];
    if (value) {
      if (targetAttr) {
        el.setAttribute(targetAttr, value);
      } else {
        el.textContent = value;
      }
    }
  });

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === selected);
  });

  localStorage.setItem(langStorageKey, selected);
  document.dispatchEvent(new CustomEvent('language:changed', { detail: { lang: selected } }));
}

function initLanguageSwitcher() {
  const savedLang = getCurrentLanguage();
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });
  applyLanguage(savedLang);
}

window.EccentricLanguage = { applyLanguage, getCurrentLanguage, translations };
initLanguageSwitcher();
