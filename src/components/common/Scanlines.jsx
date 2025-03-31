import React from 'react';

const Scanlines = () => {
  const lines = [];
  
  // 정적 스캔라인
  for (let i = 0; i < 100; i += 4) {
    lines.push(
      <div
        key={i}
        className="absolute left-0 right-0 h-px bg-black opacity-10"
        style={{ top: `${i}%` }}
      />
    );
  }
  
  // 움직이는 스캔라인
  lines.push(
    <div
      key="active-scanline"
      className="absolute left-0 right-0 h-1 bg-black opacity-20"
      style={{ 
        top: '0%',
        animation: 'moveScanline 10s linear infinite'
      }}
    />
  );
  
  return <>{lines}</>;
};

export default Scanlines; 