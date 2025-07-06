import React from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { FaRobot, FaBell, FaCalendarAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

function FeaturesSection() {
    useGSAP(() => {
        gsap.from('.feature-card', {
            scrollTrigger: {
                trigger: '.features-section-container',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0, y: 50, stagger: 0.2, duration: 0.8, ease: 'power3.out'
        });
    }, []);

  return (
    <section className="features-section-container">
      <div className="features-content">
        <h2>Everything you need. Nothing you don't.</h2>
        <div className="features-grid">
            <div className="feature-card"><FaRobot className="feature-icon" /><h3>AI-Powered Bot</h3><p>Ask anything, from library hours to exam schedules, and get instant answers.</p></div>
            <div className="feature-card"><FaBell className="feature-icon" /><h3>Smart Notifications</h3><p>Get automatic reminders for class, assignment deadlines, and college events.</p></div>
            <div className="feature-card"><FaCalendarAlt className="feature-icon" /><h3>Unified Calendar</h3><p>Your academics, deadlines, and events merge into a single, clear view.</p></div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;