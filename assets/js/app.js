/**
 * Main Application Engine
 * Fazliddin Akramjonov Portfolio
 */

let currentLang = localStorage.getItem('preferred_lang') || 'en';
let typingTimeoutId = null;
let currentProjectFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTypingEffect();
  initCustomCursor();
  initScrollProgress();
  renderSkills();
  initSkillsObserver();
  renderProjects();
  initProjectFilters();
  initContactForm();
  initMobileNav();
  initBackToTop();
  initModalListeners();
});

/* ==========================================================================
   1. LANGUAGE CONTROLLER (EN / UZ)
   ========================================================================== */
function initLanguage() {
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langPills = document.querySelectorAll('.lang-pill');

  function updatePillVisuals() {
    langPills.forEach(pill => {
      if (pill.dataset.lang === currentLang) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  window.setLanguage = function(lang) {
    if (lang !== 'en' && lang !== 'uz') return;
    currentLang = lang;
    localStorage.setItem('preferred_lang', lang);
    updatePillVisuals();
    applyTranslations();
    renderProjects();
    restartTypingEffect();
  };

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'uz' : 'en';
      window.setLanguage(nextLang);
    });
  }

  updatePillVisuals();
  applyTranslations();
}

function applyTranslations() {
  const dict = translations[currentLang];
  if (!dict) return;

  // General text interpolation
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keyPath = el.getAttribute('data-i18n');
    const value = getNestedTranslation(dict, keyPath);
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  // Placeholder interpolation
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const keyPath = el.getAttribute('data-i18n-placeholder');
    const value = getNestedTranslation(dict, keyPath);
    if (value !== undefined) {
      el.setAttribute('placeholder', value);
    }
  });

  // Update Experience Timeline HTML
  renderTimeline();
  // Update Services Cards HTML
  renderServices();
}

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/* ==========================================================================
   2. TYPING EFFECT
   ========================================================================== */
function initTypingEffect() {
  const typingTarget = document.getElementById('typing-text');
  if (!typingTarget) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const dict = translations[currentLang];
    const roles = dict.hero.typingRoles || ["FRONTEND DEVELOPER"];
    const currentRole = roles[roleIndex % roles.length];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typingTarget.textContent = currentRole.substring(0, charIndex);

    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex++;
      typingSpeed = 400; // Pause before typing next
    }

    typingTimeoutId = setTimeout(type, typingSpeed);
  }

  type();
}

function restartTypingEffect() {
  if (typingTimeoutId) clearTimeout(typingTimeoutId);
  initTypingEffect();
}

/* ==========================================================================
   3. CUSTOM DESKTOP CURSOR
   ========================================================================== */
function initCustomCursor() {
  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');
  if (!dot || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderRing);
  }
  renderRing();

  const interactiveElements = 'a, button, input, textarea, select, .project-card, .clickable';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveElements)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveElements)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* ==========================================================================
   4. SCROLL PROGRESS
   ========================================================================== */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    bar.style.width = `${progress}%`;
  }, { passive: true });
}

/* ==========================================================================
   5. SKILLS RENDERING & ANIMATION
   ========================================================================== */
