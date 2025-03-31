import React from 'react';

const NoisePoints = ({ count = 100 }) => {
  const points = [];
  
  for (let i = 0; i < count; i++) {
    points.push(
      <div
        key={i}
        className="absolute bg-black opacity-80"
        style={{
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    );
  }
  
  return <>{points}</>;
};

export default NoisePoints; 