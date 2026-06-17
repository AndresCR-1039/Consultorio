/**
 * Datos mock — Artículos del blog / sección de consejos.
 * Estructura: { id, titulo, fecha, resumen, contenido, imagen }
 * (Spec §8, §6.6)
 *
 * Cada artículo tiene contenido original de mínimo 3 párrafos,
 * coherente con el título y libre de contenido copiado.
 */

const blog = [
  {
    id: 'cepillado-correcto',
    titulo: 'Cómo cepillarte correctamente los dientes',
    fecha: '2025-05-10',
    resumen:
      'Aprende la técnica adecuada de cepillado para prevenir caries y enfermedades de las encías. Pequeños cambios en tu rutina pueden marcar una gran diferencia.',
    contenido: `El cepillado dental es la base de una buena salud oral, pero sorprende saber que muchas personas lo hacen de manera incorrecta. No se trata solo de pasar el cepillo rápidamente por los dientes; la técnica, la duración y la frecuencia son factores clave para que el cepillado sea realmente efectivo.

La técnica recomendada por los odontólogos es la de Bass modificada: coloca el cepillo en un ángulo de 45 grados hacia la línea de las encías y realiza movimientos circulares suaves y cortos. Cepilla todas las superficies de cada diente — la cara externa, la interna y la superficie de masticación — durante al menos dos minutos. No olvides cepillar suavemente la lengua, ya que en ella se acumulan bacterias que pueden causar mal aliento.

Es importante elegir un cepillo de cerdas suaves y cambiarlo cada tres meses, o antes si las cerdas están desgastadas. Complementa tu cepillado con hilo dental al menos una vez al día y, si tu odontólogo lo recomienda, con un enjuague bucal sin alcohol. Recuerda que un buen cepillado no reemplaza las visitas regulares al consultorio, pero sí es tu mejor aliado para mantener una sonrisa sana entre cita y cita.`,
    imagen: '/images/blog/cepillado.webp',
  },
  {
    id: 'frecuencia-visitas',
    titulo: '¿Cada cuánto debes visitar al odontólogo?',
    fecha: '2025-04-22',
    resumen:
      'Descubre por qué las visitas regulares al odontólogo son fundamentales y con qué frecuencia deberías programar tu próxima cita.',
    contenido: `Una de las preguntas más frecuentes que recibimos en NovoDentist es: "¿Cada cuánto debo ir al odontólogo si no me duele nada?" La respuesta es clara: la prevención es mucho más efectiva y económica que el tratamiento de problemas avanzados, y muchas enfermedades dentales no presentan síntomas en sus etapas iniciales.

La recomendación general es visitar al odontólogo cada seis meses para una revisión completa y una limpieza profesional. Durante estas citas, el profesional puede detectar caries incipientes, enfermedades de las encías, desgaste del esmalte y otros problemas antes de que se conviertan en situaciones dolorosas o costosas. También es el momento ideal para evaluar si necesitas algún tratamiento preventivo como sellantes o aplicaciones de flúor.

Sin embargo, algunas personas pueden necesitar visitas más frecuentes. Si tienes antecedentes de enfermedad periodontal, diabetes, estás en tratamiento de ortodoncia o fumas, tu odontólogo puede recomendarte controles cada tres o cuatro meses. Lo más importante es establecer una relación continua con tu profesional de confianza y no esperar a que aparezca el dolor para pedir cita — cuando duele, generalmente el problema ya está avanzado.`,
    imagen: '/images/blog/visitas.webp',
  },
  {
    id: 'mitos-blanqueamiento',
    titulo: 'Mitos y verdades sobre el blanqueamiento dental',
    fecha: '2025-03-15',
    resumen:
      'Separamos la realidad de la ficción sobre uno de los tratamientos estéticos más solicitados. ¿El blanqueamiento daña los dientes? ¿Cuánto dura?',
    contenido: `El blanqueamiento dental es uno de los procedimientos estéticos más demandados en odontología, pero también uno de los que más mitos genera. Muchas personas dudan en realizarlo por información incorrecta que circula en internet o por recomendaciones de productos caseros que prometen resultados milagrosos. Vamos a aclarar las dudas más comunes.

Mito: "El blanqueamiento daña el esmalte dental." Verdad: cuando es realizado por un profesional con productos aprobados y en las concentraciones adecuadas, el blanqueamiento no daña el esmalte. El procedimiento actúa sobre los pigmentos depositados en la estructura dental sin alterar su integridad. Lo que sí puede ocurrir es una sensibilidad temporal que desaparece en pocos días.

Mito: "El bicarbonato de sodio y el limón blanquean igual que un tratamiento profesional." Verdad: estos remedios caseros son abrasivos y ácidos, y su uso repetido puede desgastar el esmalte e irritar las encías, causando daños permanentes. Un blanqueamiento profesional utiliza peróxido de hidrógeno o carbamida en concentraciones controladas, aplicado con protección gingival y supervisión clínica. Los resultados de un blanqueamiento profesional pueden durar entre uno y tres años dependiendo de tus hábitos alimenticios y de higiene, y las sesiones de mantenimiento son sencillas y rápidas.`,
    imagen: '/images/blog/blanqueamiento.webp',
  },
];

export default blog;
