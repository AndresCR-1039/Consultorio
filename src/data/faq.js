/**
 * Datos mock — Preguntas frecuentes (FAQ).
 * Estructura: { id, pregunta, respuesta }
 * (Spec §8, §6.7)
 *
 * Mínimo 5 preguntas según la spec. Se incluyen 7 para mayor completitud.
 */

const faq = [
  {
    id: 'metodos-pago',
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta:
      'Aceptamos efectivo, tarjeta débito y crédito (Visa, Mastercard, American Express), y transferencias bancarias. También ofrecemos opciones de financiación directa para tratamientos de ortodoncia e implantes.',
  },
  {
    id: 'urgencias',
    pregunta: '¿Atienden urgencias odontológicas?',
    respuesta:
      'Sí, contamos con atención prioritaria para urgencias dentales como dolor agudo, fracturas dentales o inflamaciones. Contáctanos por WhatsApp para coordinar tu atención de urgencia lo antes posible.',
  },
  {
    id: 'seguros-eps',
    pregunta: '¿Trabajan con seguros o EPS?',
    respuesta:
      'Trabajamos con los convenios listados en nuestra sección de Convenios. Te recomendamos consultarnos directamente para verificar la disponibilidad y cobertura según tu plan específico.',
  },
  {
    id: 'cancelar-cita',
    pregunta: '¿Cómo puedo cancelar o reprogramar una cita?',
    respuesta:
      'Puedes cancelar o reprogramar tu cita escribiéndonos por WhatsApp o llamándonos con al menos 24 horas de anticipación. Esto nos permite ofrecer el espacio a otro paciente que lo necesite.',
  },
  {
    id: 'atencion-ninos',
    pregunta: '¿Atienden niños?',
    respuesta:
      'Sí, contamos con servicio de odontopediatría especializada. Nuestro equipo está capacitado para atender a niños desde su primera dentición, en un ambiente cálido y amigable que les ayuda a sentirse cómodos.',
  },
  {
    id: 'duracion-cita',
    pregunta: '¿Cuánto dura una cita de valoración?',
    respuesta:
      'La cita de valoración inicial dura aproximadamente 30 a 45 minutos. Incluye examen clínico completo, radiografía panorámica digital y la elaboración de un plan de tratamiento personalizado.',
  },
  {
    id: 'estacionamiento',
    pregunta: '¿Tienen estacionamiento disponible?',
    respuesta:
      'El edificio cuenta con parqueadero privado para pacientes con tarifa preferencial. También hay zonas de parqueo público cercanas. Te recomendamos llegar unos minutos antes de tu cita.',
  },
];

export default faq;
