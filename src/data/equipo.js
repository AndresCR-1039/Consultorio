/**
 * Datos mock — Equipo profesional de NovoDentist.
 * Estructura: { id, nombre, cargo, descripcion, foto, destacado }
 * (Spec §8, §6.3)
 *
 * Natalia es la figura principal del consultorio (destacado: true).
 * Los demás perfiles son ficticios con nombres y descripciones coherentes.
 */

const equipo = [
  {
    id: 'natalia-herrera',
    nombre: 'Dra. Natalia Herrera Velasco',
    cargo: 'Odontóloga General / Directora Clínica',
    descripcion:
      'Especialista en estética dental y rehabilitación oral con más de 12 años de experiencia. Apasionada por transformar sonrisas y brindar atención cálida y personalizada a cada paciente. Fundadora de NovoDentist.',
    foto: '/images/equipo/natalia.png',
    destacado: true,
  },
  {
    id: 'carlos-mendez',
    nombre: 'Dr. Carlos Méndez Ríos',
    cargo: 'Odontólogo — Especialista en Ortodoncia',
    descripcion:
      'Ortodoncista con formación en técnicas de alineadores invisibles y brackets de baja fricción. 8 años de experiencia ayudando a pacientes de todas las edades a lograr una mordida funcional y armónica.',
    foto: '/images/equipo/carlos.webp',
    destacado: false,
  },
  {
    id: 'valentina-castro',
    nombre: 'Valentina Castro López',
    cargo: 'Asistente Dental',
    descripcion:
      'Técnica en salud oral certificada con 5 años de experiencia en asistencia clínica. Su dedicación y calidez hacen que los pacientes se sientan cómodos durante cada procedimiento.',
    foto: '/images/equipo/valentina.webp',
    destacado: false,
  },
  {
    id: 'andrea-morales',
    nombre: 'Andrea Morales Gutiérrez',
    cargo: 'Recepción / Atención al Paciente',
    descripcion:
      'Administradora en salud con vocación de servicio. Se encarga de coordinar citas, resolver dudas y garantizar que cada visita a NovoDentist sea una experiencia agradable desde el primer contacto.',
    foto: '/images/equipo/andrea.webp',
    destacado: false,
  },
];

export default equipo;
