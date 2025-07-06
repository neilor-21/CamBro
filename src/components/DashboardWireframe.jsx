import React from 'react';
import './DashboardWireframe.css'; // We'll create this CSS next

function DashboardWireframe() {
  return (
    <div className="wireframe-container">
      {/* Header */}
      <div className="wireframe-header">
        <div className="circle"></div>
        <div className="line long"></div>
      </div>

      {/* Main Content */}
      <div className="wireframe-body">
        <div className="wireframe-card large"></div>
        <div className="wireframe-card small"></div>
        <div className="wireframe-card small"></div>
      </div>

      {/* Bottom Nav */}
      <div className="wireframe-footer">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default DashboardWireframe;