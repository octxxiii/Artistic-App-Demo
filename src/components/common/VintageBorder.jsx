import React from 'react';

const VintageBorder = ({ children, className = '', style = {} }) => {
  return (
    <div 
      className={`relative border-2 border-black p-2 ${className}`}
      style={style}
    >
      {/* 인쇄 마크 */}
      <div className="print-mark top-left"></div>
      <div className="print-mark top-right"></div>
      <div className="print-mark bottom-left"></div>
      <div className="print-mark bottom-right"></div>
      
      {children}
    </div>
  );
};

export default VintageBorder; 