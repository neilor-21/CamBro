import React from 'react';
import './HomePage.css';

// Import all the separate, self-contained sections
import HeroSection from './HeroSection';
import ScrollytellingSection from './ScrollytellingSection';
import FeaturesSection from './FeaturesSection';
import TeamSection from './TeamSection';
import CTASection from './CTASection';

function HomePage() {
  return (
    <div className="homepage-container">
      <HeroSection />
      <ScrollytellingSection />
      <FeaturesSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}

export default HomePage;