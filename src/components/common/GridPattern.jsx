import React from 'react';

const GridPattern = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="grid-pattern"></div>
      <div className="registration-marks">
        <div className="registration-mark top-left-mark"></div>
        <div className="registration-mark top-right-mark"></div>
        <div className="registration-mark bottom-left-mark"></div>
        <div className="registration-mark bottom-right-mark"></div>
      </div>
    </div>
  );
};

export default GridPattern; 