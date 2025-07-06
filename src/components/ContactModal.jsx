import React from 'react';
import './ContactModal.css'; // We'll create this CSS file next

// This component receives a function to close itself, passed in as the 'onClose' prop
function ContactModal({ onClose }) {
  return (
    // The overlay darkens the background. Clicking it will close the modal.
    <div className="modal-overlay" onClick={onClose}>
      {/* We stop click propagation here so that clicking inside the modal doesn't close it */}
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>×</button>
        <h2>Get in Touch</h2>
        <p>Find us on social media or subscribe to our newsletter.</p>
        <div className="modal-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Dribbble</a>
            <a href="#">Twitter</a>
            <a href="#">Newsletter</a>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;