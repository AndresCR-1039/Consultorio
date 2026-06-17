/**
 * Barrel export para todos los módulos de datos mock.
 * Permite importar cualquier dataset desde un solo punto:
 *   import { servicios, equipo, blog } from './data';
 */

export { default as servicios } from './servicios.js';
export { default as equipo } from './equipo.js';
export { default as promociones } from './promociones.js';
export { default as blog } from './blog.js';
export { default as faq } from './faq.js';
export { default as testimonios } from './testimonios.js';
export { WHATSAPP_NUMBER, generarEnlaceWhatsApp, INFO_CONSULTORIO } from './config.js';
