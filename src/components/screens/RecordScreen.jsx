import React from 'react';
import VintageBorder from '../common/VintageBorder';
import GridPattern from '../common/GridPattern';

const RecordScreen = ({ 
  loading, 
  hoverButton, 
  setHoverButton,
  triggerGlitch,
  transition,
  fromScreen 
}) => {
  return (
    <div className="vintage-container min-h-screen flex flex-col">
      {/* 그리드 패턴 배경 */}
      <GridPattern />
      
      {/* 콘텐츠 영역 */}
      <div className="content-area flex flex-col min-h-screen">
        {/* 헤더 */}
        <div className="p-4 border-b-2 border-black flex justify-between items-center">
          <div className="text-sm font-bold">CREATE MEMORY</div>
          <div className="text-xs">DATE: 03.28.2025</div>
        </div>
        
        <div className="p-4 flex-1 flex flex-col">
          {/* 타이틀 */}
          <VintageBorder className="mb-6">
            <h1 className="text-xl font-bold text-center">NEW ENTRY</h1>
          </VintageBorder>
          
          {/* 이미지 선택 */}
          <VintageBorder className="mb-6">
            <div className="aspect-video bg-white flex flex-col items-center justify-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <div className="text-center">
                <div className="text-sm font-bold mb-1">SELECT IMAGE</div>
                <div className="text-xs opacity-60">Click to upload image or video</div>
              </div>
            </div>
          </VintageBorder>
          
          {/* 메타데이터 입력 */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <VintageBorder>
              <label className="text-xs font-bold block mb-1">DATE</label>
              <input 
                type="text" 
                defaultValue="03.28.2025"
                className="w-full p-2 border border-black bg-white text-sm"
              />
            </VintageBorder>
            <VintageBorder>
              <label className="text-xs font-bold block mb-1">MOOD</label>
              <select className="w-full p-2 border border-black bg-white text-sm">
                <option>NOSTALGIC</option>
                <option>HAPPY</option>
                <option>MELANCHOLIC</option>
                <option>ANXIOUS</option>
                <option>PEACEFUL</option>
              </select>
            </VintageBorder>
          </div>
          
          {/* 텍스트 입력 */}
          <VintageBorder className="mb-6">
            <label className="text-xs font-bold block mb-1">MEMORY</label>
            <textarea 
              className="w-full h-32 p-2 border border-black bg-white text-sm"
              placeholder="Describe your memory..."
            ></textarea>
          </VintageBorder>
          
          {/* 추가 정보 입력 */}
          <VintageBorder className="mb-6">
            <label className="text-xs font-bold block mb-1">TAGS</label>
            <input 
              type="text" 
              placeholder="Enter tags, separated by commas"
              className="w-full p-2 border border-black bg-white text-sm"
            />
          </VintageBorder>
          
          {/* 버튼 */}
          <div className="flex justify-between mt-auto">
            <button 
              className="vintage-button"
              onClick={() => {
                triggerGlitch();
                transition(fromScreen || 'calendar', 'glitch');
              }}>
              CANCEL
            </button>
            <button 
              className="vintage-button"
              onClick={() => {
                triggerGlitch();
                setTimeout(() => {
                  transition(fromScreen || 'calendar', 'noise');
                }, 300);
              }}>
              SAVE
            </button>
          </div>
        </div>
        
        {/* 푸터 */}
        <div className="border-t-2 border-black p-2 flex justify-between items-center">
          <div className="text-xs opacity-70">NEW ENTRY</div>
          <div className="text-xs opacity-70">TOTAL ENTRIES: 46</div>
        </div>
      </div>
    </div>
  );
};

export default RecordScreen; 