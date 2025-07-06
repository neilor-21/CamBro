// src/features/CampusMap/CampusMap.jsx

import React, { useState } from 'react';
import points from '../../data/mapPoints.json';
// No need to import an image anymore!
import './CampusMap.css';

function CampusMap() {
  const [activePoint, setActivePoint] = useState(null);

  return (
    <div className="map-container">
      <h1>Interactive Campus Map</h1>
      {/* This div replaces the img tag */}
      <div className="map-placeholder">
        <span className="placeholder-text">Campus Map Area</span>
        {points.map(point => (
          <button
            key={point.id}
            className={`map-dot ${activePoint?.id === point.id ? 'active' : ''}`}
            style={{ top: `${point.y}%`, left: `${point.x}%` }}
            onClick={() => setActivePoint(point)}
          >
            <span>{point.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CampusMap;