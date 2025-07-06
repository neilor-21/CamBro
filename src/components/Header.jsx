import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and Close icons
import './Header.css';
import campbroLogotype from '../assets/campbro-logotype.svg';

gsap.registerPlugin(ScrollTrigger);

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useGSAP(() => {
        // Animate the header in after the preloader
        gsap.from('.header-container', {
            y: '-100%',
            duration: 1,
            ease: 'power3.out',
            delay: 3 // Should match your preloader delay
        });

        // Animate header background color on scroll
        ScrollTrigger.create({
            trigger: ".homepage-container",
            start: "top top",
            end: "+=1",
            onUpdate: self => {
                const header = document.querySelector('.header-container');
                if (self.progress > 0) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        });
    });

    return (
        <header className="header-container">
            <div className="header-content">
                <div className="logo">
                    <img src={campbroLogotype} alt="Campbro Logo" />
                </div>
                <nav className={`nav-links ${isMenuOpen ? 'mobile-active' : ''}`}>
                    {/* These links will scroll to sections on the page */}
                    <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
                    <a href="#team" onClick={() => setIsMenuOpen(false)}>Team</a>
                    <a href="https://cambro.vercel.app/" target="_blank" rel="noopener noreferrer" className="cta-link">Explore App</a>
                </nav>
                <button className="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </header>
    );
}

export default Header;