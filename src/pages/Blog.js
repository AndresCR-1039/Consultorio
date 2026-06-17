/**
 * Página: Blog / Consejos
 * (Spec §6.6)
 *
 * Muestra el listado de artículos y maneja la visualización de detalle mediante un modal interactivo.
 */

import { blog } from '../data/index.js';

export function renderBlog() {
  const articulosHtml = blog
    .map(article => `
      <article class="card blog-card">
        <div class="blog-card__media-placeholder" style="background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary-light));">
          ✦ BLOG ✦
        </div>
        <div class="card__body">
          <time class="card__subtitle" datetime="${article.fecha}">
            ${new Date(article.fecha).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
          <h3 class="card__title" style="margin-top: var(--space-xs);">${article.titulo}</h3>
          <p class="card__text">${article.resumen}</p>
          <button 
            type="button" 
            class="btn btn--secondary btn--sm blog-card__btn" 
            data-blog-id="${article.id}"
            style="width: 100%; justify-content: center;"
          >
            Leer artículo completo
          </button>
        </div>
      </article>
    `)
    .join('');

  return `
    <main class="page-blog animate-fade-in">
      <section class="section">
        <!-- Encabezado -->
        <div class="container section-header">
          <h1>Blog & Consejos de Salud Oral</h1>
          <p>
            Encuentra información útil, recomendaciones y mitos desmentidos de la mano de nuestros profesionales de NovoDentist.
          </p>
        </div>

        <!-- Listado de Artículos -->
        <div class="container">
          <div class="blog-grid">
            ${articulosHtml}
          </div>
        </div>
      </section>

      <!-- Modal de Lectura de Artículos (Spec §6.6) -->
      <div id="blog-modal" class="blog-modal" aria-hidden="true" role="dialog" aria-labelledby="modal-title">
        <div class="blog-modal__overlay" id="blog-modal-overlay"></div>
        <div class="blog-modal__content">
          <button type="button" class="blog-modal__close" id="blog-modal-close" aria-label="Cerrar artículo">&times;</button>
          <div class="blog-modal__body" id="blog-modal-body">
            <!-- El contenido se inyecta dinámicamente -->
          </div>
        </div>
      </div>
    </main>
  `;
}

/**
 * Agrega interactividad a la página de blog para abrir/cerrar el modal.
 */
export function setupBlogBehavior() {
  const modal = document.getElementById('blog-modal');
  const overlay = document.getElementById('blog-modal-overlay');
  const closeBtn = document.getElementById('blog-modal-close');
  const body = document.getElementById('blog-modal-body');
  const readButtons = document.querySelectorAll('[data-blog-id]');

  if (!modal || !closeBtn || !body) return;

  // Función para cerrar el modal
  const closeModal = () => {
    modal.classList.remove('blog-modal--open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restaurar scroll del body
    body.innerHTML = '';
  };

  // Función para abrir el modal con el contenido correcto
  const openModal = (articleId) => {
    const article = blog.find(a => a.id === articleId);
    if (!article) return;

    // Convertir saltos de línea del contenido en párrafos HTML
    const paragraphsHtml = article.contenido
      .split('\n')
      .map(p => p.trim())
      .filter(p => p.length > 0)
      .map(p => `<p>${p}</p>`)
      .join('');

    body.innerHTML = `
      <div class="blog-modal__header">
        <span class="blog-modal__tag">✦ Salud Oral</span>
        <time class="blog-modal__date">
          Publicado el ${new Date(article.fecha).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
      </div>
      <h2 class="blog-modal__title" id="modal-title">${article.titulo}</h2>
      <div class="blog-modal__divider"></div>
      <div class="blog-modal__text">
        ${paragraphsHtml}
      </div>
      <div class="blog-modal__footer" style="margin-top: var(--space-2xl); text-align: center;">
        <button type="button" class="btn btn--primary" id="blog-modal-cta">Cerrar Artículo</button>
      </div>
    `;

    modal.classList.add('blog-modal--open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Evitar scroll de fondo

    // Registrar cierre del botón interno
    const innerCta = document.getElementById('blog-modal-cta');
    if (innerCta) {
      innerCta.addEventListener('click', closeModal);
    }
  };

  // Asignar listeners a los botones de lectura
  readButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const articleId = btn.getAttribute('data-blog-id');
      openModal(articleId);
    });
  });

  // Cerrar desde la cruz del header del modal
  closeBtn.addEventListener('click', closeModal);

  // Cerrar al hacer clic en el overlay gris
  overlay.addEventListener('click', closeModal);

  // Cerrar al presionar la tecla Escape
  const escHandler = (e) => {
    if (e.key === 'Escape' && modal.classList.contains('blog-modal--open')) {
      closeModal();
    }
  };
  document.addEventListener('keydown', escHandler);

  // Guardar listener de escape en el objeto window para poder limpiarlo en futuras cargas de página si es necesario
  window._blogEscHandler = escHandler;
}
