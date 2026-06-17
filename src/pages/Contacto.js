/**
 * Página: Contacto / Agendamiento
 * (Spec §6.9, §6.8)
 *
 * Expone la información de contacto, horarios, mapa estático simulado, 
 * botón de WhatsApp independiente y el formulario de contacto interactivo.
 */

import { servicios, generarEnlaceWhatsApp, INFO_CONSULTORIO } from '../data/index.js';

export function renderContacto() {
  // Generar opciones dinámicas de servicios en el select
  const serviciosOpciones = servicios
    .map(s => `<option value="${s.id}">${s.nombre}</option>`)
    .join('');

  // Generar lista de horarios
  const horariosHtml = INFO_CONSULTORIO.horarios
    .map(h => `<li><strong>${h.dias}:</strong> ${h.horas}</li>`)
    .join('');

  // Enlace independiente para agendamiento directo por WhatsApp
  const waCitaContacto = generarEnlaceWhatsApp('Hola, quiero agendar una cita en NovoDentist.');

  return `
    <main class="page-contacto animate-fade-in">
      <section class="section">
        <!-- Encabezado -->
        <div class="container section-header">
          <h1>Contacto & Agendamiento</h1>
          <p>
            Agenda una cita de valoración o déjanos tus dudas. Nuestro equipo te atenderá a la brevedad.
          </p>
        </div>

        <div class="container contact-grid">
          <!-- Columna Izquierda: Información y WhatsApp Independiente -->
          <div class="contact-info-col">
            <div class="contact-card">
              <h2 class="contact-card__title">Información de Contacto</h2>
              <ul class="contact-details">
                <li>
                  <span class="contact-icon">📍</span>
                  <div>
                    <strong>Dirección:</strong><br>
                    ${INFO_CONSULTORIO.direccion}
                  </div>
                </li>
                <li>
                  <span class="contact-icon">📞</span>
                  <div>
                    <strong>Teléfono de atención:</strong><br>
                    <a href="tel:${INFO_CONSULTORIO.telefono.replace(/\s+/g, '')}" class="contact-link">${INFO_CONSULTORIO.telefono}</a>
                  </div>
                </li>
                <li>
                  <span class="contact-icon">✉️</span>
                  <div>
                    <strong>Correo electrónico:</strong><br>
                    <a href="mailto:${INFO_CONSULTORIO.correo}" class="contact-link">${INFO_CONSULTORIO.correo}</a>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Horarios de atención -->
            <div class="contact-card">
              <h2 class="contact-card__title">Horarios de Atención</h2>
              <ul class="contact-hours">
                ${horariosHtml}
              </ul>
            </div>

            <!-- Botón WhatsApp independiente (Spec §6.9) -->
            <div class="contact-whatsapp-box">
              <p class="contact-whatsapp-text">¿Prefieres agendar de forma inmediata?</p>
              <a 
                href="${waCitaContacto}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn--whatsapp btn--lg"
                style="width: 100%; display: inline-flex; justify-content: center; align-items: center; gap: 10px;"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.724-1.466L0 24zm6.59-4.846c1.6.95 3.16 1.449 4.853 1.45 5.48.002 9.935-4.454 9.938-9.94.002-2.656-1.03-5.153-2.906-7.03C16.657 1.758 14.167 1.7 12.013 1.7c-5.485 0-9.94 4.453-9.943 9.94-.001 1.914.502 3.42 1.488 4.985l-.997 3.642 3.73-.978z"/>
                </svg>
                Agendar cita por WhatsApp
              </a>
            </div>

            <!-- Mapa estático simulado (Spec §6.9) -->
            <div class="contact-map-wrapper">
              <div class="contact-map-simulated">
                <span style="font-size: 2rem; margin-bottom: var(--space-xs);">🗺️</span>
                <strong>Ubicación de Consulta</strong>
                <span class="text-caption" style="text-align: center; max-width: 200px; font-size: var(--text-caption);">Calle 85 #15-30, Bogotá</span>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: Formulario de Contacto Interactivo -->
          <div class="contact-form-col" id="form-container">
            <div class="contact-card" style="height: 100%;">
              <h2 class="contact-card__title" style="margin-bottom: var(--space-lg);">Envíanos un Mensaje</h2>
              <form id="contact-form" novalidate>
                <!-- Nombre completo -->
                <div class="form-group">
                  <label for="form-fullname" class="form-label">Nombre completo <span style="color: var(--color-error);">*</span></label>
                  <input 
                    type="text" 
                    id="form-fullname" 
                    class="form-control" 
                    placeholder="Ej. Juan Pérez" 
                    required
                  >
                  <span class="form-error-msg" id="error-fullname"></span>
                </div>

                <!-- Teléfono -->
                <div class="form-group">
                  <label for="form-phone" class="form-label">Teléfono de contacto <span style="color: var(--color-error);">*</span></label>
                  <input 
                    type="tel" 
                    id="form-phone" 
                    class="form-control" 
                    placeholder="Ej. 300 123 4567" 
                    required
                  >
                  <span class="form-error-msg" id="error-phone"></span>
                </div>

                <!-- Motivo de consulta -->
                <div class="form-group">
                  <label for="form-service" class="form-label">Motivo de consulta <span style="color: var(--color-error);">*</span></label>
                  <select id="form-service" class="form-control" required>
                    <option value="" disabled selected>Selecciona un servicio...</option>
                    ${serviciosOpciones}
                    <option value="otro">Otro motivo / Consulta general</option>
                  </select>
                  <span class="form-error-msg" id="error-service"></span>
                </div>

                <!-- Mensaje adicional -->
                <div class="form-group">
                  <label for="form-message" class="form-label">Mensaje adicional (opcional)</label>
                  <textarea 
                    id="form-message" 
                    class="form-control form-control--textarea" 
                    placeholder="Cuéntanos brevemente tus dudas o requerimientos especiales..."
                  ></textarea>
                </div>

                <!-- Botón Enviar -->
                <button 
                  type="submit" 
                  class="btn btn--primary btn--lg" 
                  style="width: 100%; justify-content: center; margin-top: var(--space-md);"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

/**
 * Agrega comportamiento interactivo de validación y simulación de envío al formulario.
 */
export function setupContactoBehavior() {
  const form = document.getElementById('contact-form');
  const container = document.getElementById('form-container');

  if (!form || !container) return;

  // Inputs y contenedores de error
  const fullnameInput = document.getElementById('form-fullname');
  const phoneInput = document.getElementById('form-phone');
  const serviceSelect = document.getElementById('form-service');

  const errorFullname = document.getElementById('error-fullname');
  const errorPhone = document.getElementById('error-phone');
  const errorService = document.getElementById('error-service');

  // Evento submit
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recarga o redirección (Spec §6.9 CA)

    let isValid = true;

    // Resetear mensajes de error
    [errorFullname, errorPhone, errorService].forEach(el => {
      if (el) el.textContent = '';
    });
    [fullnameInput, phoneInput, serviceSelect].forEach(el => {
      if (el) el.classList.remove('form-control--error');
    });

    // Validar nombre completo
    if (!fullnameInput.value.trim()) {
      fullnameInput.classList.add('form-control--error');
      if (errorFullname) errorFullname.textContent = 'El nombre completo es requerido.';
      isValid = false;
    }

    // Validar teléfono
    if (!phoneInput.value.trim()) {
      phoneInput.classList.add('form-control--error');
      if (errorPhone) errorPhone.textContent = 'El teléfono de contacto es requerido.';
      isValid = false;
    }

    // Validar servicio
    if (!serviceSelect.value) {
      serviceSelect.classList.add('form-control--error');
      if (errorService) errorService.textContent = 'Debes seleccionar un motivo de consulta.';
      isValid = false;
    }

    // Si es válido, mostrar confirmación simulada (Spec §6.9)
    if (isValid) {
      // Reemplazar el formulario con el mensaje de éxito
      container.innerHTML = `
        <div class="card success-card animate-fade-in-up" style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: var(--space-3xl);">
          <div class="success-card__checkmark">✓</div>
          <h2 style="color: var(--color-success); margin-bottom: var(--space-md);">¡Mensaje Enviado!</h2>
          <p class="text-body-lg" style="font-weight: var(--weight-semibold); margin-bottom: var(--space-sm);">
            ¡Gracias por contactarnos, ${fullnameInput.value.trim()}!
          </p>
          <p class="text-caption" style="margin-bottom: var(--space-xl); max-width: 300px;">
            Hemos recibido tu solicitud de consulta. Un miembro de nuestro equipo te contactará por teléfono muy pronto.
          </p>
          <button type="button" class="btn btn--secondary btn--sm" id="btn-success-reset" style="width: 100%;">
            Volver a enviar
          </button>
        </div>
      `;

      // Listener para reiniciar el formulario
      const resetBtn = document.getElementById('btn-success-reset');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          // Volver a inyectar el html original de la página y reiniciar sus listeners
          const contentContainer = document.getElementById('content');
          if (contentContainer) {
            contentContainer.innerHTML = renderContacto();
            setupContactoBehavior();
          }
        });
      }
    }
  });
}
