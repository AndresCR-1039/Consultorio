/**
 * Página: Galería Antes/Después
 * (Spec §6.5)
 */

export function renderGaleria() {
  const casos = [
    {
      titulo: 'Blanqueamiento Dental LED',
      descripcion: 'Recuperación del tono natural del esmalte eliminando manchas severas de café y tabaco en 2 sesiones.',
      antesBg: 'linear-gradient(135deg, #EAD7B3, #DCCAA5)', // Tono marfil/amarillo
      despuesBg: 'linear-gradient(135deg, #FFFFFF, #EAF4FA)', // Blanco brillante/celeste
    },
    {
      titulo: 'Ortodoncia Invisible',
      descripcion: 'Alineación dental lograda mediante placas alineadoras transparentes en un plazo de 12 meses.',
      antesBg: 'repeating-linear-gradient(45deg, #CBD5E1, #CBD5E1 10px, #94A3B8 10px, #94A3B8 20px)', // Patrón gris desordenado
      despuesBg: 'linear-gradient(135deg, #38B2AC, #2B6CB0)', // Degradado institucional ordenado
    },
    {
      titulo: 'Resinas Estéticas',
      descripcion: 'Reemplazo de amalgamas oscuras antiguas por restauraciones en resina de alta estética del color del diente.',
      antesBg: 'linear-gradient(135deg, #475569, #1E293B)', // Gris amalgama oscuro
      despuesBg: 'linear-gradient(135deg, #F1F5F9, #FFFFFF)', // Blanco natural marfil
    }
  ];

  const casosHtml = casos
    .map(c => `
      <article class="card gallery-case" style="margin-bottom: var(--space-2xl);">
        <div class="gallery-case__comparison">
          <!-- Antes -->
          <div class="gallery-case__side gallery-case__side--before">
            <div class="gallery-case__preview-box" style="background: ${c.antesBg};">
              <span class="gallery-case__label gallery-case__label--before">ANTES</span>
            </div>
          </div>
          <!-- Después -->
          <div class="gallery-case__side gallery-case__side--after">
            <div class="gallery-case__preview-box" style="background: ${c.despuesBg};">
              <span class="gallery-case__label gallery-case__label--after">DESPUÉS</span>
            </div>
          </div>
        </div>
        <div class="card__body">
          <h3 class="card__title">${c.titulo}</h3>
          <p class="card__text" style="margin-bottom: 0;">${c.descripcion}</p>
        </div>
      </article>
    `)
    .join('');

  return `
    <main class="page-galeria animate-fade-in">
      <section class="section">
        <!-- Encabezado -->
        <div class="container section-header" style="margin-bottom: var(--space-2xl);">
          <h1>Galería Antes y Después</h1>
          <p>
            Explora los excelentes resultados de nuestros tratamientos de estética y rehabilitación dental.
          </p>
        </div>

        <!-- Casos Clínicos -->
        <div class="container" style="max-width: var(--max-width-md);">
          <div class="gallery-grid">
            ${casosHtml}
          </div>

          <!-- Aviso obligatorio y visible -->
          <div class="gallery-disclaimer-box">
            <svg class="gallery-disclaimer-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
            <p class="gallery-disclaimer-text">
              <strong>Aviso Importante:</strong> Las imágenes y representaciones visuales mostradas en esta sección son ilustrativas con fines de demostración de los resultados esperados del tratamiento y no corresponden a pacientes reales de la clínica.
            </p>
          </div>
        </div>
      </section>
    </main>
  `;
}
