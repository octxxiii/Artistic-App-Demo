import React from 'react';
import VintageBorder from '../common/VintageBorder';
import GridPattern from '../common/GridPattern';

const DetailScreen = ({ 
  loading, 
  selectedDay, 
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
          <div className="text-sm font-bold">MEMORY DETAILS</div>
          <div className="text-xs">REF: #{selectedDay || 15}.03.25</div>
        </div>
        
        <div className="p-4 flex-1 flex flex-col">
          {/* 타이틀 */}
          <VintageBorder className="mb-6">
            <h1 className="text-xl font-bold">MEMORY #{selectedDay || 15}</h1>
            <div className="text-xs text-black opacity-60 mt-1">CREATED: 03.{selectedDay || 15}.2025 AT 14:32</div>
          </VintageBorder>
          
          {/* 이미지 표시 */}
          <VintageBorder className="mb-6 relative">
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <div className="opacity-30 text-sm">IMAGE PLACEHOLDER</div>
            </div>
            <div className="absolute top-2 right-2 text-xs px-2 py-1 bg-white border border-black">
              REF-IMG-{selectedDay || 15}
            </div>
          </VintageBorder>
          
          {/* 정보 표시 */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <VintageBorder>
              <div className="text-xs font-bold mb-1">DATE</div>
              <div className="text-sm">03.{selectedDay || 15}.2025</div>
            </VintageBorder>
            <VintageBorder>
              <div className="text-xs font-bold mb-1">TYPE</div>
              <div className="text-sm">MEMORY</div>
            </VintageBorder>
            <VintageBorder>
              <div className="text-xs font-bold mb-1">MOOD</div>
              <div className="text-sm">NOSTALGIC</div>
            </VintageBorder>
          </div>
          
          {/* 텍스트 표시 */}
          <VintageBorder className="mb-6">
            <div className="text-xs font-bold mb-2">DESCRIPTION</div>
            <div className="text-sm mb-3">
              TODAY I WITNESSED LIFE<br/>
              FAR FROM COMEDY;<br/>
              TRAGEDY WAS NEAR.<br/>
            </div>
            <div className="text-xs opacity-70">
              people with borderline traits tend to lack a sense of emotional permanence.
              they believe, with all their hearts, that they will always be abandoned one day.
            </div>
          </VintageBorder>
          
          {/* 메타데이터 영역 */}
          <VintageBorder className="mb-6">
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <div className="font-bold mb-1">LOCATION</div>
                <div>UNKNOWN</div>
              </div>
              <div>
                <div className="font-bold mb-1">TAGS</div>
                <div>NOSTALGIA, LIFE</div>
              </div>
              <div>
                <div className="font-bold mb-1">HAPPINESS</div>
                <div>6/10</div>
              </div>
            </div>
          </VintageBorder>
          
          {/* 버튼 */}
          <div className="flex justify-between mt-auto">
            <button 
              className="vintage-button"
              onClick={() => {
                triggerGlitch();
                transition(fromScreen || 'list', 'glitch');
              }}>
              BACK
            </button>
            <button 
              className="vintage-button"
              onClick={() => {
                triggerGlitch();
                transition('record', 'noise', 'detail');
              }}>
              EDIT
            </button>
          </div>
        </div>
        
        {/* 푸터 */}
        <div className="border-t-2 border-black p-2 flex justify-between items-center">
          <div className="text-xs opacity-70">MEMORY #{selectedDay || 15} OF 46</div>
          <div className="text-xs opacity-70">PRINTED ON 03.28.2025</div>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen; 