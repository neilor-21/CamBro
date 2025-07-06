import React, { useState } from 'react';
import schedules from '../../data/busSchedules.json';

// 1. Import icons from the library
import { FaBusAlt, FaTrain } from 'react-icons/fa';
import { FiClock, FiMapPin } from 'react-icons/fi';

import './BusSchedule.css'; // We will upgrade this file next

function BusSchedule() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSchedules = schedules.filter(schedule =>
    schedule.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <h1>Bus & Train Schedules</h1>
        <input
          type="text"
          placeholder="Search for a destination..."
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="schedule-list">
        {filteredSchedules.map((schedule) => (
          // Add a class to the card based on type for specific styling
          <div key={schedule.id} className={`schedule-card ${schedule.type.toLowerCase()}`}>
            <div className="card-header">
              {/* 2. Use the icons right in your code! */}
              {schedule.type === 'Bus' ? <FaBusAlt /> : <FaTrain />}
              <span className="type-badge">{schedule.type}</span>
            </div>
            
            {/* 3. Add the missing route info */}
            <div className="card-body">
              <h3 className="route-title">{schedule.route}</h3>
              <div className="info-row">
                <FiClock className="info-icon" />
                <span>{schedule.time}</span>
              </div>
            </div>

            <div className="card-footer">
              <span className={`status ${schedule.status.toLowerCase().replace(' ', '-')}`}>
                {schedule.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusSchedule;