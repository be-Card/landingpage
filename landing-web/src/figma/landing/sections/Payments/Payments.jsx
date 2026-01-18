import styles from './Payments.module.scss';

export default function Payments() {
  return (
    <section className={styles.qUenosdiferencia}>
      <img src="/image/mkk49oo1-k1hgm7n.png" className={styles.rectangle25} />
      <div className={styles.frame480957045}>
        <div className={styles.tItulotexto}>
          <p className={styles.mTodosDePagoFlexible3}>
            <span className={styles.mTodosDePagoFlexible}>Pagos simples y&nbsp;</span>
            <span className={styles.mTodosDePagoFlexible2}>control por tirada</span>
          </p>
          <p className={styles.loremIpsumDolorSitAm}>
            Cargá saldo de la forma que prefieras y servite con tu beCard. Cada canilla se habilita y se cobra por
            mililitro servido, con registro automático.
          </p>
        </div>
        <div className={styles.frame480957046}>
          <div className={styles.tRabajamoscontodasla}>
            <div className={styles.iconsQr}>
              <img src="/image/mkk49ony-1s0qlg6.svg" className={styles.frame480957047} />
            </div>
            <div className={styles.frame480957042}>
              <p className={styles.cDigosQr}>Códigos QR</p>
              <p className={styles.loremIpsumDolorSitAm2}>
                Para cargar saldo o cobrar rápido en el punto de venta, sin demoras.
              </p>
            </div>
          </div>
          <div className={styles.tRabajamoscontodasla2}>
            <img src="/image/mkk49ony-qt1q2gq.svg" className={styles.iconsWifi} />
            <div className={styles.frame480957042}>
              <p className={styles.cDigosQr}>NFC / Contactless</p>
              <p className={styles.loremIpsumDolorSitAm2}>
                Acercás y listo: pagos sin fricción para agilizar la operación en horas pico.
              </p>
            </div>
          </div>
          <div className={styles.tRabajamoscontodasla3}>
            <img src="/image/mkk49ony-z68zl0y.svg" className={styles.iconsWifi} />
            <div className={styles.frame480957042}>
              <p className={styles.cDigosQr}>Tarjeta RFID beCard</p>
              <p className={styles.loremIpsumDolorSitAm2}>
                Servite cuando querés: apoyás la tarjeta, se habilita la canilla y se cobra por ml.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
