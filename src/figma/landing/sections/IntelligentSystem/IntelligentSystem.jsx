import styles from './IntelligentSystem.module.scss';
import { useMemo, useState } from 'react';

export default function IntelligentSystem() {
  const logos = useMemo(
    () => [
      { src: '/image/client-logos/conejo-negro.jpg', alt: 'Conejo Negro' },
      { src: '/image/client-logos/perras.jpg', alt: 'El Perras' },
      { src: '/image/client-logos/humulus.jpg', alt: 'Humulus' },
      { src: '/image/client-logos/calaveras-diablitos.jpg', alt: 'Calaveras & Diablitos' },
      { src: '/image/client-logos/de-castillo.jpg', alt: 'De Castillo' }
    ],
    []
  );
  const [failedIndexes, setFailedIndexes] = useState(() => new Set());
  const handleLogoError = (index) => () => {
    setFailedIndexes((prev) => {
      if (prev.has(index)) return prev;
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  return (
    <section id="estadisticas" className={styles.qUenosdiferencia}>
      <div className={styles.tItulotexto}>
        <p className={styles.sistemaInteligente3}>
          <span className={styles.sistemaInteligente}>Sistema&nbsp;</span>
          <span className={styles.sistemaInteligente2}>Inteligente</span>
        </p>
        <p className={styles.loremIpsumDolorSitAm}>
          Tené visibilidad del rendimiento de tus barriles, consumos por franja horaria y operación por canilla.
          Tomá decisiones con datos: rotación, reposición y rentabilidad.
        </p>
      </div>

      <div className={styles.screenContent}>
        <div className={styles.aPlaceDesignHere}>
          <div className={styles.dots}>
            <div className={styles.red} />
            <div className={styles.yellow} />
            <div className={styles.green} />
          </div>
        </div>
      </div>

      <div className={styles.frame480957048}>
        <p className={styles.marcasQueConfAnEnBeC}>Marcas que ya trabajan con beCard</p>
        <div className={styles.mArcas}>
          <div className={styles.mArcasTrack}>
            {logos.concat(logos).map((logo, index) => {
              const baseIndex = index % logos.length;
              const failed = failedIndexes.has(baseIndex);
              return (
                <div className={styles.logoItem} key={`${logo.src}-${index}`}>
                  {failed ? (
                    <span className={styles.logoFallback}>{logo.alt}</span>
                  ) : (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={styles.logo}
                      loading="lazy"
                      onError={handleLogoError(baseIndex)}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
