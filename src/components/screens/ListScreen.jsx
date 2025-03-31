import React from 'react';
import VintageBorder from '../common/VintageBorder';
import GridPattern from '../common/GridPattern';

const ListScreen = ({ 
  loading, 
  selectedDay, 
  setSelectedDay, 
  hoverButton, 
  setHoverButton,
  triggerGlitch,
  transition 
}) => {
  return (
    <div className="vintage-container min-h-screen flex flex-col">
      {/* 그리드 패턴 배경 */}
      <GridPattern />
      
      {/* 콘텐츠 영역 */}
      <div className="content-area flex flex-col min-h-screen">
        {/* 헤더 */}
        <div className="p-4 border-b-2 border-black flex justify-between items-center">
          <div className="text-sm font-bold">MEMORY ARCHIVE</div>
          <div className="text-xs">CREATED: 03.2025</div>
        </div>
        
        <div className="p-4 flex-1 flex flex-col">
          {/* 타이틀 */}
          <VintageBorder className="mb-6">
            <h1 className="text-xl font-bold text-center">GALLERY VIEW</h1>
          </VintageBorder>
          
          {/* 메모리 갤러리 그리드 */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[...Array(9)].map((_, i) => {
              // 다양한 이미지 타입
              const isBlack = i === 5 || i === 6;
              const borderStyle = i % 3 === 2 ? "border-dashed" : "border-solid";
              
              return (
                <div 
                  key={i} 
                  className={`vintage-border ${borderStyle} cursor-pointer overflow-hidden relative`}
                  style={{
                    animation: loading ? 'none' : 'fadeInCalendar 0.3s forwards',
                    animationDelay: `${i * 60}ms`,
                    aspectRatio: '1',
                    backgroundColor: isBlack ? '#000' : '#FFF',
                  }}
                  onClick={() => {
                    setSelectedDay(15 + (i % 4));
                    triggerGlitch();
                    setTimeout(() => {
                      transition('detail', 'glitch', 'list');
                    }, 300);
                  }}
                >
                  {/* 인쇄 효과 - 일부 셀에만 적용 */}
                  {i % 4 === 0 && (
                    <div className="absolute inset-0 halftone-effect"></div>
                  )}
                  
                  {/* 이미지 */}
                  {i === 5 ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2/3 h-1/2 relative">
                        {[...Array(5)].map((_, dotIndex) => (
                          <div 
                            key={dotIndex} 
                            className="absolute bg-white rounded-full"
                            style={{
                              width: `${8 + Math.random() * 10}px`,
                              height: `${8 + Math.random() * 10}px`,
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ) : i === 6 ? (
                    <div className="w-full h-full flex items-end justify-center pb-8">
                      <div className="w-1/2 h-8 bg-white" style={{ borderRadius: '100% 100% 0 0' }}></div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs opacity-50">
                      {i + 1}/9
                    </div>
                  )}
                  
                  <div className="absolute bottom-2 right-2 text-xs" style={{ color: isBlack ? 'white' : 'black' }}>
                    03.{15 + (i % 15)}.25
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* 빈티지 텍스트 블록 */}
          <VintageBorder className="mb-6">
            <p className="mb-2 text-xs leading-tight" style={{ fontSize: '10px' }}>
              people with borderline traits tend to lack a sense of emotional permanence.
              they believe, with all their hearts, that they will always be abandoned one day,
              and they will wait, with the vigilance and the discipline of the chronically wounded,
              for the signs that they should excise themselves from the situation immediately.
            </p>
            <div className="flex justify-end">
              <div className="text-right text-xs opacity-50">printed memory archive / 03.2025</div>
            </div>
          </VintageBorder>
          
          {/* 버튼 */}
          <div className="flex justify-between mt-auto">
            <button 
              className={`vintage-button
                ${hoverButton === 'calendar' ? 'transform scale-95' : ''}`}
              onMouseEnter={() => setHoverButton('calendar')}
              onMouseLeave={() => setHoverButton(null)}
              onClick={() => {
                triggerGlitch();
                transition('calendar', 'glitch');
              }}>
              CALENDAR VIEW
            </button>
            <button 
              className={`vintage-button
                ${hoverButton === 'newFromList' ? 'transform scale-95' : ''}`}
              onMouseEnter={() => setHoverButton('newFromList')}
              onMouseLeave={() => setHoverButton(null)}
              onClick={() => {
                triggerGlitch();
                transition('record', 'noise');
              }}>
              NEW MEMORY
            </button>
          </div>
        </div>
        
        {/* 푸터 */}
        <div className="border-t-2 border-black p-2 flex justify-between items-center">
          <div className="text-xs opacity-70">MEMORIES: 9</div>
          <div className="text-xs opacity-70">PAGE 01/01</div>
        </div>
      </div>
    </div>
  );
};

export default ListScreen; 