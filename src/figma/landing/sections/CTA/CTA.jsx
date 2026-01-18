import styles from './CTA.module.scss';

export default function CTA() {
  return (
    <section id="cta" className={styles.cTa}>
      <p className={styles.aListoParaRevolucion3}>
        <span className={styles.aListoParaRevolucion}>¿Listo para </span>
        <span className={styles.aListoParaRevolucion2}>revolucionar</span>
        <span className={styles.aListoParaRevolucion}> tu cervecería?</span>
      </p>
      <div className={styles.frame480957051}>
        <div className={styles.button2}>
          <img src="/image/mkk64ung-9vdmhnr.svg" className={styles.iconsListo} />
          <p className={styles.button}>Solicitar Demo Gratis</p>
        </div>
        <div className={styles.button4}>
          <p className={styles.button3}>Contactar Ventas</p>
        </div>
      </div>
    </section>
  );
}
