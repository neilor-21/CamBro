import React from 'react';

function CTASection() {
  return (
    <section className="cta-section-container">
      
      <div className="cta-content">
        <h2>Ready to design out the struggle?</h2>
        {/* This button will eventually link to your main app dashboard */}
        <button className="cta-button" onClick={() => window.open('https://cambro.vercel.app/', '_blank')}>Explore the Dashboard</button>
      </div>
    </section>
  );
}

export default CTASection;