// src/features/Dashboard/Dashboard.jsx

import React from 'react';
import './Dashboard.css'; // We will create this next

// Import icons for the feature triggers
import { FaCalendarAlt, FaMapMarkedAlt, FaFileAlt, FaBox } from 'react-icons/fa';

function Dashboard() {
  // We'll add state and animations later. First, let's build the visual structure.

  return (
    <div className="dashboard-container">
      {/* Layer 1: The Background (for parallax later) */}
      <div className="background-layer"></div>

      {/* Layer 2: The Main Dashboard Grid */}
      <main className="main-dashboard">
        
        {/* --- Top Row Widgets --- */}
        <div className="widget-grid">
          <div className="widget small">
            <h4>ATTENDANCE</h4>
            {/* Placeholder content */}
          </div>
          <div className="widget large">
            <h4>DEADLINES</h4>
            {/* Placeholder content */}
          </div>
          <div className="widget small">
            <h4>PERFORMANCE</h4>
            {/* Placeholder content */}
          </div>
        </div>

        {/* --- Class Schedule Bar --- */}
        <div className="class-schedule-bar">
          <h4>CLASS SCHEDULE</h4>
          {/* Placeholder content */}
        </div>
      </main>

      {/* Layer 3: The Orange Features Section */}
      <section className="features-section">
        <div className="features-grid">
          
          <button className="feature-button">
            <FaCalendarAlt />
            <span>EVENT SCHEDULE</span>
          </button>
          
          <button className="feature-button">
            <FaMapMarkedAlt />
            <span>CAMPUS MAP</span>
          </button>
          
          <button className="feature-button">
            <FaFileAlt />
            <span>EXAM COUNTDOWN</span>
          </button>

          <button className="feature-button">
            <FaBox />
            <span>COMPLAINT BOX</span>
          </button>

        </div>

        {/* This is where the feature details will appear when a button is clicked */}
        <div className="feature-details-container">
            {/* Example of what the 'Upcoming Events' section would look like */}
            {/* We will make this appear dynamically later */}
            <div className="feature-detail-content">
                <h3>UPCOMING EVENTS</h3>
                {/* Placeholder for event cards */}
            </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;