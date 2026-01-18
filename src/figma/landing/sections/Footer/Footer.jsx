import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.fOoter}>
      <div className={styles.cOntenido}>
        <div className={styles.bLoque1}>
          <img src="/image/mkk6nunm-3r2r82i.png" className={styles.a10001449891Removebg} />
          <p className={styles.loremIpsumDolorSitAm}>
            Autoservicio de cerveza inteligente para bares, pubs y eventos en Argentina.
          </p>
        </div>
        <div className={styles.bLoque3}>
          <p className={styles.producto}>Producto</p>
          <div className={styles.listaEnlaces}>
            <p className={styles.caracterSticas}>Características y ventajas</p>
            <p className={styles.caracterSticas}>Planes y precios</p>
            <p className={styles.caracterSticas}>Sistema inteligente</p>
            <p className={styles.caracterSticas}>Preguntas frecuentes</p>
          </div>
        </div>
        <div className={styles.bLoque3}>
          <p className={styles.producto}>Empresa</p>
          <div className={styles.listaEnlaces}>
            <p className={styles.caracterSticas}>Nosotros</p>
            <p className={styles.caracterSticas}>Blog</p>
            <p className={styles.caracterSticas}>Carreras</p>
            <p className={styles.caracterSticas}>Contacto</p>
          </div>
        </div>
        <div className={styles.sEction}>
          <p className={styles.nuestrasRedesSociale}>Nuestras redes sociales</p>
          <div className={styles.frame4}>
            <img src="/image/mkk6nunk-o3gv8z1.svg" className={styles.instagram} />
            <img src="/image/mkk6nunk-xon2ie7.svg" className={styles.instagram} />
            <img src="/image/mkk6nunk-y8a2acu.svg" className={styles.instagram} />
            <img src="/image/mkk6nunk-x0cbuib.svg" className={styles.instagram} />
          </div>
        </div>
      </div>
      <div className={styles.fOoterbottom}>
        <p className={styles.a2025BeCardTodosLosD}>© 2025 BeCard. Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
