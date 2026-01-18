import styles from './Stats.module.scss';

export default function Stats() {
  return (
    <section id="estadisticas" className={styles.qUenosdiferencia4}>
      <div className={styles.tItulotexto4}>
        <p className={styles.ventajasParaTuNegoci3}>
          <span className={styles.ventajasParaTuNegoci}>Sistema&nbsp;</span>
          <span className={styles.ventajasParaTuNegoci2}>Inteligente</span>
        </p>
        <p className={styles.loremIpsumDolorSitAm2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, magna quis
          consequat vestibulum, nibh diam viverra est, ut pulvinar velit lectus id massa.
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
        <p className={styles.marcasQueConfAnEnBeC}>Marcas que confían en BeCard</p>
        <div className={styles.mArcas}>
          <img src="/image/mkhdre42-zi0nb74.svg" className={styles.logoipsum4021} />
          <img src="/image/mkhdre42-4egn922.svg" className={styles.logoipsum4021} />
          <img src="/image/mkhdre42-a3be38j.svg" className={styles.logoipsum4021} />
          <img src="/image/mkhdre42-20corsj.svg" className={styles.logoipsum4021} />
          <img src="/image/mkhdre42-z1x5yb2.svg" className={styles.logoipsum4021} />
        </div>
      </div>
    </section>
  );
}

