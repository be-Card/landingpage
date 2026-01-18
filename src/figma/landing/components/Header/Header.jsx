import styles from './Header.module.scss';
import { useCallback, useEffect, useMemo, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: 'Ventajas', hash: '#ventajas' },
      { label: 'Precios', hash: '#precios' },
      { label: 'Estadisticas', hash: '#estadisticas' },
      { label: 'Clientes', hash: '#clientes' },
      { label: 'FAQs', hash: '#faq' }
    ],
    []
  );

  const scrollToHash = useCallback((hash) => {
    if (!hash || !hash.startsWith('#')) return;
    const id = hash.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    const headerOffset = 90;
    const rect = target.getBoundingClientRect();
    const top = window.scrollY + rect.top - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.nAv}>
      <div className={styles.lOgo2}>
        <img src="/image/mkhlsdku-7hsebs3.png" className={styles.lOgo} />
      </div>
      <button
        type="button"
        className={styles.menuToggle}
        aria-label="Abrir menú"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((v) => !v)}
      >
        <span className={styles.menuIcon} />
      </button>
      <nav className={styles.mEnu}>
        {navItems.map((item) => (
          <a
            key={item.hash}
            className={styles.ventajas}
            href={item.hash}
            onClick={(e) => {
              e.preventDefault();
              scrollToHash(item.hash);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className={styles.bUttons}>
        <a
          className={styles.button2}
          href="https://clientes.becard.com.ar"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.button}>Iniciar Sesión</span>
        </a>
        <a
          className={styles.button3}
          href="#cta"
          onClick={(e) => {
            e.preventDefault();
            scrollToHash('#cta');
          }}
        >
          <span className={styles.button}>Solicitar Demo</span>
        </a>
      </div>
      {isMenuOpen ? (
        <div
          className={styles.mobileMenuBackdrop}
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <div
            className={styles.mobileMenu}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={styles.mobileMenuTop}>
              <span className={styles.mobileMenuTitle}>Menú</span>
              <button
                type="button"
                className={styles.mobileMenuClose}
                aria-label="Cerrar menú"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={styles.mobileMenuCloseIcon} />
              </button>
            </div>
            {navItems.map((item) => (
              <a
                key={`mobile-${item.hash}`}
                className={styles.mobileMenuLink}
                href={item.hash}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  scrollToHash(item.hash);
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              className={styles.mobileMenuCta}
              href="#cta"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                scrollToHash('#cta');
              }}
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
