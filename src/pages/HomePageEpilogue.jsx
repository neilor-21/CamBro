import React from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { FaRobot, FaBell, FaCalendarAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

// --- Your Team's Data ---
const teamMembers = [
  { name: 'Abin', role: 'UI/UX & Frontend', img: '/src/assets/abin-avatar.png' },
  { name: 'Your Name', role: 'Lead & Animation', img: '/src/assets/your-avatar.png' },
  { name: 'Teammate 3', role: 'Features & Logic', img: '/src/assets/teammate3-avatar.png' },
];

function HomePageEpilogue() {

    useGSAP(() => {
        // Animation for the Features Section
        gsap.from('.feature-card', {
            scrollTrigger: { trigger: '.features-section-container', start: 'top 80%', toggleActions: 'play none none none' },
            opacity: 0, y: 50, stagger: 0.2, duration: 0.8, ease: 'power3.out'
        });

        // Animation for the Team Section
        gsap.from('.team-card', {
            scrollTrigger: { trigger: '.team-section-container', start: 'top 80%', toggleActions: 'play none none none' },
            opacity: 0, y: 50, stagger: 0.2, duration: 0.8, ease: 'power3.out'
        });
        
        // Animation for the CTA Section
        const ctaTimeline = gsap.timeline({
            scrollTrigger: { trigger: '.cta-section-container', start: 'top 70%', toggleActions: 'play none none none' }
        });
        ctaTimeline.from('.cta-content h2', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' })
                   .from('.cta-button', { scale: 0.8, opacity: 0, duration: 1, ease: 'elastic.out(1, 0.5)' }, "-=0.75");
    }, []);

    return (
        <>
            {/* --- ACT 3: THE PROOF --- */}
            <section className="features-section-container">
                <div className="features-content">
                    <h2>Everything you need. Nothing you don't.</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <FaRobot className="feature-icon" />
                            <h3>AI-Powered Bot</h3>
                            <p>Ask anything, from library hours to exam schedules, and get instant answers.</p>
                        </div>
                        <div className="feature-card">
                            <FaBell className="feature-icon" />
                            <h3>Smart Notifications</h3>
                            <p>Get automatic reminders for class, assignment deadlines, and college events.</p>
                        </div>
                        <div className="feature-card">
                            <FaCalendarAlt className="feature-icon" />
                            <h3>Unified Calendar</h3>
                            <p>Your academics, deadlines, and events merge into a single, clear view.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ACT 4: THE ARCHITECTS --- */}
            <section className="team-section-container">
                <div className="team-content">
                    <h2>Meet the Architects</h2>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-card">
                                <img src={member.img} alt={`Avatar of ${member.name}`} className="team-photo" />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- ACT 5: THE FINAL ACTION --- */}
            <section className="cta-section-container">
                <div className="cta-content">
                    <h2>Ready to design out the struggle?</h2>
                    <button className="cta-button">Explore the Dashboard</button>
                </div>
            </section>
        </>
    );
}

export default HomePageEpilogue;