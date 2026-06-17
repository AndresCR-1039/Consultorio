/**
 * Página: Promociones
 * (Spec §6.4)
 */

import { promociones, generarEnlaceWhatsApp } from '../data/index.js';

export function renderPromociones() {
  const promocionesHtml = promociones
    .map((p, index) => {
      const isFeatured = index === 1; // La segunda es la más popular (Valoración gratis)
      const waLink = generarEnlaceWhatsApp(`Hola, quiero agendar una cita para la promoción: "${p.titulo}".`);
      
      return `
        <article class="card promo-card ${isFeatured ? 'promo-card--featured' : ''}">
          <span class="promo-card__badge">PROMO VIGENTE</span>
          <div class="promo-card__media-placeholder" style="background: linear-gradient(135deg, var(--color-primary-light), var(--color-secondary));">
            ✦ % ✦
          </div>
          <div class="card__body">
            <h3 class="card__title">${p.titulo}</h3>
            <p class="card__subtitle" style="color: var(--color-secondary-dark); font-weight: var(--weight-bold); margin-bottom: var(--space-md);">
              ${p.vigencia}
            </p>
            <p class="card__text">${p.descripcion}</p>
            <a 
              href="${waLink}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn ${isFeatured ? 'btn--primary' : 'btn--secondary'} btn--sm" 
              style="width: 100%; justify-content: center;"
            >
              Agendar esta promoción
            </a>
          </div>
        </article>
      `;
    })
    .join('');

  return `
    <main class="page-promociones animate-fade-in">
      <section class="section">
        <div class="container section-header">
          <h1>Promociones Especiales</h1>
          <p>
            Aprovecha nuestros beneficios exclusivos y obtén tratamientos de primera calidad con atractivas condiciones de pago.
          </p>
        </div>

        <div class="container">
          <div class="promos-grid">
            ${promocionesHtml}
          </div>
        </div>
      </section>
    </main>
  `;
}
