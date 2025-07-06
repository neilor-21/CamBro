import React, { useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import ContactModal from './ContactModal';
import './FloatingContact.css'; // This component's own CSS

const socialLinks = [
    { name: 'Facebook', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Dribbble', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Newsletter', url: '#' },
];

function FloatingContact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { width } = useWindowSize();
    const isMobile = width < 768; // We define mobile as anything less than 768px wide

    return (
        <>
            <div className="floating-contact-container">
                {isMobile ? (
                    // On mobile, show a button that opens the modal
                    <button onClick={() => setIsModalOpen(true)}>Contact</button>
                ) : (
                    // On desktop, show the full links
                    socialLinks.map((link, index) => (
                        <React.Fragment key={link.name}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                            {index < socialLinks.length - 1 && <span>/</span>}
                        </React.Fragment>
                    ))
                )}
            </div>
            {/* The modal only renders in the DOM when isModalOpen is true */}
            {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
        </>
    );
}

export default FloatingContact;