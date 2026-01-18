import styles from './Testimonials.module.scss';
import { useEffect, useMemo, useRef } from 'react';

export default function Testimonials() {
  const testimonials = useMemo(
    () => [
      {
        rating: 5,
        quote:
          '“Desde que pusimos beCard bajó un montón la merma. Antes era todo a ojo; ahora vemos litros y ventas en el momento y se nota en la caja.”',
        name: 'Martín Gómez',
        business: 'Bar en Palermo',
      },
      {
        rating: 5,
        quote:
          '“Lo mejor es el control de canillas: si algo no cierra, lo detectamos rápido. También nos ordenó los cierres de turno y evitamos discusiones.”',
        name: 'Sofía Rivas',
        business: 'Restó cervecero',
      },
      {
        rating: 5,
        quote:
          '“Implementarlo fue más simple de lo que pensábamos. Con el dashboard tenemos claros los picos, qué estilos rotan y cuándo conviene reponer.”',
        name: 'Nicolás Ferraro',
        business: 'Fábrica de cerveza + taproom',
      },
      {
        rating: 5,
        quote:
          '“El autoservicio nos cambió la dinámica en eventos: menos fila, más ventas. Y con los reportes sabemos qué promociones realmente funcionan.”',
        name: 'Camila Sosa',
        business: 'Patio gastronómico',
      },
      {
        rating: 5,
        quote:
          '“Antes perdíamos tiempo con planillas. Ahora el equipo labura con datos: consumos por hora, rendimiento por canilla y alertas cuando algo se desvía.”',
        name: 'Diego Varela',
        business: 'Cervecería de barrio',
      },
      {
        rating: 5,
        quote:
          '“Nos ayudó a estandarizar el servicio: misma medida, misma calidad. Y el cliente se engancha con el sistema, vuelve y recomienda.”',
        name: 'Florencia Medina',
        business: 'Bar en Córdoba capital',
      },
      {
        rating: 5,
        quote:
          '“Con beCard pudimos medir rentabilidad real por estilo. Ajustamos precios y tiradas, y en dos meses recuperamos la inversión.”',
        name: 'Leandro Benítez',
        business: 'Restaurante con barra',
      },
      {
        rating: 5,
        quote:
          '“La trazabilidad de consumos nos ordenó todo: stock, rotación y control. Hoy tomamos decisiones con info y no por intuición.”',
        name: 'Paula Ibarra',
        business: 'Brewpub',
      },
    ],
    [],
  );

  const viewportRef = useRef(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const getStep = () => {
      const firstCard = viewport.querySelector('[data-testid="testimonial-card"]');
      if (!firstCard) return 0;
      const cardRect = firstCard.getBoundingClientRect();
      const grid = viewport.querySelector('[data-testid="testimonial-grid"]');
      const gap = grid
        ? Number.parseFloat(window.getComputedStyle(grid).columnGap || '0')
        : 0;
      return cardRect.width + gap;
    };

    let intervalId = window.setInterval(() => {
      const step = getStep();
      if (!step) return;
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const nextLeft = viewport.scrollLeft + step;
      viewport.scrollTo({ left: nextLeft >= maxScroll - 1 ? 0 : nextLeft, behavior: 'smooth' });
    }, 6500);

    const onPointerEnter = () => {
      window.clearInterval(intervalId);
    };
    const onPointerLeave = () => {
      window.clearInterval(intervalId);
      intervalId = window.setInterval(() => {
        const step = getStep();
        if (!step) return;
        const maxScroll = viewport.scrollWidth - viewport.clientWidth;
        const nextLeft = viewport.scrollLeft + step;
        viewport.scrollTo({ left: nextLeft >= maxScroll - 1 ? 0 : nextLeft, behavior: 'smooth' });
      }, 6500);
    };

    viewport.addEventListener('mouseenter', onPointerEnter);
    viewport.addEventListener('mouseleave', onPointerLeave);

    return () => {
      window.clearInterval(intervalId);
      viewport.removeEventListener('mouseenter', onPointerEnter);
      viewport.removeEventListener('mouseleave', onPointerLeave);
    };
  }, []);

  return (
    <section id="clientes" className={styles.tEstimonial}>
      <div className={styles.frame480957049}>
        <p className={styles.testimoniosDeNuestro}>Testimonios de nuestros clientes</p>
        <p className={styles.loremIpsumDolorSitAm}>
          Bares, cervecerías y eventos que ya usan beCard para bajar tiempos de espera, reducir merma y vender
          con más control.
        </p>
      </div>
      <div ref={viewportRef} className={styles.carouselViewport}>
        <div className={styles.gRid} data-testid="testimonial-grid">
          {testimonials.map((t, index) => (
            <div key={`${t.name}-${index}`} className={styles.cOntent} data-testid="testimonial-card">
              <div className={styles.frame480957050}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <img
                    key={`${t.name}-${i}`}
                    src={`/image/${i < t.rating ? 'mkk5qkh2-zdzpotu.svg' : 'mkk5qkh2-dlyhqh2.svg'}`}
                    className={styles.iconsEstrella}
                  />
                ))}
              </div>
              <p className={styles.aLoremIpsumDolorSitA}>{t.quote}</p>
              <div className={styles.aUtor}>
                <div className={styles.nAme}>
                  <p className={styles.juanPRez}>{t.name}</p>
                  <p className={styles.cervecerAArtesanal}>{t.business}</p>
                </div>
                <img src="/image/mkk5qkh5-hwlmy2w.png" className={styles.image2} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
