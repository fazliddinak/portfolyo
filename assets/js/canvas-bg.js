/**
 * Interactive Cyber-Particle Mesh Canvas Background
 * Inspired by modern Awwwards developer portfolios & CodePen pvyXbNa
 */
(function() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };
  let animationFrameId;

  // Check prefers-reduced-motion
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isReducedMotion = mediaQuery.matches;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.color = Math.random() > 0.4 ? 'rgba(56, 189, 248, ' : 'rgba(168, 85, 247, ';
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      if (isReducedMotion) return;

      this.x += this.vx;
      this.y += this.vy;

      // Wrap around edges
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = (dx / distance) * force * 2;
          const directionY = (dy / distance) * force * 2;
          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color === 'rgba(56, 189, 248, ' ? '#00f0ff' : '#a855f7';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(Math.floor((width * height) / 16000), 75);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function connectLines() {
    const maxDistance = 110;
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const opacity = (1 - dist / maxDistance) * 0.18;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    connectLines();

    animationFrameId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resize();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  mediaQuery.addEventListener('change', (e) => {
    isReducedMotion = e.matches;
  });

  resize();
  animate();
})();
