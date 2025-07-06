import React from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

// IMPORTANT: Replace with your team's details and image paths
const teamMembers = [
  { name: 'Advika', role: 'UI/UX & Content Writer', img: '/src/assets/advika.jpg' },
  { name: 'Abin', role: 'Developer', img: '/src/assets/abin.jpg' },
  { name: 'Abhijith', role: 'UI/UX & Content Designer', img: '/src/assets/abhijith.jpg' },
  { name: 'Neil', role: 'Developer', img: '/src/assets/neil.png' },
];

function TeamSection() {
    
    useGSAP(() => {
        // A consistent animation for the team cards
        gsap.from('.team-card', {
            scrollTrigger: {
                trigger: '.team-section-container',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out'
        });
    }, []);

  return (
    <section className="team-section-container">
      <div className="team-content">
        <h2>Meet the Architects</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              {/* Add your images to the assets folder */}
              <img src={member.img} alt={`Avatar of ${member.name}`} className="team-photo" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;