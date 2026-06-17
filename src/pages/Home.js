/**
 * Página: Inicio (Home)
 * (Spec §6.1)
 */

import { servicios, promociones, testimonios, generarEnlaceWhatsApp } from '../data/index.js';

export function renderHome() {
  // Tomar los primeros 4 servicios para el resumen
  const serviciosDestacados = servicios.slice(0, 4);

  // Renderizar los servicios destacados en HTML
  const serviciosHtml = serviciosDestacados
    .map(s => {
      // Obtenemos las primeras letras del servicio para un icono marcador de posición elegante
      const initials = s.nombre
        .split(' ')
        .map(w => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

      return `
        <article class="card service-card">
          <div class="service-card__media">
            <!-- Icono decorativo dental o iniciales -->
            <div class="team-card__avatar-placeholder" style="background: rgba(255,255,255,0.2); border: 2px solid #ffffff; font-size: 1.5rem;">
              ${initials}
            </div>
          </div>
          <div class="service-card__body">
            <h3 class="service-card__title">${s.nombre}</h3>
            <p class="service-card__description">${s.descripcion}</p>
            <div class="service-card__footer">
              <a href="#/servicios" class="btn btn--secondary btn--sm" style="width: 100%;">Ver detalle</a>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  // Renderizar las promociones en HTML
  const promocionesHtml = promociones
    .map((p, index) => {
      const isFeatured = index === 1; // Hacer la segunda promo (Valoración inicial gratis) destacada por defecto
      const waLink = generarEnlaceWhatsApp(`Hola, quiero agendar una cita para la promoción: "${p.titulo}".`);
      
      return `
        <article class="card promo-card ${isFeatured ? 'promo-card--featured' : ''}">
          <span class="promo-card__badge">PROMO</span>
          <div class="promo-card__media-placeholder">
            ✦ % ✦
          </div>
          <div class="card__body">
            <h3 class="card__title">${p.titulo}</h3>
            <p class="card__subtitle">${p.vigencia}</p>
            <p class="card__text">${p.descripcion}</p>
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn ${isFeatured ? 'btn--primary' : 'btn--secondary'} btn--sm" style="width: 100%;">
              Agendar Promoción
            </a>
          </div>
        </article>
      `;
    })
    .join('');

  // Renderizar testimonios en HTML (incluye visualización de estrellas)
  const testimoniosHtml = testimonios
    .map(t => {
      const estrellas = '★'.repeat(t.valoracion) + '☆'.repeat(5 - t.valoracion);
      return `
        <div class="testimonial-card">
          <blockquote class="testimonial-card__quote">
            "${t.frase}"
          </blockquote>
          <div class="testimonial-card__footer">
            <span class="testimonial-card__name">${t.nombre}</span>
            <div class="testimonial-card__stars" aria-label="Calificación de ${t.valoracion} de 5 estrellas">
              ${estrellas}
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  // Enlace genérico para los CTAs generales
  const waCitaGenerica = generarEnlaceWhatsApp();

  return `
    <main class="page-home animate-fade-in">
      <!-- 1. Sección Hero -->
      <section class="hero">
        <div class="container hero__grid">
          <div class="hero__content">
            <span class="hero__badge">✦ ODONTOLOGÍA INTEGRAL Y ESTÉTICA</span>
            <h1 class="hero__title">Tu sonrisa merece el cuidado de expertos</h1>
            <p class="hero__subtitle">
              En NovoDentist combinamos tecnología odontológica de vanguardia con un trato cálido y humano para ofrecerte tratamientos seguros, indoloros y de alta calidad.
            </p>
            <div class="hero__actions">
              <a href="${waCitaGenerica}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--lg">
                Agendar Cita por WhatsApp
              </a>
              <a href="#/servicios" class="btn btn--secondary btn--lg">
                Ver Tratamientos
              </a>
            </div>
          </div>
          <div class="hero__image-wrapper">
            <img 
              src="/images/clinica-hero.png" 
              alt="Instalaciones modernas y acogedoras de NovoDentist" 
              class="hero__image"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <!-- 2. Sección Sobre Nosotros / Propuesta de Valor -->
      <section class="section" style="padding-top: 0; padding-bottom: var(--space-4xl);">
        <div class="container">
          <div class="about-box">
            <div class="about-box__content">
              <h2>¿Por qué elegir NovoDentist?</h2>
              <p>
                Nos enfocamos en brindar una experiencia clínica libre de estrés. Nos apasiona la prevención y el diseño de sonrisas naturales, garantizando la máxima bioseguridad, materiales certificados y atención de la mano de la Dra. Natalia Herrera y su equipo multidisciplinario.
              </p>
            </div>
            <div class="about-box__stats">
              <div class="about-box__stat">
                <span class="about-box__stat-num">12+</span>
                <span class="about-box__stat-label">Años de Trayectoria</span>
              </div>
              <div class="about-box__stat">
                <span class="about-box__stat-num">9</span>
                <span class="about-box__stat-label">Tratamientos</span>
              </div>
              <div class="about-box__stat">
                <span class="about-box__stat-num">100%</span>
                <span class="about-box__stat-label">Equipos Digitales</span>
              </div>
              <div class="about-box__stat">
                <span class="about-box__stat-num">4.9</span>
                <span class="about-box__stat-label">Valoración Pacientes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Sección Resumen de Servicios -->
      <section class="section section--alt">
        <div class="container">
          <div class="section-header">
            <h2>Nuestros Servicios Destacados</h2>
            <p>Tratamientos especializados para cuidar, restaurar y embellecer tu salud bucal.</p>
          </div>
          
          <div class="services-summary-grid">
            ${serviciosHtml}
          </div>

          <div class="view-all-container">
            <a href="#/servicios" class="btn btn--secondary">
              Ver todos los servicios →
            </a>
          </div>
        </div>
      </section>

      <!-- 4. Sección Promociones -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2>Beneficios y Promociones</h2>
            <p>Queremos que sonreír sea más fácil para ti. Descubre nuestras ofertas vigentes.</p>
          </div>

          <div class="promos-grid">
            ${promocionesHtml}
          </div>
        </div>
      </section>

      <!-- 5. Sección Testimonios -->
      <section class="section section--alt">
        <div class="container">
          <div class="section-header">
            <h2>La opinión de nuestros pacientes</h2>
            <p>Nuestra mayor satisfacción es ver a nuestros pacientes sonreír con total confianza.</p>
          </div>

          <div class="testimonials-grid">
            ${testimoniosHtml}
          </div>
        </div>
      </section>

      <!-- 6. Sección Banner de Cierre CTA -->
      <section class="section">
        <div class="container">
          <div class="cta-banner">
            <h2>¿Listo para lucir tu mejor sonrisa?</h2>
            <p>
              Agenda hoy mismo tu valoración en NovoDentist. Es rápido, sencillo y directo a través de nuestra línea de atención en WhatsApp.
            </p>
            <a href="${waCitaGenerica}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--lg">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style="margin-right: 8px;">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.724-1.466L0 24zm6.59-4.846c1.6.95 3.16 1.449 4.853 1.45 5.48.002 9.935-4.454 9.938-9.94.002-2.656-1.03-5.153-2.906-7.03C16.657 1.758 14.167 1.7 12.013 1.7c-5.485 0-9.94 4.453-9.943 9.94-.001 1.914.502 3.42 1.488 4.985l-.997 3.642 3.73-.978z"/>
              </svg>
              Agendar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  `;
}
