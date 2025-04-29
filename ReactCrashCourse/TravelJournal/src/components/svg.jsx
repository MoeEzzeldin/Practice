import React from 'react';
import './svg.css';

const Svg = () => {
  return (
    <div className="svg-container">
      <svg 
        className="responsive-svg" 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Nested group 1 - Background */}
        <g className="background">
          <rect x="0" y="0" width="100" height="100" fill="#f0f0f0" />
        </g>
        
        {/* Nested group 2 - Complex shape */}
        <g className="complex-shape">
          <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
          
          {/* Nested elements inside the main circle */}
          <g className="inner-elements">
            <circle cx="35" cy="40" r="5" fill="black" /> {/* Left eye */}
            <circle cx="65" cy="40" r="5" fill="black" /> {/* Right eye */}
            <path d="M 30 60 Q 50 70 70 60" stroke="black" strokeWidth="3" fill="none" /> {/* Smile */}
          </g>
        </g>
        
        {/* Nested group 3 - Decorative elements */}
        <g className="decorations">
          <circle cx="20" cy="20" r="5" fill="blue" />
          <circle cx="80" cy="20" r="5" fill="blue" />
          <circle cx="20" cy="80" r="5" fill="blue" />
          <circle cx="80" cy="80" r="5" fill="blue" />
        </g>
      </svg>
    </div>
  );
};

export default Svg;
