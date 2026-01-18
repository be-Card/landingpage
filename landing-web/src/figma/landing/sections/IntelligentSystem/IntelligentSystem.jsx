import styles from './IntelligentSystem.module.scss';
import { useMemo } from 'react';

export default function IntelligentSystem() {
  const logos = useMemo(
    () => [
      '/image/mkk4q0z2-xenobbe.svg',
      '/image/mkk4q0z2-fivdn11.svg',
      '/image/mkk4q0z2-7uio3wo.svg',
      '/image/mkk4q0z2-8tshpl3.svg',
      '/image/mkk4q0z2-113pmgt.svg'
    ],
    []
  );

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
            {logos.concat(logos).map((src, index) => (
              <img key={`${src}-${index}`} src={src} className={styles.logoipsum4021} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
