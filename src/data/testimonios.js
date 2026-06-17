/**
 * Datos mock — Testimonios de pacientes.
 * Estructura: { id, nombre, frase, valoracion }
 * (Spec §8, §6.1)
 *
 * Valoración en escala de 1 a 5 (estrellas).
 * Todos los nombres y testimonios son ficticios.
 */

const testimonios = [
  {
    id: 'testimonio-1',
    nombre: 'María Fernanda G.',
    frase:
      'Excelente atención desde la primera cita. La Dra. Natalia me explicó todo el procedimiento con mucha paciencia. ¡Mi sonrisa quedó increíble!',
    valoracion: 5,
  },
  {
    id: 'testimonio-2',
    nombre: 'Andrés Camilo R.',
    frase:
      'Llevé a mi hijo de 5 años y la experiencia fue genial. El equipo lo hizo sentir tan cómodo que ahora él mismo pide ir al odontólogo.',
    valoracion: 5,
  },
  {
    id: 'testimonio-3',
    nombre: 'Laura Patricia M.',
    frase:
      'Me realicé el blanqueamiento dental y los resultados superaron mis expectativas. El consultorio es moderno, limpio y el trato es muy profesional.',
    valoracion: 4,
  },
  {
    id: 'testimonio-4',
    nombre: 'Jorge Enrique S.',
    frase:
      'Después de años con miedo al odontólogo, en NovoDentist encontré un equipo que realmente se preocupa por el paciente. Muy recomendado.',
    valoracion: 5,
  },
];

export default testimonios;
