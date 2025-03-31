import React, { useState, useEffect } from 'react';
import CalendarScreen from './components/screens/CalendarScreen';
import ListScreen from './components/screens/ListScreen';
import RecordScreen from './components/screens/RecordScreen';
import DetailScreen from './components/screens/DetailScreen';
import NoisePoints from './components/common/NoisePoints';
import Scanlines from './components/common/Scanlines';
import './styles/global.css';

const App = () => {
  const [screen, setScreen] = useState('calendar');
  const [loading, setLoading] = useState(true);
  const [glitchActive, setGlitchActive] = useState(false);
  const [hoverButton, setHoverButton] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [transitionType, setTransitionType] = useState(null);
  const [fromScreen, setFromScreen] = useState(null);
  
  useEffect(() => {
    // 초기 로딩 애니메이션
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // 화면 전환 함수
  const transition = (to, type, from = null) => {
    setTransitionType(type);
    setFromScreen(from || screen);
    setTimeout(() => {
      setScreen(to);
      setTimeout(() => {
        setTransitionType(null);
      }, 600);
    }, 400);
  };
  
  // 글리치 효과 함수
  const triggerGlitch = () => {
    setGlitchActive(true);
    setTimeout(() => {
      setGlitchActive(false);
    }, 400);
  };
  
  return (
    <div className="font-mono relative min-h-screen bg-gray-200">
      {/* 글로벌 스타일 */}
      <style>
        {`
          @keyframes fadeInCalendar {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes glitch {
            0% { transform: translate(0) }
            20% { transform: translate(-2px, 2px) }
            40% { transform: translate(-2px, -2px) }
            60% { transform: translate(2px, 2px) }
            80% { transform: translate(2px, -2px) }
            100% { transform: translate(0) }
          }
          
          @keyframes moveScanline {
            from { top: 0%; }
            to { top: 100%; }
          }
          
          .repeating-text {
            background-size: 100% 100%;
            white-space: nowrap;
            overflow: hidden;
          }
          
          .repeating-text span {
            display: inline-block;
            animation: textScroll 20s linear infinite;
          }
          
          @keyframes textScroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          /* 스캔라인 효과 */
          .scanline {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to bottom,
              transparent 50%,
              rgba(0, 0, 0, 0.05) 50%
            );
            background-size: 100% 4px;
            pointer-events: none;
            z-index: 9999;
          }

          .scanline::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to bottom,
              transparent 50%,
              rgba(0, 0, 0, 0.05) 50%
            );
            background-size: 100% 4px;
            animation: moveScanline 10s linear infinite;
          }
        `}
      </style>
      
      {/* 전체 앱 컨테이너 */}
      <div className="w-full h-full max-w-sm mx-auto relative overflow-hidden">
        {/* 전역 스캔라인 효과 */}
        <div className="scanline"></div>
        
        {/* 스캔라인 효과 오버레이 */}
        <Scanlines />
        
        {/* 노이즈 포인트 오버레이 */}
        <NoisePoints count={100} />
        
        {/* 로딩 화면 */}
        {loading && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-50">
            <div className="text-white text-xl">LOADING...</div>
            <div className="absolute inset-0 opacity-30">
              <NoisePoints count={100} />
            </div>
          </div>
        )}
        
        {/* 화면 전환 애니메이션 오버레이 */}
        {transitionType && (
          <div className="absolute inset-0 z-40 pointer-events-none">
            {transitionType === 'glitch' && (
              <div className="absolute inset-0 bg-black opacity-20" 
                style={{ animation: 'glitch 0.3s infinite' }}>
                <NoisePoints count={50} />
              </div>
            )}
            {transitionType === 'noise' && (
              <div className="absolute inset-0 opacity-70">
                <NoisePoints count={200} />
              </div>
            )}
          </div>
        )}
        
        {/* 반복 텍스트 배너 */}
        <div className="h-4 bg-gray-200 repeating-text text-xs">
          <span>TRAGEDY IS NEAR LIFE FAR FROM COMEDY TRAGEDY IS NEAR LIFE FAR FROM COMEDY </span>
        </div>
        
        {/* 콘텐츠 영역 */}
        {screen === 'calendar' && (
          <CalendarScreen
            loading={loading}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            hoverButton={hoverButton}
            setHoverButton={setHoverButton}
            triggerGlitch={triggerGlitch}
            transition={transition}
          />
        )}
        
        {screen === 'list' && (
          <ListScreen
            loading={loading}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            hoverButton={hoverButton}
            setHoverButton={setHoverButton}
            triggerGlitch={triggerGlitch}
            transition={transition}
          />
        )}
        
        {screen === 'record' && (
          <RecordScreen
            loading={loading}
            hoverButton={hoverButton}
            setHoverButton={setHoverButton}
            triggerGlitch={triggerGlitch}
            transition={transition}
            fromScreen={fromScreen}
          />
        )}
        
        {screen === 'detail' && (
          <DetailScreen
            loading={loading}
            selectedDay={selectedDay}
            hoverButton={hoverButton}
            setHoverButton={setHoverButton}
            triggerGlitch={triggerGlitch}
            transition={transition}
            fromScreen={fromScreen}
          />
        )}
        
        {/* 글리치 오버레이 */}
        {glitchActive && (
          <div 
            className="absolute inset-0 pointer-events-none z-30" 
            style={{ animation: 'glitch 0.1s infinite' }}>
            <NoisePoints count={30} />
            <div className="absolute w-full h-1 bg-white opacity-20" 
              style={{ top: '30%' }}></div>
            <div className="absolute w-full h-2 bg-white opacity-20" 
              style={{ top: '70%' }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App; 