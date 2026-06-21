
// ---- theme ----
const html     = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const iconMoon = document.getElementById('iconMoon');
const iconSun  = document.getElementById('iconSun');
const LABELS   = { light: 'Ativar tema escuro', dark: 'Ativar tema claro' };

function applyTheme(theme) {
  if (theme === 'dark') {
    html.classList.add('dark');
    iconMoon.classList.add('hidden');
    iconSun.classList.remove('hidden');
  } else {
    html.classList.remove('dark');
    iconMoon.classList.remove('hidden');
    iconSun.classList.add('hidden');
  }
  html.setAttribute('data-theme', theme);
  themeBtn.setAttribute('aria-label', LABELS[theme]);
}

const stored    = localStorage.getItem('theme');
const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
applyTheme(stored || preferred);

themeBtn.addEventListener('click', () => {
  const next = html.classList.contains('dark') ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

// ---- mobile nav ----
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
navToggle.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('hidden');
  navToggle.setAttribute('aria-expanded', String(!open));
});
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileNav.classList.add('hidden');
  navToggle.setAttribute('aria-expanded', 'false');
}));

// ---- scroll reveal ----
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

// ---- scroll hint ----
const scrollHint = document.getElementById('scrollHint');
if (scrollHint) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      scrollHint.style.opacity = '0';
      scrollHint.style.transition = 'opacity 0.3s ease';
    }
  }, { passive: true });
}

// ---- page transitions ----
if (!reduced) {
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
    a.addEventListener('click', e => {
      e.preventDefault();
      document.body.style.transition = 'opacity 0.2s ease';
      document.body.style.opacity = '0';
      setTimeout(() => { window.location.href = href; }, 200);
    });
  });
}

// ---- contact form ----
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome  = form.nome.value.trim();
    const email = form.email.value.trim();
    const msg   = form.msg.value.trim();
    const assunto = encodeURIComponent(`Contato via portfólio — ${nome}`);
    const corpo   = encodeURIComponent(`De: ${nome}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:dvitoriaaraujo@outlook.com?subject=${assunto}&body=${corpo}`;
  });
}
