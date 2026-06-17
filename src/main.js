/**
 * NovoDentist — Punto de entrada principal y enrutador client-side.
 * (Spec §3, §5, §10)
 */

import './styles/index.css';

// Importar componentes de Layout
import { renderHeader, setupHeaderBehavior, updateActiveLink } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { generarEnlaceWhatsApp } from './data/index.js';

// Importar Páginas (Skeletons de Fase 1)
import { renderHome } from './pages/Home.js';
import { renderServicios } from './pages/Servicios.js';
import { renderEquipo } from './pages/Equipo.js';
import { renderPromociones } from './pages/Promociones.js';
import { renderGaleria } from './pages/Galeria.js';
import { renderBlog, setupBlogBehavior } from './pages/Blog.js';
import { renderFaq, setupFaqBehavior } from './pages/Faq.js';
import { renderContacto, setupContactoBehavior } from './pages/Contacto.js';

// Definición de rutas hash y sus correspondientes funciones de renderizado
const routes = {
  '/': renderHome,
  '/servicios': renderServicios,
  '/equipo': renderEquipo,
  '/promociones': renderPromociones,
  '/galeria': renderGaleria,
  '/blog': renderBlog,
  '/faq': renderFaq,
  '/contacto': renderContacto,
};

/**
 * Enrutador basado en Hash.
 * Extrae la ruta del hash de la URL, inyecta el componente de página en el layout 
 * y actualiza la navegación activa en el Header.
 */
function router() {
  const hash = window.location.hash || '#/';
  
  // Normalizar ruta (quitar prefijo # y asegurar formato /ruta)
  let route = hash.replace(/^#/, '');
  if (!route.startsWith('/')) {
    route = '/' + route;
  }

  // Obtener función de renderizado para la ruta actual o fallback a Home
  const renderFn = routes[route] || renderHome;

  // Inyectar en el contenedor de contenido
  const contentContainer = document.getElementById('content');
  if (contentContainer) {
    contentContainer.innerHTML = renderFn();
  }

  // Limpiar posibles escapes del blog guardados en window
  if (window._blogEscHandler) {
    document.removeEventListener('keydown', window._blogEscHandler);
    window._blogEscHandler = null;
  }

  // Ejecutar comportamientos dinámicos específicos de las páginas
  if (route === '/blog') {
    setupBlogBehavior();
  } else if (route === '/faq') {
    setupFaqBehavior();
  } else if (route === '/contacto') {
    setupContactoBehavior();
  }

  // Actualizar enlace activo en el header
  const routeName = route.replace(/^\//, '') || 'home';
  updateActiveLink(routeName);

  // Asegurar scroll al inicio de la página tras la navegación
  window.scrollTo(0, 0);
}

/**
 * Inicialización de la aplicación.
 * Monta el esqueleto HTML global con Header, Main Content Area y Footer,
 * activa los event listeners y ejecuta el enrutador inicial.
 */
function init() {
  const app = document.getElementById('app');

  // Estructura de layout general de la aplicación
  app.innerHTML = `
    <div class="site-layout">
      ${renderHeader()}
      <div id="content" class="site-content"></div>
      ${renderFooter()}
      
      <!-- Botón Flotante Global de WhatsApp -->
      <a 
        href="${generarEnlaceWhatsApp()}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="whatsapp-float" 
        aria-label="Agendar cita por WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.724-1.466L0 24zm6.59-4.846c1.6.95 3.16 1.449 4.853 1.45 5.48.002 9.935-4.454 9.938-9.94.002-2.656-1.03-5.153-2.906-7.03C16.657 1.758 14.167 1.7 12.013 1.7c-5.485 0-9.94 4.453-9.943 9.94-.001 1.914.502 3.42 1.488 4.985l-.997 3.642 3.73-.978z"/>
        </svg>
      </a>
    </div>
  `;

  // Activar comportamiento interactivo del navbar (responsive, toggle, sticky)
  setupHeaderBehavior();

  // Enrutar vista inicial
  router();

  // Escuchar cambios en la URL (hashchange)
  window.addEventListener('hashchange', router);
}

// Iniciar aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
