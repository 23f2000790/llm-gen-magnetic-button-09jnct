import React, { useState, useRef } from 'react';

const MagneticButton = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    setMousePosition({ x: x * 0.3, y: y * 0.3 }); // Adjust multiplier for stronger/weaker effect
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden inline-flex items-center justify-center
                 px-8 py-4 rounded-full bg-black text-white text-lg font-semibold
                 hover:bg-gray-800 transition-colors duration-300 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
    >
      <span
        className="relative z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        {children}
      </span>
    </button>
  );
};

export default MagneticButton;
