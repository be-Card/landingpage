import styles from './Hero.module.scss';

import Header from '../../components/Header/Header.jsx';

export default function Hero() {
  return (
    <div className={styles.frame1}>
      <Header />
      <p className={styles.revolucionaTuCervece3}>
        <span className={styles.revolucionaTuCervece}>Revolucioná tu barra con&nbsp;</span>
        <span className={styles.revolucionaTuCervece2}>autoservicio</span>
        <span className={styles.revolucionaTuCervece}>&nbsp;de cerveza inteligente</span>
      </p>
      <p className={styles.loremIpsumDolorSitAm}>
        Menos filas, más ventas y una experiencia que la gente comparte. Canillas inteligentes + tarjeta
        RFID para servir y pagar por mililitro, con control en tiempo real.
      </p>
      <div className={styles.frame480957040}>
        <a className={styles.button2} href="#cta">
          <img src="/image/mkhlsdpl-4gsct73.svg" className={styles.iconsListo} />
          <span className={styles.button}>Solicitar Demo</span>
        </a>
        <a className={styles.button4} href="#precios">
          <span className={styles.button3}>Ver Planes</span>
        </a>
      </div>
      <div className={styles.frame6}>
        <div className={styles.frame4}>
          <p className={styles.a500}>Menos filas</p>
          <p className={styles.canillasActivas}>Servicio más rápido</p>
        </div>
        <div className={styles.frame4}>
          <p className={styles.a500}>Más ventas</p>
          <p className={styles.canillasActivas}>Mejor rendimiento</p>
        </div>
        <div className={styles.frame4}>
          <p className={styles.a500}>En vivo</p>
          <p className={styles.canillasActivas}>Panel y reportes</p>
        </div>
      </div>
    </div>
  );
}