const verifiedSkills = [
  {
    name: "Tailwind CSS",
    category: "styling",
    level: 90,
    icon: `<svg class="w-8 h-8 text-sky-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>`
  },
  {
    name: "CSS3",
    category: "styling",
    level: 88,
    icon: `<svg class="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.9 4.3H4.6l.4 4.5h13.9l-.4 4.5-4 1.3-4-1.3-.3-2.6H6.1l.5 5.5 5.4 1.8 5.4-1.8 1.1-11.9z"/></svg>`
  },
  {
    name: "HTML5",
    category: "frontend",
    level: 80,
    icon: `<svg class="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.9 4.3H4.6l.4 4.5h13.9l-.4 4.5-4 1.3-4-1.3-.3-2.6H6.1l.5 5.5 5.4 1.8 5.4-1.8 1.1-11.9z"/></svg>`
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    level: 75,
    icon: `<svg class="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-.828-.243-.243-.365-.546-.365-.909 0-.364.122-.668.365-.912.243-.243.608-.365 1.095-.365.486 0 .852.122 1.095.365.244.243.365.608.365 1.094h2.19c0-.973-.304-1.764-.913-2.372s-1.46-.913-2.555-.913c-1.094 0-1.947.304-2.555.913-.609.608-.913 1.4-.913 2.372 0 1.095.304 1.886.913 2.372.609.487 1.52.882 2.738 1.186 1.217.304 1.703.609 1.703 1.156 0 .426-.182.76-.547 1.004-.365.243-.852.365-1.46.365-.609 0-1.156-.152-1.642-.456-.487-.304-.76-.791-.822-1.46h-2.19c.061 1.277.486 2.22 1.277 2.828.791.609 1.916.913 3.377.913 1.46 0 2.585-.304 3.376-.913.791-.608 1.186-1.551 1.186-2.828zm-8.213-7.545h-2.19v6.57c0 .73-.182 1.277-.547 1.642-.365.365-.852.548-1.46.548-.487 0-.882-.122-1.186-.365-.305-.243-.456-.609-.456-1.095h-2.19c0 .973.304 1.764.913 2.372.608.608 1.46.913 2.555.913 1.095 0 1.977-.335 2.646-1.004.67-.669 1.004-1.673 1.004-3.012v-6.57z"/></svg>`
  },
  {
    name: "React & React Router",
    category: "frameworks",
    level: 60,
    icon: `<svg class="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5S4.5 16.142 4.5 12 7.858 4.5 12 4.5zm0 5.5a2 2 0 100 4 2 2 0 000-4z"/></svg>`
  },
  {
    name: "Git & GitHub",
    category: "tools",
    level: 80,
    icon: `<svg class="w-8 h-8 text-rose-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`
  },
  {
    name: "Figma (Design to Code)",
    category: "tools",
    level: 78,
    icon: `<svg class="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm0 0c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3zm0-6c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm0 0c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3zm-6 12c0 1.657 1.343 3 3 3s3-1.343 3-3v-3H6v3z"/></svg>`
  },
  {
    name: "VS Code",
    category: "tools",
    level: 85,
    icon: `<svg class="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .32 8.704L4.8 12 .32 15.296a1 1 0 0 0 .007 1.443l1.322 1.202c.38.345.952.37 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>`
  }
];

function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = verifiedSkills.map(skill => `
    <div class="glass-panel rounded-2xl p-6 transition-all duration-300 hover:border-sky-400 group relative overflow-hidden" data-skill-category="${skill.category}">
      <div class="flex items-center justify-between mb-4">
        <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 group-hover:scale-110 transition-transform duration-300">
          ${skill.icon}
        </div>
        <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
          ${skill.level}%
        </span>
      </div>
      <h3 class="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
        ${skill.name}
      </h3>
      <div class="mt-4 w-full bg-slate-800/80 rounded-full h-2 overflow-hidden">
        <div class="skill-bar-fill w-0" data-level="${skill.level}"></div>
      </div>
    </div>
  `).join('');
}

function initSkillsObserver() {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.skill-bar-fill').forEach(bar => {
          const targetLevel = bar.getAttribute('data-level');
          bar.style.width = `${targetLevel}%`;
        });
      }
    });
  }, { threshold: 0.2 });

  observer.observe(skillsSection);
}

