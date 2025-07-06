import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


function HeroSection() {

    useGSAP(() => {
        // --- Create a timeline for the entrance animation ---
        const tl = gsap.timeline({ delay: 0.5 }); // Add a small delay after the preloader disappears

        // Animate the headline text appearing, one line at a time
        tl.from('.hero-line span', {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out'
        });

        // Animate the subtext fading in
        tl.from('.hero-subtext', {
            opacity: 0,
            duration: 0.5
        }, "-=0.5"); // Start this slightly before the previous animation ends

        // Animate the caged shape appearing
        tl.from('.cage', {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, "<"); // Start this at the same time as the headline animation

        // Animate the scroll down indicator appearing
        tl.from('.scroll-down-indicator', {
            opacity: 0,
            duration: 1,
            // Add a repeating up-and-down "bobbing" effect
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut'
        }, ">-0.5"); // Start this near the end of the main timeline

        
        // --- Create the continuous "breathing" animation for the shape ---
        gsap.to('.shape', {
            scale: 1.1,
            yoyo: true, // It will scale back down automatically
            repeat: -1, // Repeat indefinitely
            duration: 2,
            ease: 'sine.inOut' // A very smooth, natural ease
        });

    }, []);

    return (
        <section className="hero-container">
            <div className="hero-content">
                {/* We wrap each line in a div to hide the overflow for the animation */}
                <div className="hero-line"><span>College is complicated.</span></div>
                <div className="hero-line"><span>Your app shouldn't be.</span></div>
                <p className="hero-subtext">Welcome to Campbro.</p>
            </div>

            {/* The new "Caged Shape" animation element */}
            <div className="caged-shape-container">
                <div className="cage">
                    <div className="shape"></div>
                </div>
            </div>

            <div className="scroll-down-indicator">
                <span>Scroll Down</span>
            </div>
        </section>
    );
}

export default HeroSection;