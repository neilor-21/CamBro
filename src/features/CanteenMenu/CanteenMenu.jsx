import React, { useState } from 'react';
import menuData from '../../data/canteenMenu.json';
import './CanteenMenu.css';

// Get the days of the week from our data
const days = Object.keys(menuData);

function CanteenMenu() {
  // Set the first day as the default
  const [selectedDay, setSelectedDay] = useState(days[0]);

  const todaysMenu = menuData[selectedDay];

  return (
    <div className="canteen-container">
      <div className="canteen-header">
        <h1>Canteen Menu</h1>
        <p>Select a day to see the menu.</p>
        <div className="day-selector">
          {days.map(day => (
            <button
              key={day}
              className={`day-btn ${selectedDay === day ? 'active' : ''}`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-display">
        <h2>Menu for {selectedDay}</h2>
        <div className="meal-cards-grid">
          {/* Map over the meals for the selected day */}
          {Object.keys(todaysMenu).map(mealType => (
            <div key={mealType} className="meal-card">
              <h3>{mealType}</h3>
              <ul>
                {todaysMenu[mealType].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CanteenMenu;