/* ==========================================================================
   6. PROJECTS RENDERING & FILTERING
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-sky-500', 'text-slate-950'));
      btn.classList.add('active', 'bg-sky-500', 'text-slate-950');
      currentProjectFilter = btn.dataset.filter;
      renderProjects();
    });
  });
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const dict = translations[currentLang];
  
  const filtered = projectsData.filter(p => {
    if (currentProjectFilter === 'all') return true;
    if (currentProjectFilter === 'real') return p.type === 'real';
    if (currentProjectFilter === 'demo') return p.type === 'demo';
    return p.category === currentProjectFilter;
  });

  container.innerHTML = filtered.map(proj => {
    const isReal = proj.type === 'real';
    const badgeText = proj.badge[currentLang];
    const titleText = proj.title[currentLang];
    const descText = proj.shortDesc[currentLang];

    return `
      <div class="glass-panel project-card rounded-2xl overflow-hidden border border-slate-800/80 group flex flex-col justify-between">
        <div>
          <!-- Project Preview Window -->
          <div class="relative overflow-hidden aspect-[16/10] bg-slate-950">
            <img src="${proj.image}" alt="${titleText}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            
            <div class="absolute top-4 left-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                isReal 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                  : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
              }">
                <span class="w-2 h-2 rounded-full ${isReal ? 'bg-emerald-400 animate-pulse' : 'bg-purple-400'}"></span>
                ${badgeText}
              </span>
            </div>
          </div>

          <!-- Body -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
              ${titleText}
            </h3>
            <p class="mt-2.5 text-sm text-slate-400 leading-relaxed line-clamp-3">
              ${descText}
            </p>

            <!-- Tags -->
            <div class="mt-4 flex flex-wrap gap-2">
              ${proj.tags.map(tag => `
                <span class="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800">
                  ${tag}
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="p-6 pt-0 flex items-center gap-3">
          <button onclick="openProjectModal('${proj.id}')" class="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/60 hover:border-sky-400 transition-all flex items-center justify-center gap-2">
            <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            ${dict.projects.liveDemo}
          </button>

          <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-purple-400 transition-all flex items-center justify-center gap-1.5" title="${dict.projects.viewCode}">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   7. PROJECT DETAIL MODAL
   ========================================================================== */
window.openProjectModal = function(projectId) {
  const proj = projectsData.find(p => p.id === projectId);
  if (!proj) return;

  const dict = translations[currentLang];
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('project-modal-content');
  if (!modal || !modalBody) return;

  const isReal = proj.type === 'real';

  modalBody.innerHTML = `
    <div class="relative">
      <img src="${proj.image}" alt="${proj.title[currentLang]}" class="w-full rounded-xl border border-slate-800 shadow-2xl" />
      <div class="absolute top-4 left-4">
        <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${
          isReal 
            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
            : 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
        }">
          <span class="w-2.5 h-2.5 rounded-full ${isReal ? 'bg-emerald-400 animate-pulse' : 'bg-purple-400'}"></span>
          ${proj.badge[currentLang]}
        </span>
      </div>
    </div>

    <div class="mt-6">
      <h2 class="text-2xl font-extrabold text-slate-100 font-display">${proj.title[currentLang]}</h2>
      <p class="mt-2 text-sm text-slate-300 leading-relaxed">${proj.shortDesc[currentLang]}</p>

      <div class="mt-4 flex flex-wrap gap-2">
        ${proj.tags.map(t => `<span class="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-sky-300 border border-slate-700">${t}</span>`).join('')}
      </div>

      <div class="mt-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
        <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">${dict.projects.modalDetailsTitle}</h4>
        <ul class="space-y-2">
          ${proj.highlights[currentLang].map(h => `
            <li class="flex items-start gap-2.5 text-xs text-slate-300">
              <span class="text-sky-400 mt-0.5">✦</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="mt-6 flex flex-wrap items-center gap-4">
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-glow-primary px-6 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          ${dict.projects.viewCode}
        </a>

        ${isReal ? `
          <a href="https://github.com/fazliddinak/bank" target="_blank" rel="noopener noreferrer" class="btn-glow-secondary px-6 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-2">
            <span>Explore Codebase</span>
            <span>→</span>
          </a>
        ` : `
          <span class="text-xs text-purple-400 font-mono">
            ★ Interactive Concept Simulation
          </span>
        `}
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
};

function initModalListeners() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
      window.closeProjectModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeProjectModal();
    }
  });
}

