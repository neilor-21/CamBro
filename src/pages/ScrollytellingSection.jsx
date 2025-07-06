import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dashboardDemoVideo from '../assets/dashboard-demo.mp4';
import campbroLogo from '../assets/campbro-logotype.svg';

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

function ScrollytellingSection() {
  
  useGSAP(() => {
    // Create the master timeline for the entire scrolling animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.scrolly-container',
        start: 'top top',
        end: '+=8000', // A long scroll distance for the full animation
        scrub: 1,      // Smoothly links the animation to the scrollbar
        pin: true,     // Pins the section while the animation is playing
      }
    });

    // --- ACT 1: THE DECONSTRUCTION ---
    // First, animate the main headline fading out.
    tl.to('.problem-headline', { 
      opacity: 0, 
      duration: 5 
    });

    // AT THE SAME TIME, animate the "chaos" elements flying away.
    tl.to('.chaos-element', {
      y: () => gsap.utils.random(-300, 300) + '%',
      x: () => gsap.utils.random(-300, 300) + '%',
      rotation: () => gsap.utils.random(-360, 360),
      opacity: 0,
      stagger: 0.1,
      duration: 10,
      ease: 'power2.in'
    }, "<"); // The "<" starts this at the same time as the headline fade

    // --- ACT 2: THE SOLUTION EMERGES ---
    // After a pause, animate the desktop window appearing.
    tl.fromTo('.desktop-window', 
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 15, ease: 'power3.out' }, 
      "+=1" // Adds a small delay after the chaos elements are gone
    );

    // --- ACT 3: THE VALUE PROPOSITION (TEXT CYCLING) ---
    tl.fromTo('.text-group.unified', { opacity: 0 }, { opacity: 1, duration: 5 }, "+=10");
    tl.to('.text-group.unified', { opacity: 0, duration: 5 }, "+=15");
    tl.fromTo('.text-group.intelligent', { opacity: 0 }, { opacity: 1, duration: 5 });
    tl.to('.text-group.intelligent', { opacity: 0, duration: 5 }, "+=15");
    tl.fromTo('.text-group.seamless', { opacity: 0 }, { opacity: 1, duration: 5 });

    // --- Part 2: Fade out the Desktop Scene ---
    tl.to(['.desktop-window', '.text-group.seamless'], { opacity: 0, duration: 10 }, "+=15");

    // --- Part 3: Animate in the Brand Reveal Scene ---
    tl.fromTo('.brand-reveal-container', 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 10, ease: 'power2.out' }, 
        "<" // Start this as the previous scene fades out for a cross-fade
    );

    // Stagger in the brand pillars for a nice effect
    tl.from('.brand-pillar', { y: 30, opacity: 0, stagger: 0.3, duration: 5 }, "-=5")

    // --- ACT 4: THE FINAL FADE OUT ---
    // Before the pin ends, fade out the entire scene to seamlessly transition.
    tl.to('.scrolly-content', { 
      opacity: 0, 
      duration: 10 
    }, "+=15");

  }, []);

  return (
    <section className="scrolly-container">
      <div className="scrolly-content">
        
        <div className="problem-container">
          <h2 className="problem-headline">Your life is scattered across a dozen different tools.</h2>
          <div className="chaos-elements">
            <div className="chaos-element">DEADLINE: History Paper</div>
            <div className="chaos-element">85% Attendance</div>
            <div className="chaos-element">Calendar Event</div>
            <div className="chaos-element">Bus Schedule</div>
            <div className="chaos-element">Library Book Due</div>
          </div>
        </div>

        <div className="desktop-window">
          <div className="window-header">
              <div className="dot red"></div><div className="dot yellow"></div><div className="dot green"></div>
          </div>
          <div className="window-content">
              <video src={dashboardDemoVideo} autoPlay loop muted playsInline></video>
          </div>
        </div>

        <div className="solution-text-container">
          <div className="text-group unified">
            <h3>Unified.</h3>
            <p>One dashboard for your entire college life.</p>
          </div>
          <div className="text-group intelligent">
            <h3>Intelligent.</h3>
            <p>AI-powered suggestions and reminders, so you never miss a thing.</p>
          </div>
          <div className="text-group seamless">
            <h3>Seamless.</h3>
            <p>Find what you need, when you need it. From your class to your bus.</p>
          </div>
        </div>
        <div className="brand-reveal-container">
          <img src={campbroLogo} alt="Campbro Logo" className="brand-logo" />
          <h2 className="brand-tagline">Order from Chaos.</h2>
          <div className="brand-pillars">
            <div className="brand-pillar">
              <h3>Unified</h3>
              <p>All your tools in one place.</p>
            </div>
            <div className="brand-pillar">
              <h3>Intelligent</h3>
              <p>AI-powered assistance.</p>
            </div>
            <div className="brand-pillar">
              <h3>Seamless</h3>
              <p>Designed to be effortless.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ScrollytellingSection;