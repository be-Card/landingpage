import styles from './LandingPage.module.scss';

import Benefits from './sections/Benefits/Benefits.jsx';
import CTA from './sections/CTA/CTA.jsx';
import ExperienceUnique from './sections/ExperienceUnique/ExperienceUnique.jsx';
import Footer from './sections/Footer/Footer.jsx';
import Hero from './sections/Hero/Hero.jsx';
import IntelligentSystem from './sections/IntelligentSystem/IntelligentSystem.jsx';
import Payments from './sections/Payments/Payments.jsx';
import PricingExperience from './sections/PricingExperience/PricingExperience.jsx';
import Testimonials from './sections/Testimonials/Testimonials.jsx';
import FAQ from './sections/FAQ/FAQ.jsx';

export default function LandingPage() {
  return (
    <div className={styles.lAndingpage}>
      <Hero />
      <Benefits />
      <ExperienceUnique />
      <PricingExperience />
      <Payments />
      <IntelligentSystem />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
