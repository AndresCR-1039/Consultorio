/**
 * Datos mock — Promociones vigentes.
 * Estructura: { id, titulo, descripcion, vigencia, imagen }
 * (Spec §8, §6.4)
 */

const promociones = [
  {
    id: 'blanqueamiento-20',
    titulo: '20% de descuento en blanqueamiento dental',
    descripcion:
      'Aprovecha este mes y luce una sonrisa más blanca y radiante. El descuento aplica para el tratamiento completo de blanqueamiento LED en consultorio.',
    vigencia: 'Válido hasta fin de mes en curso.',
    imagen: '/images/promociones/blanqueamiento-promo.webp',
  },
  {
    id: 'valoracion-gratis',
    titulo: 'Valoración inicial gratuita',
    descripcion:
      'Primera consulta de diagnóstico sin costo para pacientes nuevos. Incluye evaluación completa, radiografía panorámica digital y plan de tratamiento personalizado.',
    vigencia: 'Solo para nuevos pacientes.',
    imagen: '/images/promociones/valoracion-promo.webp',
  },
  {
    id: 'ortodoncia-cuota',
    titulo: 'Plan de ortodoncia con cuota inicial reducida',
    descripcion:
      'Financiación especial para iniciar tu tratamiento de ortodoncia con una cuota inicial desde $99.000 COP. Incluye brackets metálicos o estéticos.',
    vigencia: 'Sujeto a evaluación previa.',
    imagen: '/images/promociones/ortodoncia-promo.webp',
  },
];

export default promociones;
