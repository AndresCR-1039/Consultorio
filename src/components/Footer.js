/**
 * Componente: Footer
 * (Spec §5)
 *
 * Muestra el mapa del sitio, redes sociales, horarios e información de contacto centralizada.
 */

import { INFO_CONSULTORIO } from '../data/index.js';

export function renderFooter() {
  const currentYear = new Date().getFullYear();
  
  // Generamos el HTML de los horarios
  const horariosHtml = INFO_CONSULTORIO.horarios
    .map(h => `<li><strong>${h.dias}:</strong> ${h.horas}</li>`)
    .join('');

  return `
    <footer class="footer">
      <div class="container footer__container">
        <div class="footer__grid">
          <!-- Columna 1: Branding -->
          <div class="footer__col footer__col--brand">
            <a href="#/" class="footer__logo" aria-label="NovoDentist Inicio">
              <img class="footer__logo-img" src="/images/logo.jpg" alt="NovoDentist" />
            </a>
            <p class="footer__description">
              Odontología moderna de alta calidad. Tu bienestar y salud oral son nuestra mayor prioridad.
            </p>
            <div class="footer__socials">
              <a href="${INFO_CONSULTORIO.facebook}" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Facebook (abre en nueva pestaña)">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="${INFO_CONSULTORIO.instagram}" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Instagram (abre en nueva pestaña)">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Columna 2: Mapa del sitio -->
          <div class="footer__col">
            <h3 class="footer__title">Mapa del Sitio</h3>
            <ul class="footer__links">
              <li><a href="#/" class="footer__link">Inicio</a></li>
              <li><a href="#/servicios" class="footer__link">Servicios</a></li>
              <li><a href="#/equipo" class="footer__link">Nuestro Equipo</a></li>
              <li><a href="#/promociones" class="footer__link">Promociones</a></li>
              <li><a href="#/galeria" class="footer__link">Galería</a></li>
              <li><a href="#/blog" class="footer__link">Blog & Consejos</a></li>
              <li><a href="#/faq" class="footer__link">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          <!-- Columna 3: Contacto -->
          <div class="footer__col">
            <h3 class="footer__title">Contacto</h3>
            <ul class="footer__contact-info">
              <li>
                <strong>Dirección:</strong><br>
                ${INFO_CONSULTORIO.direccion}
              </li>
              <li>
                <strong>Teléfono:</strong><br>
                <a href="tel:${INFO_CONSULTORIO.telefono.replace(/\s+/g, '')}" class="footer__link">${INFO_CONSULTORIO.telefono}</a>
              </li>
              <li>
                <strong>Correo:</strong><br>
                <a href="mailto:${INFO_CONSULTORIO.correo}" class="footer__link">${INFO_CONSULTORIO.correo}</a>
              </li>
            </ul>
          </div>

          <!-- Columna 4: Horarios -->
          <div class="footer__col">
            <h3 class="footer__title">Horarios de Atención</h3>
            <ul class="footer__hours">
              ${horariosHtml}
            </ul>
          </div>
        </div>

        <!-- Barra inferior: Copyright e Disclaimer -->
        <div class="footer__bottom">
          <p class="footer__copyright">
            &copy; ${currentYear} ${INFO_CONSULTORIO.nombre}. Todos los derechos reservados.
          </p>
          <p class="footer__disclaimer">
            Sitio de demostración — prototipo de diseño.
          </p>
        </div>
      </div>
    </footer>
  `;
}
