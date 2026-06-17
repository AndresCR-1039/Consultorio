/**
 * Página: Preguntas Frecuentes (FAQ)
 * (Spec §6.7, §6.8)
 *
 * Muestra el acordeón de preguntas frecuentes y el listado de convenios médicos ficticios de la clínica.
 */

import { faq } from '../data/index.js';

export function renderFaq() {
  // Generar HTML para el acordeón
  const faqHtml = faq
    .map(item => `
      <div class="faq-item">
        <button 
          type="button" 
          class="faq-toggle" 
          id="faq-btn-${item.id}"
          aria-controls="faq-content-${item.id}" 
          aria-expanded="false"
        >
          <span class="faq-toggle__text">${item.pregunta}</span>
          <span class="faq-toggle__icon" aria-hidden="true">+</span>
        </button>
        <div 
          class="faq-content" 
          id="faq-content-${item.id}" 
          aria-labelledby="faq-btn-${item.id}" 
          aria-hidden="true"
        >
          <div class="faq-content__inner">
            <p>${item.respuesta}</p>
          </div>
        </div>
      </div>
    `)
    .join('');

  // Convenios Médicos Ficticios
  const convenios = [
    { nombre: 'SaludPlus Multiasistencia', tipo: 'Medicina Prepagada' },
    { nombre: 'Bienestar Total EPS', tipo: 'Plan de Beneficios en Salud' },
    { nombre: 'OdontoSeguro Oro', tipo: 'Póliza Dental Colectiva' },
    { nombre: 'Seguro Clínico Futuro', tipo: 'Seguro Médico de Accidentes' }
  ];

  const conveniosHtml = convenios
    .map(c => `
      <div class="convenio-card">
        <div class="convenio-card__logo-symbol">✦</div>
        <h3 class="convenio-card__title">${c.nombre}</h3>
        <span class="convenio-card__type">${c.tipo}</span>
      </div>
    `)
    .join('');

  return `
    <main class="page-faq animate-fade-in">
      <!-- Sección FAQ -->
      <section class="section">
        <div class="container section-header">
          <h1>Preguntas Frecuentes</h1>
          <p>
            Encuentra respuestas rápidas a las consultas más comunes sobre nuestros servicios, políticas y métodos de pago.
          </p>
        </div>

        <div class="container" style="max-width: var(--max-width-sm);">
          <div class="faq-accordion">
            ${faqHtml}
          </div>
        </div>
      </section>

      <!-- Sección Convenios / Seguros Ficticios (Spec §6.8) -->
      <section class="section section--alt">
        <div class="container section-header" style="margin-bottom: var(--space-2xl);">
          <h2>Convenios & Seguros Colectivos</h2>
          <p>
            Recibe atención dental preferencial a través de nuestras alianzas vigentes de ejemplo.
          </p>
        </div>

        <div class="container" style="max-width: var(--max-width-md);">
          <div class="convenios-grid">
            ${conveniosHtml}
          </div>

          <!-- Nota legal obligatoria -->
          <div class="convenios-disclaimer-box">
            <p>
              * <strong>Nota aclaratoria:</strong> Las aseguradoras y convenios listados anteriormente son simulados y corresponden a marcas ficticias generadas exclusivamente para la presentación y validación estética de este prototipo de diseño. No guardan relación alguna con entidades aseguradoras colombianas reales.
            </p>
          </div>
        </div>
      </section>
    </main>
  `;
}

/**
 * Agrega interactividad de acordeón a las preguntas frecuentes.
 */
export function setupFaqBehavior() {
  const toggles = document.querySelectorAll('.faq-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const panel = document.getElementById(toggle.getAttribute('aria-controls'));
      if (!panel) return;

      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

      // Cambiar estado del botón clickeado
      toggle.setAttribute('aria-expanded', !isExpanded);
      toggle.classList.toggle('faq-toggle--active');
      
      // Cambiar estado del panel
      panel.setAttribute('aria-hidden', isExpanded);
      panel.classList.toggle('faq-content--open');

      const icon = toggle.querySelector('.faq-toggle__icon');
      if (icon) {
        icon.textContent = isExpanded ? '+' : '−';
      }

      // Animación suave de altura mediante JS calculando scrollHeight
      if (!isExpanded) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = '0px';
      }
    });
  });
}
