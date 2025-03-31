import React from 'react';
import VintageBorder from '../common/VintageBorder';

const CalendarScreen = ({ 
  loading, 
  selectedDay, 
  setSelectedDay, 
  hoverButton, 
  setHoverButton,
  triggerGlitch,
  transition 
}) => {
  // 달력 날짜 생성
  const renderCalendarDays = () => {
    const days = [];
    const daysInMonth = 31;
    
    for (let i = 1; i <= daysInMonth; i++) {
      const hasMemory = i % 3 === 0;
      const isToday = i === 15;
      
      days.push(
        <div
          key={i}
          className={`w-8 h-8 flex items-center justify-center cursor-pointer transition-all duration-200
            ${hasMemory ? 'bg-black' : 'bg-transparent'}
            ${isToday ? 'border-2' : 'border'}
            ${selectedDay === i ? 'transform scale-110' : ''}
            border-black ${hasMemory ? 'text-white' : 'text-black'}`}
          style={{
            animationDelay: `${i * 50}ms`,
            animation: loading ? 'none' : 'fadeInCalendar 0.5s forwards'
          }}
          onClick={() => {
            setSelectedDay(i);
            triggerGlitch();
            setTimeout(() => {
              transition(hasMemory ? 'detail' : 'record', 'glitch');
            }, 300);
          }}
        >
          {i}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 헤더 이미지 */}
      <div className="h-24 bg-black flex justify-center items-center relative">
        <div className="flex items-center space-x-8">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-black"></div>
          </div>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-black"></div>
          </div>
        </div>
        <div className="absolute bottom-2 right-4 text-white text-xs">TRAGEDY IS NEAR</div>
      </div>
      
      <div className="h-4 bg-gray-200 repeating-text text-xs">
        <span>TRAGEDY IS NEAR LIFE FAR FROM COMEDY TRAGEDY IS NEAR LIFE FAR FROM COMEDY </span>
      </div>
      
      <div className="p-4 flex-1">
        {/* 헤더 */}
        <div className="bg-black text-white text-center py-2 mb-4 text-sm font-bold"
          style={{ 
            opacity: loading ? 0 : 1,
            transform: loading ? 'translateY(10px)' : 'translateY(0)',
            transition: 'opacity 0.5s, transform 0.5s'
          }}>
          MEMORY CALENDAR
        </div>
        
        {/* 월 선택 */}
        <div className="flex justify-between items-center mb-4"
          style={{ 
            opacity: loading ? 0 : 1,
            transition: 'opacity 0.5s 0.2s'
          }}>
          <button 
            className={`w-8 h-8 bg-black text-white text-center
              ${hoverButton === 'prev' ? 'transform scale-95 opacity-80' : ''}`}
            onMouseEnter={() => setHoverButton('prev')}
            onMouseLeave={() => setHoverButton(null)}
            onClick={() => triggerGlitch()}>
            &lt;
          </button>
          <div className="text-black font-bold">03/25</div>
          <button 
            className={`w-8 h-8 bg-black text-white text-center
              ${hoverButton === 'next' ? 'transform scale-95 opacity-80' : ''}`}
            onMouseEnter={() => setHoverButton('next')}
            onMouseLeave={() => setHoverButton(null)}
            onClick={() => triggerGlitch()}>
            &gt;
          </button>
        </div>
        
        {/* 요일 헤더 */}
        <div className="grid grid-cols-7 gap-1 mb-1"
          style={{ 
            opacity: loading ? 0 : 1,
            transition: 'opacity 0.5s 0.3s'
          }}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
            <div key={day} className="w-8 h-8 flex items-center justify-center text-black font-bold text-xs">
              {day}
            </div>
          ))}
        </div>
        
        {/* 달력 그리드 */}
        <div className="grid grid-cols-7 gap-1 opacity-0"
          style={{ 
            opacity: loading ? 0 : 1,
            transition: 'opacity 0.5s 0.4s'
          }}>
          {renderCalendarDays()}
        </div>
        
        {/* 행복 지수 */}
        <VintageBorder className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <div className="text-xs font-bold">HAPPINESS INDEX</div>
            <div className="w-4 h-4 rounded-full bg-black relative">
              <div className="absolute inset-1 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-1 mb-1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
              <div 
                key={i}
                className={`w-4 h-4 ${i <= 6 ? 'bg-black' : 'border border-black'}`}
                style={{
                  opacity: loading ? 0 : 1,
                  transition: `opacity 0.5s ${0.6 + i * 0.05}s`
                }}
              ></div>
            ))}
          </div>
          <div className="text-center text-xs">6/10</div>
        </VintageBorder>
        
        {/* 버튼 */}
        <div className="flex justify-between mt-6"
          style={{ 
            opacity: loading ? 0 : 1,
            transition: 'opacity 0.5s 0.8s'
          }}>
          <button 
            className={`bg-black text-white px-3 py-2 text-xs
              ${hoverButton === 'list' ? 'transform scale-95 opacity-80' : ''}`}
            onMouseEnter={() => setHoverButton('list')}
            onMouseLeave={() => setHoverButton(null)}
            onClick={() => {
              triggerGlitch();
              transition('list', 'noise');
            }}>
            LIST VIEW
          </button>
          <button 
            className={`bg-black text-white px-3 py-2 text-xs
              ${hoverButton === 'new' ? 'transform scale-95 opacity-80' : ''}`}
            onMouseEnter={() => setHoverButton('new')}
            onMouseLeave={() => setHoverButton(null)}
            onClick={() => {
              triggerGlitch();
              transition('record', 'noise');
            }}>
            NEW MEMORY
          </button>
        </div>
      </div>
      
      {/* 하단 배너 */}
      <div className="h-4 bg-gray-200 repeating-text text-xs mt-auto">
        <span>TRAGEDY IS NEAR LIFE FAR FROM COMEDY TRAGEDY IS NEAR LIFE FAR FROM COMEDY </span>
      </div>
    </div>
  );
};

export default CalendarScreen; 