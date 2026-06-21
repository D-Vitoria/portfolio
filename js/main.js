// ---- typewriter (loop com cores alternadas) ----
(function () {
  const mainEl = document.getElementById('typedMain');
  const emEl   = document.getElementById('typedEm');
  const cursor = document.querySelector('.type-cursor');

  if (!mainEl || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (mainEl) { mainEl.textContent = 'Diana Vitória '; mainEl.style.color = '#C1583A'; }
    if (emEl)   { emEl.textContent   = 'de Araújo';      emEl.style.color   = ''; }
    if (cursor)   cursor.style.display = 'none';
    return;
  }

  const mainText = 'Diana Vitória ';
  const emText   = 'de Araújo';
  const fullLen  = mainText.length + emText.length;

  // Pares de cores que alternam a cada loop
  const colorPairs = [
    { main: '#C1583A', em: '' },  // clay + cor do tema
    { main: '',        em: '#C1583A' },  // cor do tema + clay
  ];

  const SPEED_TYPE  = 70;
  const SPEED_ERASE = 32;
  const PAUSE_END   = 1400;
  const PAUSE_START = 420;

  let phase = 'type', i = 0, loop = 0;

  function applyColors() {
    const c = colorPairs[loop % colorPairs.length];
    mainEl.style.color = c.main;
    emEl.style.color   = c.em;
  }

  function render() {
    mainEl.textContent = mainText.slice(0, Math.min(i, mainText.length));
    emEl.textContent   = i > mainText.length ? emText.slice(0, i - mainText.length) : '';
  }

  function tick() {
    if (phase === 'type') {
      i++;
      render();
      if (i >= fullLen) { phase = 'pause-end'; setTimeout(tick, PAUSE_END); }
      else               setTimeout(tick, SPEED_TYPE);
    } else if (phase === 'pause-end') {
      phase = 'erase';
      tick();
    } else if (phase === 'erase') {
      i--;
      render();
      if (i <= 0) { phase = 'pause-start'; setTimeout(tick, PAUSE_START); }
      else         setTimeout(tick, SPEED_ERASE);
    } else if (phase === 'pause-start') {
      loop++;
      applyColors();
      phase = 'type';
      tick();
    }
  }

  applyColors();
  setTimeout(tick, PAUSE_START);
})();

// ---- theme ----
const html     = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const ICONS    = { light: '🌙', dark: '☀️' };
const LABELS   = { light: 'Ativar tema escuro', dark: 'Ativar tema claro' };

function applyTheme(theme) {
  if (theme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  html.setAttribute('data-theme', theme);
  themeBtn.textContent = ICONS[theme];
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

// ---- contact form ----
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome  = form.nome.value.trim();
  const email = form.email.value.trim();
  const msg   = form.msg.value.trim();
  const assunto = encodeURIComponent(`Contato via portfólio — ${nome}`);
  const corpo   = encodeURIComponent(`De: ${nome}\nEmail: ${email}\n\n${msg}`);
  window.location.href = `mailto:dvitoriaaraujo@outlook.com?subject=${assunto}&body=${corpo}`;
});
