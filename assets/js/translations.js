/**
 * Complete Bilingual Translations Dictionary (EN / UZ)
 * Precision tuned for Fazliddin Akramjonov - Frontend Developer
 */
const translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      services: "Services",
      contact: "Contact",
      talk: "Let's Talk"
    },

    // Hero Section
    hero: {
      status: "Available for Work & Projects",
      greeting: "HELLO, I'M",
      name: "FAZLIDDIN AKRAMJONOV",
      titlePrefix: "A PASSIONATE",
      typingRoles: [
        "FRONTEND DEVELOPER",
        "TAILWIND CSS EXPERT",
        "REACT DEVELOPER",
        "UI/UX CRAFTSMAN"
      ],
      description: "I transform ideas into modern, responsive, and interactive digital experiences. Dedicated to building clean architectures, high-performance web applications, and pixel-perfect user interfaces.",
      viewWork: "Explore Projects",
      contactBtn: "Contact Me",
      stats: {
        experience: "1+ Year",
        expLabel: "Active Coding",
        techCount: "100%",
        techLabel: "Verified Skills",
        projectsCount: "Production",
        projectsLabel: "Quality Focus"
      }
    },

    // About Me
    about: {
      badge: "WHO I AM",
      heading: "Building Intuitive Web Experiences with Code & Passion",
      journeyTitle: "My Development Journey",
      journeyDesc: "I began my software engineering journey with intensive training in modern Frontend Development at IT Live Academy. Concurrently, I am pursuing my higher education in Artificial Intelligence at Renessans University. Over the past year, I have focused relentlessly on mastering modern web standards, crafting dynamic web interfaces with React, and creating sleek, responsive layouts with Tailwind CSS.",
      philosophyTitle: "My Engineering Philosophy",
      philosophyDesc: "Clean code is not just readable; it's maintainable, scalable, and built around user delight. I believe in mobile-first responsiveness, minimal friction, accessible components, and seamless animations that enhance rather than distract.",
      strengthsTitle: "Core Strengths",
      strengths: [
        "Tailwind CSS & Modern Responsive Architecture (90%)",
        "Semantic HTML5 & Advanced CSS3 Animations (88%)",
        "Core JavaScript (ES6+), DOM Manipulation & Async logic (75%)",
        "React Component Architecture & React Router (60%)",
        "Version Control with Git/GitHub & Figma-to-Code Translation"
      ],
      goalsTitle: "My Career Goals",
      goalsDesc: "To contribute to ambitious software teams, engineer high-traffic production web applications, and merge modern frontend ecosystems with intelligent digital services.",
      downloadCv: "Download Official CV (PDF)",
      academicTag: "AI Student @ Renessans University"
    },

    // Skills Section
    skills: {
      badge: "TECH STACK",
      heading: "Technologies I Know & Master",
      subheading: "Only verified technologies I actively code with and implement in real projects.",
      categories: {
        all: "All Tech",
        frontend: "Frontend Core",
        frameworks: "Frameworks & Libs",
        styling: "Styling & UI",
        tools: "Dev Tools"
      },
      levelLabel: "Proficiency Level"
    },

    // Projects Section
    projects: {
      badge: "PORTFOLIO",
      heading: "Featured Engineering Projects",
      subheading: "Explore real-world applications and interactive concept demonstrations.",
      filterAll: "All Projects",
      filterReal: "Verified Real Projects",
      filterDemo: "Interactive Concepts",
      viewCode: "View GitHub Repo",
      liveDemo: "Live Preview / Demo",
      verifiedBadge: "Verified Production Project",
      conceptBadge: "Interactive Concept Demo",
      modalDetailsTitle: "Project Architecture & Key Highlights",
      modalClose: "Close Preview"
    },

    // Experience & Education
    experience: {
      badge: "CAREER PATH",
      heading: "Experience & Education Timeline",
      subheading: "Academic background, specialized certifications, and practical programming history.",
      items: [
        {
          period: "2024 — Present",
          title: "Bachelor of Artificial Intelligence",
          organization: "Renessans University",
          description: "Studying algorithmic problem solving, machine learning fundamentals, data structures, and computer science principles.",
          tag: "Higher Education"
        },
        {
          period: "2024",
          title: "Certified Frontend Developer",
          organization: "IT Live Academy",
          description: "Graduated with honors from the rigorous frontend engineering program covering HTML5, CSS3, modern JavaScript, Tailwind CSS, and React.",
          tag: "Graduated & Certified"
        },
        {
          period: "2024 — 2026",
          title: "Frontend Engineering & Personal Projects",
          organization: "Independent Practice",
          description: "Engineered production-grade web platforms including the LogiFlow digital logistics platform, Bank Internal CRM system, interactive dashboards, and scalable UI components with Tailwind and React.",
          tag: "1 Year Active Coding"
        }
      ]
    },

    // Services Section
    services: {
      badge: "WHAT I DO",
      heading: "Services Aligned with My Actual Skills",
      subheading: "Professional web development solutions delivered with clean code and high performance.",
      items: [
        {
          icon: "layout",
          title: "Responsive Web Development",
          desc: "Crafting fully responsive, pixel-perfect websites that look flawless across mobile, tablet, laptop, and ultra-wide desktop screens."
        },
        {
          icon: "code",
          title: "Frontend Application Development",
          desc: "Building dynamic single-page web applications using React, React Router, modular components, and modern JavaScript."
        },
        {
          icon: "figma",
          title: "Figma to HTML / React Conversion",
          desc: "Translating complex Figma designs into semantic, accessible, and clean Tailwind CSS and React code with exact fidelity."
        },
        {
          icon: "zap",
          title: "Landing Page Development",
          desc: "Developing fast, high-converting promotional landing pages equipped with modern animations and seamless user flow."
        },
        {
          icon: "palette",
          title: "Website Redesign & Styling",
          desc: "Upgrading legacy or basic websites with modern dark/light aesthetics, Tailwind CSS utilities, and futuristic typography."
        },
        {
          icon: "gauge",
          title: "Performance & UI Polish",
          desc: "Optimizing DOM structure, eliminating layout shifts, and refining micro-interactions for smooth 60fps performance."
        }
      ]
    },

    // Contact Section
    contact: {
      badge: "GET IN TOUCH",
      heading: "Let's Build Something Exceptional Together",
      subheading: "Feel free to reach out for job opportunities, freelance projects, or professional collaboration.",
      directHeading: "Direct Contact Channels",
      directEmailLabel: "Official Email:",
      directTelegramLabel: "Telegram Username:",
      directLocationLabel: "Location & Status:",
      directLocationVal: "Tashkent, Uzbekistan (Open to Remote / On-site)",
      formTitle: "Send Me a Message",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. Alex Johnson",
      emailLabel: "Your Email",
      emailPlaceholder: "alex@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Job Opportunity / Project Inquiry",
      messageLabel: "Message",
      messagePlaceholder: "Hi Fazliddin, I would like to discuss...",
      submitBtn: "Send Message Now",
      submitting: "Preparing Message...",
      successTitle: "Ready to Dispatch!",
      successDesc: "Click below to immediately open your mail app or chat directly on Telegram with pre-filled content:",
      openMail: "Open Email Client",
      openTelegram: "Send via Telegram",
      copyMsg: "Copy Message to Clipboard",
      copied: "Message Copied!",
      errorFill: "Please fill out all fields before sending."
    },

    // Footer
    footer: {
      tagline: "Frontend Developer dedicated to creating clean, performant, and memorable web experiences.",
      navTitle: "Navigation",
      socialTitle: "Connect",
      rights: "All rights reserved. Designed & Engineered by Fazliddin Akramjonov.",
      backToTop: "Back to Top"
    }
  },

  uz: {
    // Navigatsiya
    nav: {
      about: "Haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      experience: "Tajriba",
      services: "Xizmatlar",
      contact: "Bog'lanish",
      talk: "Bog'lanish"
    },

    // Hero Bo'limi
    hero: {
      status: "Ish va loyihalar uchun ochiqman",
      greeting: "SALOM, MEN",
      name: "FAZLIDDIN AKRAMJONOV",
      titlePrefix: "ISHTIYOQ MAND",
      typingRoles: [
        "FRONTEND DEVELOPER",
        "TAILWIND CSS USTASI",
        "REACT DASTURCHI",
        "UI/UX ISHLAB CHIQUVCHI"
      ],
      description: "G'oyalarni zamonaviy, moslashuvchan va interaktiv raqamli tajribalarga aylantiraman. Toza arxitektura, tezkor veb-ilovalar va benuqson foydalanuvchi interfeyslarini yaratishga sodiqman.",
      viewWork: "Loyihalarimni ko'rish",
      contactBtn: "Men bilan bog'laning",
      stats: {
        experience: "1+ Yil",
        expLabel: "Faol Dasturlash",
        techCount: "100%",
        techLabel: "Haqiqiy Bilimlar",
        projectsCount: "Sifatli",
        projectsLabel: "Ishonchli Natija"
      }
    },

    // Haqimda
    about: {
      badge: "MEN HAQIMDA",
      heading: "Kod va Qiziqish Bilan Qulay Veb-Tajribalar Yarataman",
      journeyTitle: "Dasturlashdagi Yo'lim",
      journeyDesc: "Dasturlash sohasidagi faoliyatimni IT Live Academy o'quv markazida zamonaviy Frontend yo'nalishini chuqur o'rganishdan boshladim. Shu bilan birga, hozirda Renessans Universitetida Sun'iy Intellekt (AI) yo'nalishi bo'yicha tahsil olyapman. O'tgan 1 yil davomida zamonaviy veb-standartlarni, React yordamida dinamik interfeyslarni va Tailwind CSS bilan moslashuvchan dizaynlarni yaratishga bor diqqatimni qaratdim.",
      philosophyTitle: "Dasturlashdagi Falsafam",
      philosophyDesc: "Toza kod nafaqat o'qilishi oson, balki kengaytiriladigan, barqaror va foydalanuvchiga zavq ulashadigan bo'lishi lozim. Men birinchi navbatda mobil moslashuvchanlik (mobile-first), qulaylik va keraksiz og'irliksiz ravon animatsiyalarga ishonaman.",
      strengthsTitle: "Asosiy Kuchli Tomonlarim",
      strengths: [
        "Tailwind CSS va Zamonaviy Moslashuvchan Arxitektura (90%)",
        "Semantik HTML5 va Ilg'or CSS3 Animatsiyalari (88%)",
        "Asosiy JavaScript (ES6+), DOM boshqaruvi va asinxron mantiq (75%)",
        "React Komponentlar Arxitekturasi va React Router (60%)",
        "Git/GitHub versiyalar nazorati va Figma makyetlarini kodga aylantirish"
      ],
      goalsTitle: "Maqsadlarim",
      goalsDesc: "Katta va istiqbolli dasturchilar jamoasiga qo'shilib, keng ko'lamli loyihalar yaratish hamda zamonaviy frontend va sun'iy intellekt xizmatlarini uyg'unlashtirish.",
      downloadCv: "Rasmiy Rezyumeni Yuklab Olish (PDF)",
      academicTag: "Renessans Universiteti AI Talabasi"
    },

    // Ko'nikmalar
    skills: {
      badge: "TEXNOLOGIYALAR",
      heading: "Men Biladigan va Ishlatadigan Vositalar",
      subheading: "Faqat amalda tasdiqlangan va loyihalarda qo'llanilgan haqiqiy texnologiyalar.",
      categories: {
        all: "Barchasi",
        frontend: "Frontend Asoslari",
        frameworks: "Freymvorklar",
        styling: "Styling & UI",
        tools: "Asboblar"
      },
      levelLabel: "Bilim Darajasi"
    },

    // Loyihalar
    projects: {
      badge: "PORTFOLIO",
      heading: "Saralangan Loyihalar Showcase",
      subheading: "Haqiqiy loyiham va interaktiv konseptual namoyishlar bilan tanishing.",
      filterAll: "Barchasi",
      filterReal: "Haqiqiy Loyihalar",
      filterDemo: "Interaktiv Konseptlar",
      viewCode: "GitHub Repositoriya",
      liveDemo: "Jonli Ko'rish (Demo)",
      verifiedBadge: "Haqiqiy Ishlab Chiqilgan Loyiha",
      conceptBadge: "Interaktiv Konsept Demo",
      modalDetailsTitle: "Loyiha Arxitekturasi va Muhim Xususiyatlari",
      modalClose: "Yopish"
    },

    // Tajriba va Ta'lim
    experience: {
      badge: "KARYERA VA TA'LIM",
      heading: "Ta'lim va Tajriba Xronologiyasi",
      subheading: "Oliy ta'lim, professional sertifikatlar va amaliy dasturlash tarixi.",
      items: [
        {
          period: "2024 — Hozirgacha",
          title: "Sun'iy Intellekt (AI) Yo'nalishi Talabasi",
          organization: "Renessans Universiteti",
          description: "Algoritmlar, sun'iy intellekt asoslari, ma'lumotlar tuzilmasi va kompyuter fanlari bo'yicha fundamental bilimlar.",
          tag: "Oliy Ta'lim"
        },
        {
          period: "2024",
          title: "Sertifikatlangan Frontend Dasturchi",
          organization: "IT Live Academy",
          description: "HTML5, CSS3, JavaScript, Tailwind CSS va React texnologiyalarini o'z ichiga olgan amaliy Frontend kursini muvaffaqiyatli tamomlagan.",
          tag: "Sertifikat Egasi"
        },
        {
          period: "2024 — 2026",
          title: "Frontend Dasturlash va Shaxsiy Loyihalar",
          organization: "Mustaqil Amaliyot",
          description: "LogiFlow korxona logistika platformasi, Bank Internal CRM tizimi, interaktiv boshqaruv panellari va moslashuvchan veb-sahifalarni mustaqil ishlab chiqish tajribasi.",
          tag: "1 Yillik Faol Tajriba"
        }
      ]
    },

    // Xizmatlar
    services: {
      badge: "XIZMATLAR",
      heading: "Mening Bilimlarimga Mos Xizmatlar",
      subheading: "Toza kod, tezkor yuklanish va zamonaviy dizayn asosida taqdim etiladigan yechimlar.",
      items: [
        {
          icon: "layout",
          title: "Moslashuvchan Veb-Saytlar",
          desc: "Har qanday qurilmada (telefon, planshet, noutbuk, katta monitorlar) mukammal ko'rinuvchi zamonaviy veb-sahifalar."
        },
        {
          icon: "code",
          title: "Frontend Ilovalar Ishlab Chiqish",
          desc: "React, React Router va zamonaviy JavaScript yordamida tezkor, qulay va interaktiv bir sahifali ilovalar (SPA) yaratish."
        },
        {
          icon: "figma",
          title: "Figma Makyetini Kodga O'girish",
          desc: "Figma dizaynlarini Tailwind CSS va React komponentlariga 100% aniqlik (pixel-perfect) bilan sifatli ko'chirish."
        },
        {
          icon: "zap",
          title: "Landing Page Tayyorlash",
          desc: "Mijozlarni jalb qiluvchi, zamonaviy animatsiyalar va qulay CTA tugmalariga ega tezkor landing sahifalar."
        },
        {
          icon: "palette",
          title: "Sayt Dizaynini Yangilash (Redesign)",
          desc: "Eskirgan yoki oddiy saytlarni zamonaviy qorong'i/yorug' estetika va Tailwind CSS vositalari bilan yangilash."
        },
        {
          icon: "gauge",
          title: "Tezlik va Interfeysni Optimallashtirish",
          desc: "DOM yuklanishini yengillashtirish, toza kod va silliq 60fps animatsiyalar bilan sayt sifatini oshirish."
        }
      ]
    },

    // Aloqa
    contact: {
      badge: "ALOQA",
      heading: "Birgalikda Ajoyib Loyihalar Yarataylik",
      subheading: "Ish takliflari, frilans buyurtmalari yoki hamkorlik uchun istalgan vaqtda bog'lanishingiz mumkin.",
      directHeading: "To'g'ridan-to'g'ri Aloqa Yo'llari",
      directEmailLabel: "Rasmiy Pochta:",
      directTelegramLabel: "Telegram Manzilim:",
      directLocationLabel: "Manzil va Holat:",
      directLocationVal: "Toshkent, O'zbekiston (Masofaviy va Ofisga ochiq)",
      formTitle: "Xabar Yuborish",
      nameLabel: "Ismingiz",
      namePlaceholder: "Masalan: Azamat",
      emailLabel: "Pochtanggiz (Email)",
      emailPlaceholder: "misol@gmail.com",
      subjectLabel: "Mavzu",
      subjectPlaceholder: "Ish taklifi / Loyiha buyurtmasi",
      messageLabel: "Xabaringiz",
      messagePlaceholder: "Salom Fazliddin, loyihani muhokama qilmoqchi edim...",
      submitBtn: "Xabarni Yuborish",
      submitting: "Xabar tayyorlanmoqda...",
      successTitle: "Yuborishga Tayyor!",
      successDesc: "Quyidagi tugmalar orqali xabarni darhol pochta orqali yoki Telegramga bitta bosish bilan yuboring:",
      openMail: "Pochta Ilovasida Ochish",
      openTelegram: "Telegramda Yuborish",
      copyMsg: "Xabarni Nusxalash",
      copied: "Nusxalandi!",
      errorFill: "Iltimos, barcha maydonlarni to'ldiring."
    },

    // Footer
    footer: {
      tagline: "Toza kod, yuqori mahsuldorlik va unutilmas veb-tajribalar yaratuvchi Frontend Dasturchi.",
      navTitle: "Navigatsiya",
      socialTitle: "Ijtimoiy Tarmoqlar",
      rights: "Barcha huquqlar himoyalangan. Fazliddin Akramjonov tomonidan ishlab chiqilgan.",
      backToTop: "Tepaga Qaytish"
    }
  }
};
