import styles from './Benefits.module.scss';

export default function Benefits() {
  return (
    <section id="ventajas" className={styles.qUenosdiferencia}>
      <div className={styles.tItulotexto}>
        <p className={styles.ventajasParaTuNegoci3}>
          <span className={styles.ventajasParaTuNegoci}>Ventajas para tu&nbsp;</span>
          <span className={styles.ventajasParaTuNegoci2}>Negocio</span>
        </p>
        <p className={styles.loremIpsumDolorSitAm}>
          beCard convierte el momento de pedir cerveza en una experiencia interactiva. Tus clientes se sirven
          cuando quieren y vos ganás control: menos espera, menos desperdicio y más información para administrar
          mejor.
        </p>
      </div>
      <div className={styles.bLoque}>
        <div className={styles.tRabajamoscontodasla}>
          <img src="/image/mkhlcu2b-2yn782v.svg" className={styles.iconsReportes} />
          <div className={styles.frame480957042}>
            <p className={styles.anLisisEnTiempoReal}>Experiencia única en tu bar</p>
            <p className={styles.loremIpsumDolorSitAm2}>
              Tu gente prueba, compara y se sirve a su ritmo. Eso se traduce en más tiempo disfrutando y más
              consumo.
            </p>
          </div>
        </div>
        <div className={styles.tRabajamoscontodasla}>
          <img src="/image/mkhlcu2b-btbbrkk.svg" className={styles.iconsReportes} />
          <div className={styles.frame480957042}>
            <p className={styles.anLisisEnTiempoReal}>Chau filas, hola rotación</p>
            <p className={styles.loremIpsumDolorSitAm2}>
              Reducí el cuello de botella de la barra en horarios pico y eventos con mucha gente.
            </p>
          </div>
        </div>
        <div className={styles.tRabajamoscontodasla2}>
          <div className={styles.frame4809570422}>
            <img src="/image/mkhlcu2b-c9kozqz.svg" className={styles.cerveza31} />
          </div>
          <div className={styles.frame480957042}>
            <p className={styles.anLisisEnTiempoReal}>Cobro exacto por mililitro</p>
            <p className={styles.loremIpsumDolorSitAm2}>
              El cliente paga por lo que se sirve. Menos derrames, menos “regalos”, más rendimiento del barril.
            </p>
          </div>
        </div>
        <div className={styles.tRabajamoscontodasla}>
          <img src="/image/mkhlcu2b-cv22vyp.svg" className={styles.iconsReportes} />
          <div className={styles.frame480957042}>
            <p className={styles.anLisisEnTiempoReal}>Liberás al personal</p>
            <p className={styles.loremIpsumDolorSitAm2}>
              Tu equipo deja de correr detrás de pintas y puede enfocarse en atención, tragos, comida y
              experiencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
