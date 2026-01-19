import styles from './Stats.module.scss';

export default function Stats() {
  const logos = [
    { src: '/image/client-logos/conejo-negro.jpg', alt: 'Conejo Negro' },
    { src: '/image/client-logos/perras.jpg', alt: 'El Perras' },
    { src: '/image/client-logos/humulus.jpg', alt: 'Humulus' },
    { src: '/image/client-logos/calaveras-diablitos.jpg', alt: 'Calaveras & Diablitos' },
    { src: '/image/client-logos/de-castillo.jpg', alt: 'De Castillo' }
  ];

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
        <div className={styles.marquee} aria-label="Marcas que confían en BeCard">
          <div className={styles.marqueeTrack}>
            {[...logos, ...logos].map((logo, index) => (
              <div className={styles.logoItem} key={`${logo.src}-${index}`}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={styles.logo}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
