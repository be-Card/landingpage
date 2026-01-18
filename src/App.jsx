import LandingPage from './figma/landing/LandingPage.jsx';
import ScaledFrame from './components/ScaledFrame.jsx';

const DESIGN_WIDTH = 1440;

export default function App() {
  return (
    <ScaledFrame designWidth={DESIGN_WIDTH}>
      <LandingPage />
    </ScaledFrame>
  );
}

