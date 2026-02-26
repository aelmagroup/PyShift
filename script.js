/* ========================================
   PyShift — MATLAB to Python Migration
   script.js
   ======================================== */

(function () {
  'use strict';

  /* ==========================================
     i18n — Translations
     ========================================== */

  var translations = {
    en: {
      // Nav
      'nav.cost': 'The Cost Problem',
      'nav.why_python': 'Why Python',
      'nav.service': 'Our Service',
      'nav.audience': "Who It's For",
      'nav.get_started': 'Get Started',

      // Hero
      'hero.badge': 'MATLAB \u2192 Python Migration',
      'hero.title': 'Stop Paying for MATLAB\u00a0Licenses.\nMove to Python.',
      'hero.sub': 'We convert your MATLAB code into clean, production-ready Python \u2014 so you can scale freely, reduce costs, and embrace the open-source\u00a0ecosystem.',
      'hero.cta_primary': 'Get in Touch',
      'hero.cta_secondary': 'Learn More \u2193',

      // Cost
      'cost.label': 'The Problem',
      'cost.title': 'MATLAB Licensing Costs Add Up Fast',
      'cost.sub': 'Proprietary toolchains create long-term financial and operational dependencies that grow with your team.',
      'cost.prop_header': 'Proprietary License Costs',
      'cost.matlab_label': 'MATLAB Base License',
      'cost.matlab_desc': 'Thousands per user per year',
      'cost.simulink_label': 'Simulink',
      'cost.simulink_desc': 'Separate license required',
      'cost.parallel_label': 'Parallel Computing Toolbox',
      'cost.parallel_desc': 'Additional per-user cost',
      'cost.optim_label': 'Optimization Toolbox',
      'cost.optim_desc': 'Additional per-user cost',
      'cost.signal_label': 'Signal Processing Toolbox',
      'cost.signal_desc': 'Additional per-user cost',
      'cost.footer_bad': 'Costs multiply with every new user and toolbox',
      'cost.open_header': 'Open-Source Ecosystem',
      'cost.free': 'Free & open-source',
      'cost.free2': 'Free & open-source',
      'cost.free3': 'Free & open-source',
      'cost.free4': 'Free & open-source',
      'cost.free5': 'Free & open-source',
      'cost.footer_good': 'Zero licensing costs, regardless of team size',
      'cost.note': 'Enterprise MATLAB licenses can cost thousands of dollars per user per year. Each toolbox is sold separately, and scaling your team multiplies these costs significantly. Long-term dependency on proprietary software increases operational expenses and limits flexibility.',

      // Why Python
      'python.label': 'The Alternative',
      'python.title': 'Why Python Is the Future of Engineering',
      'python.sub': 'Python has become the standard language for scientific computing, data science, and AI \u2014 backed by a global open-source community.',
      'python.opensource_title': 'Open-Source',
      'python.opensource_desc': 'No licensing costs, ever. Free to use, modify, and distribute.',
      'python.community_title': 'Global Community',
      'python.community_desc': 'Millions of developers. Extensive documentation, tutorials, and support.',
      'python.ecosystem_title': 'Rich Ecosystem',
      'python.ecosystem_desc': 'NumPy, SciPy, Pandas, Matplotlib \u2014 everything you need for scientific computing.',
      'python.ai_title': 'AI & ML Ready',
      'python.ai_desc': 'PyTorch, TensorFlow, scikit-learn \u2014 the industry standard for machine learning.',
      'python.cloud_title': 'Cloud & Web Ready',
      'python.cloud_desc': 'Seamless integration with web services, APIs, and cloud infrastructure.',
      'python.devops_title': 'DevOps Friendly',
      'python.devops_desc': 'CI/CD pipelines, Docker containers, automated testing \u2014 all native.',
      'python.container_title': 'Containerization',
      'python.container_desc': 'Docker-ready from day one. Deploy anywhere, reproducibly.',
      'python.talent_title': 'Larger Talent Pool',
      'python.talent_desc': 'Python developers are everywhere. Hiring and onboarding become easier.',

      // Service
      'service.label': 'Our Service',
      'service.title': 'From MATLAB to Production-Ready\u00a0Python',
      'service.sub': 'We analyze your MATLAB codebase and deliver clean, documented, optimized Python code \u2014 with full functional equivalence. We also transform proprietary Simulink block-diagram models into maintainable, scalable Python simulation architectures.',
      'service.step1_title': 'Code Audit',
      'service.step1_desc': 'We assess your existing MATLAB codebase, identify dependencies, toolbox usage, and complexity.',
      'service.step2_title': 'Architecture Mapping',
      'service.step2_desc': 'We design the target Python architecture, mapping MATLAB constructs to Pythonic equivalents.',
      'service.step3_title': 'Transcoding & Optimization',
      'service.step3_desc': 'We convert your code with a focus on performance, readability, and adherence to Python best practices.',
      'service.step4_title': 'Validation & Testing',
      'service.step4_desc': 'We verify functional equivalence through comprehensive testing and deliver full documentation.',
      'service.g1': 'Functional equivalence',
      'service.g2': 'Performance optimization',
      'service.g3': 'Clean, readable code',
      'service.g4': 'Full documentation',
      'service.g5': 'Optional modern refactoring',

      // Audience
      'audience.label': "Who It's For",
      'audience.title': 'Built for Teams That Need to\u00a0Scale',
      'audience.sub': "Whether you're a startup or an enterprise, if your stack depends on MATLAB, we can help you move forward.",
      'audience.engineering_title': 'Engineering Teams',
      'audience.engineering_desc': 'Modernize your simulation and analysis pipelines without disrupting delivery.',
      'audience.research_title': 'Research Labs',
      'audience.research_desc': 'Transition research code to reproducible, shareable, open-source Python.',
      'audience.startup_title': 'Startups Scaling Up',
      'audience.startup_desc': 'Eliminate licensing overhead as your team grows and your product matures.',
      'audience.enterprise_title': 'Enterprises',
      'audience.enterprise_desc': 'Reduce operational costs and consolidate your technology stack at scale.',
      'audience.ai_title': 'AI-Focused Companies',
      'audience.ai_desc': 'Unlock the full AI/ML ecosystem by moving to Python natively.',
      'audience.academics_title': 'Academics',
      'audience.academics_desc': 'Enable students and researchers to work with open, reproducible tools used across industry.',

      // ROI
      'roi.label': 'Return on Investment',
      'roi.title': 'Eliminate Recurring Costs.\nUnlock AI-Driven Innovation.',
      'roi.desc': "Switching to Python removes the burden of escalating license fees. Your team gains access to the world's largest developer ecosystem, cloud-native tooling, and cutting-edge AI frameworks \u2014 at zero licensing cost.",
      'roi.stat1_label': 'Python licensing cost',
      'roi.stat2_label': 'Scalability, no per-seat limit',
      'roi.stat3_label': 'Larger developer pool',
      'roi.cta': 'Start Saving Today',

      // Contact
      'contact.label': 'Get Started',
      'contact.title': 'Contact Us',
      'contact.sub': "Tell us about your project. We'll provide pricing based on the size and complexity of your MATLAB codebase.",
      'contact.name_label': 'Name',
      'contact.name_ph': 'Your full name',
      'contact.company_label': 'Company',
      'contact.company_ph': 'Your company name',
      'contact.email_label': 'Email',
      'contact.email_ph': 'you@company.com',
      'contact.message_label': 'Message',
      'contact.message_ph': "Tell us about your MATLAB codebase, the toolboxes you use, and when you'd like to get started.",
      'contact.submit': 'Send Message',
      'contact.success_title': 'Thank you!',
      'contact.success_desc': "We've received your request. Our team will reach out within 24 hours with your personalized migration plan.",

      // Footer
      'footer.brand_desc': 'Professional MATLAB to Python migration services.',
      'footer.nav_header': 'Navigation',
      'footer.nav_cost': 'The Cost Problem',
      'footer.nav_python': 'Why Python',
      'footer.nav_service': 'Our Service',
      'footer.nav_contact': 'Contact',
      'footer.contact_header': 'Contact',
      'footer.copyright': '\u00a9 2026 PyShift. All rights reserved.',

      // Meta
      'meta.title': 'PyShift \u2014 MATLAB to Python Migration Services',
      'meta.description': 'Professional MATLAB to Python code transcoding. Eliminate expensive licenses, unlock open-source innovation, and future-proof your engineering stack.',
      'meta.og_title': 'PyShift \u2014 MATLAB to Python Migration Services',
      'meta.og_description': 'Convert your MATLAB codebase into clean, production-ready Python. Reduce costs. Scale freely.',
    },

    fr: {
      // Nav
      'nav.cost': 'Le probl\u00e8me des co\u00fbts',
      'nav.why_python': 'Pourquoi Python',
      'nav.service': 'Notre service',
      'nav.audience': '\u00c0 qui s\u2019adresse-t-on',
      'nav.get_started': 'Nous contacter',

      // Hero
      'hero.badge': 'Migration MATLAB \u2192 Python',
      'hero.title': 'Arr\u00eatez de payer des licences\u00a0MATLAB.\nPassez \u00e0 Python.',
      'hero.sub': 'Nous convertissons votre code MATLAB en Python propre et pr\u00eat pour la production \u2014 pour que vous puissiez \u00e9voluer librement, r\u00e9duire vos co\u00fbts et adopter l\u2019\u00e9cosyst\u00e8me\u00a0open-source.',
      'hero.cta_primary': 'Nous contacter',
      'hero.cta_secondary': 'En savoir plus \u2193',

      // Cost
      'cost.label': 'Le probl\u00e8me',
      'cost.title': 'Les co\u00fbts de licence MATLAB explosent rapidement',
      'cost.sub': 'Les outils propri\u00e9taires cr\u00e9ent des d\u00e9pendances financi\u00e8res et op\u00e9rationnelles \u00e0 long terme qui augmentent avec votre \u00e9quipe.',
      'cost.prop_header': 'Co\u00fbts des licences propri\u00e9taires',
      'cost.matlab_label': 'Licence de base MATLAB',
      'cost.matlab_desc': 'Des milliers d\u2019euros par utilisateur par an',
      'cost.simulink_label': 'Simulink',
      'cost.simulink_desc': 'Licence s\u00e9par\u00e9e requise',
      'cost.parallel_label': 'Parallel Computing Toolbox',
      'cost.parallel_desc': 'Co\u00fbt suppl\u00e9mentaire par utilisateur',
      'cost.optim_label': 'Optimization Toolbox',
      'cost.optim_desc': 'Co\u00fbt suppl\u00e9mentaire par utilisateur',
      'cost.signal_label': 'Signal Processing Toolbox',
      'cost.signal_desc': 'Co\u00fbt suppl\u00e9mentaire par utilisateur',
      'cost.footer_bad': 'Les co\u00fbts se multiplient avec chaque nouvel utilisateur et toolbox',
      'cost.open_header': '\u00c9cosyst\u00e8me open-source',
      'cost.free': 'Gratuit et open-source',
      'cost.free2': 'Gratuit et open-source',
      'cost.free3': 'Gratuit et open-source',
      'cost.free4': 'Gratuit et open-source',
      'cost.free5': 'Gratuit et open-source',
      'cost.footer_good': 'Z\u00e9ro co\u00fbt de licence, quelle que soit la taille de l\u2019\u00e9quipe',
      'cost.note': 'Les licences MATLAB entreprise peuvent co\u00fbter des milliers d\u2019euros par utilisateur et par an. Chaque toolbox est vendue s\u00e9par\u00e9ment, et l\u2019\u00e9largissement de votre \u00e9quipe multiplie ces co\u00fbts consid\u00e9rablement. La d\u00e9pendance \u00e0 long terme aux logiciels propri\u00e9taires augmente les charges d\u2019exploitation et limite la flexibilit\u00e9.',

      // Why Python
      'python.label': 'L\u2019alternative',
      'python.title': 'Pourquoi Python est l\u2019avenir de l\u2019ing\u00e9nierie',
      'python.sub': 'Python est devenu le langage de r\u00e9f\u00e9rence pour le calcul scientifique, la data science et l\u2019IA \u2014 soutenu par une communaut\u00e9 open-source mondiale.',
      'python.opensource_title': 'Open-source',
      'python.opensource_desc': 'Aucun co\u00fbt de licence, jamais. Libre d\u2019utilisation, de modification et de distribution.',
      'python.community_title': 'Communaut\u00e9 mondiale',
      'python.community_desc': 'Des millions de d\u00e9veloppeurs. Documentation, tutoriels et support extensifs.',
      'python.ecosystem_title': '\u00c9cosyst\u00e8me riche',
      'python.ecosystem_desc': 'NumPy, SciPy, Pandas, Matplotlib \u2014 tout ce qu\u2019il faut pour le calcul scientifique.',
      'python.ai_title': 'IA & ML natif',
      'python.ai_desc': 'PyTorch, TensorFlow, scikit-learn \u2014 les standards de l\u2019industrie pour le machine learning.',
      'python.cloud_title': 'Cloud & Web natif',
      'python.cloud_desc': 'Int\u00e9gration transparente avec les services web, APIs et infrastructures cloud.',
      'python.devops_title': 'Compatible DevOps',
      'python.devops_desc': 'Pipelines CI/CD, conteneurs Docker, tests automatis\u00e9s \u2014 tout est natif.',
      'python.container_title': 'Containerisation',
      'python.container_desc': 'Compatible Docker d\u00e8s le premier jour. D\u00e9ployez partout, de mani\u00e8re reproductible.',
      'python.talent_title': 'Vivier de talents plus large',
      'python.talent_desc': 'Les d\u00e9veloppeurs Python sont partout. Le recrutement et l\u2019int\u00e9gration sont facilit\u00e9s.',

      // Service
      'service.label': 'Notre service',
      'service.title': 'De MATLAB \u00e0 un Python pr\u00eat pour la\u00a0production',
      'service.sub': 'Nous analysons votre code MATLAB et livrons un code Python propre, document\u00e9 et optimis\u00e9 \u2014 avec une \u00e9quivalence fonctionnelle compl\u00e8te. Nous transformons \u00e9galement les mod\u00e8les Simulink en architectures de simulation Python maintenables et \u00e9volutives.',
      'service.step1_title': 'Audit du code',
      'service.step1_desc': 'Nous \u00e9valuons votre code MATLAB existant, identifions les d\u00e9pendances, l\u2019utilisation des toolboxes et la complexit\u00e9.',
      'service.step2_title': 'Cartographie d\u2019architecture',
      'service.step2_desc': 'Nous concevons l\u2019architecture Python cible en transposant les constructions MATLAB en \u00e9quivalents pythoniques.',
      'service.step3_title': 'Transcodage & optimisation',
      'service.step3_desc': 'Nous convertissons votre code en mettant l\u2019accent sur la performance, la lisibilit\u00e9 et le respect des bonnes pratiques Python.',
      'service.step4_title': 'Validation & tests',
      'service.step4_desc': 'Nous v\u00e9rifions l\u2019\u00e9quivalence fonctionnelle par des tests complets et livrons une documentation compl\u00e8te.',
      'service.g1': '\u00c9quivalence fonctionnelle',
      'service.g2': 'Optimisation des performances',
      'service.g3': 'Code propre et lisible',
      'service.g4': 'Documentation compl\u00e8te',
      'service.g5': 'Refactoring moderne optionnel',

      // Audience
      'audience.label': '\u00c0 qui s\u2019adresse-t-on',
      'audience.title': 'Con\u00e7u pour les \u00e9quipes qui doivent\u00a0grandir',
      'audience.sub': 'Que vous soyez une startup ou une grande entreprise, si votre stack repose sur MATLAB, nous pouvons vous aider \u00e0 avancer.',
      'audience.engineering_title': '\u00c9quipes d\u2019ing\u00e9nierie',
      'audience.engineering_desc': 'Modernisez vos pipelines de simulation et d\u2019analyse sans perturber vos livraisons.',
      'audience.research_title': 'Laboratoires de recherche',
      'audience.research_desc': 'Passez \u00e0 un code reproductible, partageable et open-source en Python.',
      'audience.startup_title': 'Startups en croissance',
      'audience.startup_desc': '\u00c9liminez les co\u00fbts de licence \u00e0 mesure que votre \u00e9quipe grandit et que votre produit m\u00fbrit.',
      'audience.enterprise_title': 'Grandes entreprises',
      'audience.enterprise_desc': 'R\u00e9duisez les co\u00fbts op\u00e9rationnels et consolidez votre stack technologique \u00e0 grande \u00e9chelle.',
      'audience.ai_title': 'Entreprises orient\u00e9es IA',
      'audience.ai_desc': 'Acc\u00e9dez \u00e0 l\u2019int\u00e9gralit\u00e9 de l\u2019\u00e9cosyst\u00e8me IA/ML en passant nativement \u00e0 Python.',
      'audience.academics_title': 'Acad\u00e9miques',
      'audience.academics_desc': 'Permettez aux \u00e9tudiants et chercheurs de travailler avec des outils ouverts et reproductibles utilis\u00e9s dans l\u2019industrie.',

      // ROI
      'roi.label': 'Retour sur investissement',
      'roi.title': '\u00c9liminez les co\u00fbts r\u00e9currents.\nLib\u00e9rez l\u2019innovation par l\u2019IA.',
      'roi.desc': 'Passer \u00e0 Python supprime le fardeau des frais de licence croissants. Votre \u00e9quipe acc\u00e8de au plus grand \u00e9cosyst\u00e8me de d\u00e9veloppeurs au monde, \u00e0 des outils cloud-native et \u00e0 des frameworks d\u2019IA de pointe \u2014 sans aucun co\u00fbt de licence.',
      'roi.stat1_label': 'Co\u00fbt de licence Python',
      'roi.stat2_label': 'Scalabilit\u00e9 illimit\u00e9e',
      'roi.stat3_label': 'Vivier de d\u00e9veloppeurs plus large',
      'roi.cta': 'Commencez \u00e0 \u00e9conomiser',

      // Contact
      'contact.label': 'C\u2019est parti',
      'contact.title': 'Contactez-nous',
      'contact.sub': 'Parlez-nous de votre projet. Nous vous proposerons un tarif adapt\u00e9 \u00e0 la taille et \u00e0 la complexit\u00e9 de votre code MATLAB.',
      'contact.name_label': 'Nom',
      'contact.name_ph': 'Votre nom complet',
      'contact.company_label': 'Entreprise',
      'contact.company_ph': 'Nom de votre entreprise',
      'contact.email_label': 'Email',
      'contact.email_ph': 'vous@entreprise.com',
      'contact.message_label': 'Message',
      'contact.message_ph': 'D\u00e9crivez votre code MATLAB, les toolboxes utilis\u00e9es, et quand vous souhaitez d\u00e9marrer.',
      'contact.submit': 'Envoyer le message',
      'contact.success_title': 'Merci\u00a0!',
      'contact.success_desc': 'Nous avons bien re\u00e7u votre demande. Notre \u00e9quipe vous recontactera sous 24 heures avec un plan de migration personnalis\u00e9.',

      // Footer
      'footer.brand_desc': 'Services professionnels de migration MATLAB vers Python.',
      'footer.nav_header': 'Navigation',
      'footer.nav_cost': 'Le probl\u00e8me des co\u00fbts',
      'footer.nav_python': 'Pourquoi Python',
      'footer.nav_service': 'Notre service',
      'footer.nav_contact': 'Contact',
      'footer.contact_header': 'Contact',
      'footer.copyright': '\u00a9 2026 PyShift. Tous droits r\u00e9serv\u00e9s.',

      // Meta
      'meta.title': 'PyShift \u2014 Services de migration MATLAB vers Python',
      'meta.description': 'Transcodage professionnel de MATLAB vers Python. \u00c9liminez les licences co\u00fbteuses, adoptez l\u2019open-source et pr\u00e9parez l\u2019avenir de votre stack technique.',
      'meta.og_title': 'PyShift \u2014 Services de migration MATLAB vers Python',
      'meta.og_description': 'Convertissez votre code MATLAB en Python propre et pr\u00eat pour la production. R\u00e9duisez vos co\u00fbts. \u00c9voluez librement.',
    },
  };

  /* ==========================================
     i18n — setLang function
     ========================================== */

  var currentLang = 'en';

  function setLang(lang) {
    var t = translations[lang];
    if (!t) return;
    currentLang = lang;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        // Preserve <br> in titles by using innerHTML for headings
        if (el.tagName === 'H1' || el.tagName === 'H2') {
          el.innerHTML = t[key].replace(/\n/g, '<br>');
        } else {
          el.textContent = t[key];
        }
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    // Update <html lang>
    document.documentElement.lang = lang;

    // Update meta tags
    document.title = t['meta.title'] || document.title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t['meta.description'] || '');
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t['meta.og_title'] || '');
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t['meta.og_description'] || '');

    // Update switch button text (show the other language)
    var switchBtn = document.getElementById('lang-switch');
    if (switchBtn) {
      switchBtn.textContent = lang === 'en' ? 'FR' : 'EN';
    }

    // Persist choice
    try {
      localStorage.setItem('pyshift-lang', lang);
    } catch (e) {
      // localStorage unavailable
    }
  }

  /* ==========================================
     i18n — Init: detect language
     ========================================== */

  function detectLang() {
    // 1. Check localStorage
    try {
      var saved = localStorage.getItem('pyshift-lang');
      if (saved === 'en' || saved === 'fr') return saved;
    } catch (e) {
      // localStorage unavailable
    }

    // 2. Check browser language
    var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('fr')) return 'fr';

    // 3. Default
    return 'en';
  }

  // Apply language on load
  var initialLang = detectLang();
  if (initialLang !== 'en') {
    setLang(initialLang);
  } else {
    // Set switch button text for default English
    var switchBtn = document.getElementById('lang-switch');
    if (switchBtn) switchBtn.textContent = 'FR';
  }

  // Language switch click handler
  document.getElementById('lang-switch').addEventListener('click', function () {
    setLang(currentLang === 'en' ? 'fr' : 'en');
  });

  /* ==========================================
     Navbar scroll effect
     ========================================== */

  var navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  /* ==========================================
     Mobile nav toggle
     ========================================== */

  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
    });
  });

  /* ==========================================
     Fade-in on scroll (Intersection Observer)
     ========================================== */

  var fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ==========================================
     Contact form submission simulation
     ========================================== */

  var contactForm = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();

    if (!name || !email) {
      return;
    }

    contactForm.style.display = 'none';
    formSuccess.classList.add('visible');
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  /* ==========================================
     Smooth scroll for anchor links
     ========================================== */

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = navbar.offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
})();
