/**
 * Componente: Header / Navbar
 * (Spec §5, §4.5)
 *
 * Ofrece un header sticky con navegación adaptable a móvil mediante menú hamburguesa.
 */

export function renderHeader() {
  return `
    <header class="header">
      <div class="container header__container">
        <a href="#/" class="header__logo" aria-label="NovoDentist Inicio">
          <img class="header__logo-img" src="/images/logo.jpg" alt="NovoDentist" />
        </a>

        <button class="header__toggle" id="header-toggle" aria-expanded="false" aria-label="Abrir menú de navegación">
          <span class="header__toggle-bar"></span>
          <span class="header__toggle-bar"></span>
          <span class="header__toggle-bar"></span>
        </button>

        <nav class="header__nav" id="header-nav">
          <ul class="header__nav-list">
            <li><a href="#/" class="header__nav-link" data-route="home">Inicio</a></li>
            <li><a href="#/servicios" class="header__nav-link" data-route="servicios">Servicios</a></li>
            <li><a href="#/equipo" class="header__nav-link" data-route="equipo">Equipo</a></li>
            <li><a href="#/promociones" class="header__nav-link" data-route="promociones">Promociones</a></li>
            <li><a href="#/galeria" class="header__nav-link" data-route="galeria">Galería</a></li>
            <li><a href="#/blog" class="header__nav-link" data-route="blog">Blog</a></li>
            <li><a href="#/faq" class="header__nav-link" data-route="faq">FAQ</a></li>
            <li><a href="#/contacto" class="btn btn--primary btn--sm header__cta-btn">Agendar Cita</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

export function setupHeaderBehavior() {
  const toggle = document.getElementById('header-toggle');
  const nav = document.getElementById('header-nav');
  const links = document.querySelectorAll('.header__nav-link, .header__cta-btn');

  if (!toggle || !nav) return;

  // Toggle móvil
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('header__nav--open');
    toggle.classList.toggle('header__toggle--active');
  });

  // Cerrar menú al hacer click en un enlace
  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('header__nav--open');
      toggle.classList.remove('header__toggle--active');
    });
  });

  // Cerrar menú al hacer click afuera
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('header__nav--open') && !nav.contains(e.target) && e.target !== toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('header__nav--open');
      toggle.classList.remove('header__toggle--active');
    }
  });

  // Comportamiento Sticky con scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('header--sticky');
    } else {
      header.classList.remove('header--sticky');
    }
  });
}

/**
 * Resalta el enlace activo en el header basándose en la ruta actual.
 * @param {string} route 
 */
export function updateActiveLink(route) {
  const links = document.querySelectorAll('.header__nav-link');
  links.forEach(link => {
    const dataRoute = link.getAttribute('data-route');
    if (dataRoute === route) {
      link.classList.add('header__nav-link--active');
    } else {
      link.classList.remove('header__nav-link--active');
    }
  });
}
