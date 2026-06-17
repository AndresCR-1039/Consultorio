/**
 * Configuración global del sitio NovoDentist.
 * 
 * DECISIÓN DE DISEÑO (Spec §7.2):
 * El número de WhatsApp se centraliza aquí como una ÚNICA constante.
 * Para cambiar al número real del consultorio, solo se modifica esta línea.
 */

export const WHATSAPP_NUMBER = '573000000000';

/**
 * Genera la URL de WhatsApp con un mensaje prellenado.
 * @param {string} mensaje - Texto del mensaje (sin codificar).
 * @returns {string} URL completa de wa.me
 */
export function generarEnlaceWhatsApp(mensaje = 'Hola, quiero agendar una cita en NovoDentist.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

/** Información general del consultorio (datos ficticios para el prototipo) */
export const INFO_CONSULTORIO = {
  nombre: 'NovoDentist',
  direccion: 'Calle 85 #15-30, Consultorio 401, Bogotá, Colombia',
  telefono: '+57 300 000 0000',
  correo: 'contacto@novodentist.com',
  instagram: 'https://instagram.com/novodentist',
  facebook: 'https://facebook.com/novodentist',
  horarios: [
    { dias: 'Lunes a Viernes', horas: '8:00 a.m. – 6:00 p.m.' },
    { dias: 'Sábados', horas: '8:00 a.m. – 1:00 p.m.' },
    { dias: 'Domingos y festivos', horas: 'Cerrado' },
  ],
};
