/**
 * Página: Equipo / Nosotros
 * (Spec §6.3)
 */

import { equipo } from '../data/index.js';

export function renderEquipo() {
  // Generar HTML de cada miembro del equipo
  const equipoHtml = equipo
    .map(member => {
      const isNatalia = member.destacado === true;

      // Para los placeholders de fotos de los demás miembros, usamos sus iniciales estilizadas
      const initials = member.nombre
        .split(' ')
        // Filtrar prefijos como Dra., Dr.
        .filter(w => !['Dra.', 'Dr.'].includes(w))
        .map(w => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

      // Renderizar imagen de Natalia (con carga diferida y alt accesible), o un avatar de color para los demás
      const imageHtml = isNatalia
        ? `<img src="${member.foto}" alt="Retrato profesional de la Dra. Natalia Herrera Velasco, Odontóloga General y Directora Clínica de NovoDentist" class="team-card__image" loading="lazy" />`
        : `
          <div class="team-card__avatar-placeholder">
            ${initials}
          </div>
        `;

      return `
        <article class="team-card ${isNatalia ? 'team-card--featured' : ''}">
          <div class="team-card__image-wrapper">
            ${imageHtml}
          </div>
          <div class="team-card__body">
            <h3 class="team-card__name">${member.nombre}</h3>
            <span class="team-card__role">${member.cargo}</span>
            <p class="team-card__desc">${member.descripcion}</p>
          </div>
        </article>
      `;
    })
    .join('');

  return `
    <main class="page-equipo animate-fade-in">
      <!-- Sección: Nuestro Equipo -->
      <section class="section team-section">
        <div class="container section-header">
          <h1>Nuestros Especialistas</h1>
          <p>
            Contamos con profesionales experimentados comprometidos con tu bienestar dental y dedicados a ofrecerte la mejor experiencia.
          </p>
        </div>
        
        <div class="container">
          <div class="team-grid">
            ${equipoHtml}
          </div>
        </div>
      </section>

      <!-- Sección: Historia y Misión -->
      <section class="section section--alt" style="padding-top: var(--space-3xl); padding-bottom: var(--space-4xl);">
        <div class="container">
          <div class="history-section">
            <div class="history-grid">
              <div class="history-content">
                <h2>Nuestra Historia & Misión</h2>
                <p>
                  NovoDentist nació en Bogotá bajo el liderazgo de la Dra. Natalia Herrera con el propósito de redefinir la experiencia odontológica tradicional. Nuestro objetivo siempre ha sido eliminar el miedo asociado a las consultas clínicas mediante el cuidado humanizado, el diagnóstico ético y preciso, y la implementación de técnicas y equipos de última generación.
                </p>
                <p>
                  Trabajamos día a día para que cada uno de nuestros pacientes, desde niños en su primera consulta hasta adultos mayores en rehabilitaciones complejas, encuentre un espacio confiable, profesional y cómodo para sonreír con total plenitud.
                </p>
              </div>
              <div class="history-content">
                <div class="history-quote">
                  "Creemos que una sonrisa saludable tiene el poder de transformar vidas. Nuestro compromiso no es solo tratar dientes, sino cuidar de las personas detrás de cada sonrisa."
                  <div style="margin-top: var(--space-md); font-size: var(--text-caption); font-weight: var(--weight-bold); font-style: normal; color: var(--color-text-secondary);">
                    — Dra. Natalia Herrera Velasco, Fundadora
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}
