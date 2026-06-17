/**
 * Datos mock — Catálogo de servicios odontológicos.
 * Estructura: { id, nombre, descripcion, imagen }
 * (Spec §8, §6.2)
 *
 * Las imágenes se asignarán con rutas reales cuando se generen los assets.
 * Por ahora se usa un placeholder descriptivo para cada servicio.
 */

const servicios = [
  {
    id: 'blanqueamiento-dental',
    nombre: 'Blanqueamiento dental',
    descripcion: 'Tratamiento estético para dientes más blancos y luminosos. Utilizamos tecnología LED de última generación para resultados visibles desde la primera sesión.',
    imagen: '/images/servicios/blanqueamiento.webp',
  },
  {
    id: 'protesis-oral',
    nombre: 'Prótesis oral',
    descripcion: 'Reemplazo de piezas dentales perdidas con prótesis fijas o removibles, devolviendo funcionalidad y estética a tu sonrisa.',
    imagen: '/images/servicios/protesis.webp',
  },
  {
    id: 'ortodoncia',
    nombre: 'Ortodoncia',
    descripcion: 'Corrección de la posición dental con brackets metálicos, estéticos o alineadores invisibles para una mordida perfecta.',
    imagen: '/images/servicios/ortodoncia.webp',
  },
  {
    id: 'limpieza-dental',
    nombre: 'Limpieza dental / profilaxis',
    descripcion: 'Remoción profesional de placa bacteriana y sarro para prevenir caries, gingivitis y enfermedades periodontales.',
    imagen: '/images/servicios/limpieza.webp',
  },
  {
    id: 'endodoncia',
    nombre: 'Endodoncia',
    descripcion: 'Tratamiento de conducto para salvar piezas dentales dañadas internamente, eliminando la infección y preservando el diente natural.',
    imagen: '/images/servicios/endodoncia.webp',
  },
  {
    id: 'implantes-dentales',
    nombre: 'Implantes dentales',
    descripcion: 'Reemplazo permanente de raíces dentales perdidas con implantes de titanio biocompatibles, la solución más duradera y natural.',
    imagen: '/images/servicios/implantes.webp',
  },
  {
    id: 'odontologia-estetica',
    nombre: 'Odontología estética',
    descripcion: 'Carillas de porcelana, resinas y diseño de sonrisa personalizado para lograr la sonrisa que siempre soñaste.',
    imagen: '/images/servicios/estetica.webp',
  },
  {
    id: 'odontopediatria',
    nombre: 'Odontopediatría',
    descripcion: 'Atención odontológica especializada para niños en un ambiente cálido y amigable, cuidando su salud dental desde temprana edad.',
    imagen: '/images/servicios/odontopediatria.webp',
  },
  {
    id: 'extracciones',
    nombre: 'Extracciones',
    descripcion: 'Remoción quirúrgica segura y mínimamente invasiva de piezas dentales cuando el tratamiento conservador no es viable.',
    imagen: '/images/servicios/extracciones.webp',
  },
];

export default servicios;
