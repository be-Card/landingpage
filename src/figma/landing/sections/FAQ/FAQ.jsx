import styles from './FAQ.module.scss';

export default function FAQ() {
  return (
    <section id="faq" className={styles.fAq}>
      <div className={styles.titleBlock}>
        <p className={styles.title}>
          <span className={styles.titleBase}>Preguntas&nbsp;</span>
          <span className={styles.titleAccent}>frecuentes</span>
        </p>
        <p className={styles.subtitle}>
          Respondemos lo más común sobre autoservicio de cerveza, tarjeta RFID, control por mililitro y operación
          en bares y eventos.
        </p>
      </div>
      <div className={styles.list}>
        <details className={styles.item}>
          <summary className={styles.question}>¿Qué es beCard y para quién sirve?</summary>
          <div className={styles.answer}>
            <p>
              beCard es un sistema de autoservicio de cerveza pensado para bares, pubs, cervecerías, patios
              gastronómicos, boliches y eventos con mucha gente. El cliente se sirve de forma autónoma y paga por
              lo que se sirve.
            </p>
          </div>
        </details>
        <details className={styles.item}>
          <summary className={styles.question}>¿Cómo funciona el autoservicio con tarjeta RFID?</summary>
          <div className={styles.answer}>
            <p>
              El cliente carga saldo, apoya su tarjeta RFID beCard en el lector, se habilita la canilla y el sistema
              cobra por mililitro servido. Todo queda registrado en el panel para control y reportes.
            </p>
          </div>
        </details>
        <details className={styles.item}>
          <summary className={styles.question}>¿Se cobra por pinta o por mililitro?</summary>
          <div className={styles.answer}>
            <p>
              Se cobra por mililitro, así el cliente paga exactamente lo que se sirve. Esto ayuda a reducir merma,
              derrames y consumos no registrados.
            </p>
          </div>
        </details>
        <details className={styles.item}>
          <summary className={styles.question}>¿Qué información muestra el sistema inteligente?</summary>
          <div className={styles.answer}>
            <p>
              Podés ver consumos por canilla, por producto y por franja horaria, además de métricas de rendimiento
              del barril y reportes para tomar decisiones sobre reposición, rotación y precios.
            </p>
          </div>
        </details>
        <details className={styles.item}>
          <summary className={styles.question}>¿Se puede adaptar a una barra existente?</summary>
          <div className={styles.answer}>
            <p>
              Sí. beCard se puede implementar como instalación nueva o adaptación según tu espacio, cantidad de
              canillas y operación. En una demo vemos el caso y te proponemos la mejor configuración.
            </p>
          </div>
        </details>
        <details className={styles.item}>
          <summary className={styles.question}>¿Sirve para eventos y festivales?</summary>
          <div className={styles.answer}>
            <p>
              Sí. En eventos masivos, el autoservicio ayuda a bajar filas y mejorar la experiencia. El control por
              mililitro y los reportes permiten ordenar la operación y el cierre.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}

