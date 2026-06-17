/**
 * Página: Servicios
 * (Spec §6.2)
 */

import { servicios, generarEnlaceWhatsApp } from '../data/index.js';

export function renderServicios() {
  const serviciosHtml = servicios
    .map(s => {
      // Generar iniciales del servicio para el logo estético
      const initials = s.nombre
        .split(' ')
        .map(w => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

      // Enlace personalizado por servicio para la siguiente fase de WhatsApp
      const waLink = generarEnlaceWhatsApp(`Hola, quiero agendar una cita para el servicio de: "${s.nombre}".`);

      return `
        <article class="card service-card">
          <div class="service-card__media">
            <!-- Marcador gráfico de color en degradé premium -->
            <div class="team-card__avatar-placeholder" style="background: rgba(255,255,255,0.2); border: 2px solid #ffffff; font-size: 2rem;">
              ${initials}
            </div>
          </div>
          <div class="service-card__body">
            <h3 class="service-card__title">${s.nombre}</h3>
            <p class="service-card__description">${s.descripcion}</p>
            <div class="service-card__footer">
              <a 
                href="${waLink}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn--primary btn--sm" 
                style="width: 100%; display: inline-flex; justify-content: center;"
              >
                Agendar este servicio
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  return `
    <main class="page-servicios animate-fade-in">
      <section class="section">
        <!-- Encabezado de la página -->
        <div class="container section-header">
          <h1>Nuestros Servicios y Tratamientos</h1>
          <p>
            Ofrecemos soluciones odontológicas personalizadas bajo estrictos estándares clínicos y con tecnología de última generación.
          </p>
        </div>
        
        <!-- Grid de los 9 servicios -->
        <div class="container">
          <div class="services-full-grid">
            ${serviciosHtml}
          </div>
        </div>
      </section>
    </main>
  `;
}