/* ==========================================================================
   8. TIMELINE (EXPERIENCE & EDUCATION)
   ========================================================================== */
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  const items = translations[currentLang].experience.items;

  container.innerHTML = items.map((item, idx) => {
    const isEven = idx % 2 === 0;
    return `
      <div class="relative flex flex-col md:flex-row items-center mb-10 w-full ${isEven ? 'md:flex-row-reverse' : ''}">
        <!-- Node point -->
        <div class="absolute left-5 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-slate-950 border-2 border-sky-400 z-10 shadow-[0_0_12px_#38bdf8] flex items-center justify-center">
          <div class="w-2 h-2 rounded-full bg-sky-400"></div>
        </div>

        <!-- Content Card -->
        <div class="ml-14 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-10 text-left' : 'md:pr-10 md:text-right'}">
          <div class="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-sky-500/50 transition-all duration-300">
            <div class="flex items-center gap-2 mb-2 ${isEven ? 'justify-start' : 'md:justify-end justify-start'}">
              <span class="text-xs font-mono font-bold text-sky-400 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
                ${item.period}
              </span>
              <span class="text-xs font-mono text-purple-400 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                ${item.tag}
              </span>
            </div>
            <h3 class="text-lg font-bold text-slate-100 font-display">${item.title}</h3>
            <h4 class="text-sm font-semibold text-slate-300 mt-0.5">${item.organization}</h4>
            <p class="text-xs text-slate-400 mt-2.5 leading-relaxed">${item.description}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   9. SERVICES CARDS
   ========================================================================== */
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  const services = translations[currentLang].services.items;

  const serviceIcons = {
    layout: `<svg class="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    code: `<svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
    figma: `<svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    zap: `<svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    palette: `<svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M7 21a4 4 0 01-4-4 4 4 0 014-4c.78 0 1.5.22 2.12.6L12 9l6.5-6.5a2.12 2.12 0 013 3L15 12l4.4 2.88c.38.62.6 1.34.6 2.12a4 4 0 01-4 4 4 4 0 01-4-4c0-.78.22-1.5.6-2.12L9.5 12 7 21z"/></svg>`,
    gauge: `<svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`
  };

  container.innerHTML = services.map(s => `
    <div class="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition-all duration-300 group">
      <div class="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        ${serviceIcons[s.icon] || serviceIcons.layout}
      </div>
      <h3 class="text-base font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
        ${s.title}
      </h3>
      <p class="text-xs text-slate-400 mt-2 leading-relaxed">
        ${s.desc}
      </p>
    </div>
  `).join('');
}

/* ==========================================================================
   10. CONTACT FORM INTEGRATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const feedbackBox = document.getElementById('form-feedback');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    const dict = translations[currentLang].contact;

    if (!name || !email || !subject || !message) {
      alert(dict.errorFill);
      return;
    }

    const fullText = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;

    const mailtoUrl = `mailto:akramjonovfazliddin765@gmail.com?subject=${encodeURIComponent(`[Portfolio] ${subject}`)}&body=${encodeURIComponent(fullText)}`;
    const telegramUrl = `https://t.me/akramjonov_fazliddin?text=${encodeURIComponent(`[Portfolio Inquiry]\n${fullText}`)}`;

    if (feedbackBox) {
      feedbackBox.innerHTML = `
        <div class="p-6 rounded-2xl bg-slate-900/95 border border-sky-500/50 shadow-2xl animate-fade-in">
          <div class="flex items-center gap-3 text-sky-400 mb-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <h4 class="font-bold text-base text-slate-100 font-display">${dict.successTitle}</h4>
          </div>
          <p class="text-xs text-slate-300 mb-5 leading-relaxed">${dict.successDesc}</p>
          
          <div class="flex flex-wrap items-center gap-3">
            <a href="${mailtoUrl}" class="btn-glow-primary px-5 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              ${dict.openMail}
            </a>

            <a href="${telegramUrl}" target="_blank" rel="noopener noreferrer" class="btn-glow-secondary px-5 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-2 text-sky-400 border-sky-500/40">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.721-2.007 8.358-2.923 11.961-.387 1.524-.961 1.701-1.536 1.156l-4.14-3.056-1.996 1.923c-.221.221-.407.407-.834.407l.297-4.213 7.669-6.93c.334-.297-.073-.462-.518-.166l-9.479 5.968-4.086-1.277c-.889-.278-.907-.889.185-1.315l15.98-6.157c.74-.278 1.388.167 1.185 1.644z"/></svg>
              ${dict.openTelegram}
            </a>

            <button type="button" onclick="navigator.clipboard.writeText(\`${fullText.replace(/`/g, '\\`')}\`); this.textContent = '${dict.copied}'; setTimeout(() => this.textContent = '${dict.copyMsg}', 2000);" class="py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors">
              ${dict.copyMsg}
            </button>
          </div>
        </div>
      `;
    }
  });
}

/* ==========================================================================
   11. MOBILE NAVIGATION & DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.add('hidden');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  navLinks.forEach(link => link.addEventListener('click', closeDrawer));
}

/* ==========================================================================
   12. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
