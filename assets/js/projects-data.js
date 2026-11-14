/**
 * Structured Projects Data
 * Strictly compliant with interview rules:
 * - Bank Internal CRM: Real verified project (GitHub: https://github.com/fazliddinak/bank)
 * - LogiFlow Logistics Platform: Real verified project (GitHub: https://github.com/fazliddinak/logist)
 * - Additional projects: Clearly labeled as "Interactive Concept Demo"
 */
const projectsData = [
  {
    id: "logist",
    type: "real",
    category: "tailwind",
    title: {
      en: "LogiFlow — Enterprise Digital Logistics & Freight Platform",
      uz: "LogiFlow — Korxona Yuk Tashish & Logistika Tizimi"
    },
    shortDesc: {
      en: "Production-ready digital freight logistics web platform featuring live GPS route simulation, weighted smart freight matching (up to 98%), multi-role portals (Factory, Carrier, Admin), carrier bidding/negotiation, and 30+ enterprise capabilities.",
      uz: "Jonli GPS marshrut simulyatsiyasi, 98% gacha yuk moslashuvi (Smart Match), korxona/haydovchi/admin portallari, auksion & savdolashish tizimi va 30+ korporativ funksiyalarga ega to'liq logistika platformasi."
    },
    image: "assets/images/logist.svg",
    tags: ["HTML5", "Tailwind CSS", "JavaScript (ES6 Modules)", "Leaflet.js", "Chart.js", "REST Service Layer"],
    githubUrl: "https://github.com/fazliddinak/logist",
    demoUrl: "https://github.com/fazliddinak/logist",
    featured: true,
    badge: {
      en: "Verified Real Project",
      uz: "Haqiqiy Loyiha"
    },
    highlights: {
      en: [
        "Architected with modular ES6 modules and a complete LocalStorage REST Service Layer (mirroring real backend CRUD endpoints).",
        "Weighted Smart Matching Engine calculating 98%, 95%, 87% score badges across truck type, weight, price, and location.",
        "Simulated Live GPS Truck Tracking with animated Leaflet polyline movement, dynamic distance countdown, and real-time ETA updates.",
        "Carrier Bidding & Negotiation loop (price offers, factory accept/reject/counter-offer workflow, internal chat).",
        "Multi-role portal guards (Factory, Carrier, Admin), keyboard shortcuts (Ctrl+K, Ctrl+N), and 100% multilingual support (UZ, EN, RU)."
      ],
      uz: [
        "Modulli ES6 va LocalStorage asosida qurilgan to'liq REST servis qatlami (haqiqiy backend CRUD arxitekturasi).",
        "Yuk va transport mosligini 98%, 95%, 87% aniqlikda hisoblab beruvchi Smart Matching algoritmi.",
        "Leaflet.js xaritada jonli GPS yuk mashinasi harakati simulyatsiyasi, qolgan masofa va yetib borish vaqtini (ETA) hisoblash.",
        "Haydovchilar narx taklifi berishi (Bidding), zavod qabul qilishi/rad etishi yoki qarshi taklif berishi va ichki chat tizimi.",
        "Rolga asoslangan alohida portallar (Zavod, Tashuvchi, Admin), Ctrl+K tezkor qidiruv va to'liq 3 tilli (UZ, EN, RU) tizim."
      ]
    }
  },
  {
    id: "bank-crm",
    type: "real",
    category: "react",
    title: {
      en: "Bank Internal CRM — Credit Management System",
      uz: "Bank Internal CRM — Kredit Boshqaruv Tizimi"
    },
    shortDesc: {
      en: "Comprehensive internal banking CRM system designed for loan portfolio management, customer risk scoring, and interactive financial analytics.",
      uz: "Kredit portfelini boshqarish, mijozlar tahlili va interaktiv moliyaviy monitoring uchun ishlab chiqilgan bank ichki CRM tizimi."
    },
    image: "assets/images/bank-crm.svg",
    tags: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "TanStack Query", "Recharts"],
    githubUrl: "https://github.com/fazliddinak/bank",
    demoUrl: "https://github.com/fazliddinak/bank",
    featured: true,
    badge: {
      en: "Verified Real Project",
      uz: "Haqiqiy Loyiha"
    },
    highlights: {
      en: [
        "Real production-structured codebase built with React, Next.js architecture, and TypeScript.",
        "Interactive loan management tables and client risk assessment dashboard.",
        "Data visualization with Recharts for monthly loan disbursements and repayment tracking.",
        "Strict type-safety, modular UI components, and modern Tailwind CSS utility styling.",
        "Comprehensive database schema with Prisma ORM and secure input validation with Zod."
      ],
      uz: [
        "React, Next.js arxitekturasi va TypeScript asosida qurilgan haqiqiy tizim kodi.",
        "Kredit arizalarini ko'rib chiqish va mijozlar kredit tarixini tahlil qilish paneli.",
        "Recharts kutubxonasi yordamida dinamik grafiklar va kredit statistikasi vizualizatsiyasi.",
        "Tailwind CSS bilan bezatilgan toza, zamonaviy va moslashuvchan dark UI dizayn.",
        "Prisma ORM va Zod ma'lumotlar tekshiruvi orqali xavfsiz va ishonchli arxitektura."
      ]
    }
  },
  {
    id: "nexus-pay",
    type: "demo",
    category: "react",
    title: {
      en: "Nexus FinTech Pay — Digital Asset Dashboard",
      uz: "Nexus FinTech Pay — Raqamli Moliyaviy Boshqaruv"
    },
    shortDesc: {
      en: "High-performance interactive financial dashboard showcasing virtual cards, live transaction filters, and rapid P2P transfer interface.",
      uz: "Virtual kartalar, jonli tranzaksiyalar filtri va tezkor P2P o'tkazmalar interfeysiga ega zamonaviy moliyaviy boshqaruv paneli."
    },
    image: "assets/images/fintech-demo.svg",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive UI"],
    githubUrl: "https://github.com/fazliddinak",
    demoUrl: "#demo-nexus",
    featured: true,
    badge: {
      en: "Interactive Concept Demo",
      uz: "Interaktiv Konsept Demo"
    },
    highlights: {
      en: [
        "Interactive virtual card visualizer with realistic 3D hover tilt simulation.",
        "Instant transaction category filtering and dynamic balance calculation.",
        "Dark-mode first glassmorphism UI styled strictly using Tailwind CSS.",
        "Accessible keyboard navigation and mobile-first responsive grid system."
      ],
      uz: [
        "Realistik 3D hover effektiga ega bo'lgan interaktiv virtual bank kartasi.",
        "Tranzaksiyalarni toifalar bo'yicha saralash va balansni real vaqtda hisoblash.",
        "Tailwind CSS bilan yaratilgan zamonaviy qorong'i glassmorphism interfeysi.",
        "Mobil qurilmalarga to'liq moslashgan qulay va sezgir boshqaruv."
      ]
    }
  },
  {
    id: "nova-agency",
    type: "demo",
    category: "tailwind",
    title: {
      en: "Nova Creative Studio — Digital Experience Landing",
      uz: "Nova Creative Studio — Raqamli Agentlik Landing Sahifasi"
    },
    shortDesc: {
      en: "Futuristic Awwwards-inspired agency landing page with fluid typography, kinetic text animations, and smooth scroll interactions.",
      uz: "Kinetik sarlavhalar, o'ziga xos neo-brutalist & glass elementlar va silliq animatsiyalarga ega zamonaviy ijodiy agentlik sahifasi."
    },
    image: "assets/images/agency-demo.svg",
    tags: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/fazliddinak",
    demoUrl: "#demo-nova",
    featured: true,
    badge: {
      en: "Interactive Concept Demo",
      uz: "Interaktiv Konsept Demo"
    },
    highlights: {
      en: [
        "Awwwards-level creative layout with subtle glowing borders and micro-interactions.",
        "Tailwind CSS custom grid layouts, responsive breakpoints, and custom typography.",
        "Optimized vector graphics and lightweight vanilla JavaScript animations for 60fps.",
        "High-converting call-to-action sections and interactive service inspection cards."
      ],
      uz: [
        "Nozik nurlanish va nozik mikro-harakatlarga ega yuqori sifatli kreativ dizayn.",
        "Tailwind CSS grid tizimi va maxsus shriftlar bilan yaratilgan mukammal tuzilma.",
        "Og'ir kutubxonalarsiz, sof va yengil JavaScript bilan ta'minlangan yuqori tezlik.",
        "Mijozlarni jalb qiluvchi interaktiv CTA tugmalari va xizmatlar kartochkalari."
      ]
    }
  }
];
