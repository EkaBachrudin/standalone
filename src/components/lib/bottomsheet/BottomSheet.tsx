import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  fullHeight?: boolean;
}

const SWIPE_CLOSE_THRESHOLD = 100;
const ANIMATION_DURATION = 300; // ms

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, children, fullHeight }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [translateY, setTranslateY] = useState(100);
  const [, setIsClosing] = useState(false);
  const startY = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        setTranslateY(0);
      }, 10);
    } else {
      if (isMounted) {
        setIsClosing(true);
        setTranslateY(100);
        setTimeout(() => {
          setIsMounted(false);
          setIsClosing(false);
          document.body.style.overflow = '';
        }, ANIMATION_DURATION);
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || startY.current === null) return;
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY.current;
    if (deltaY > 0) {
      setTranslateY((deltaY / window.innerHeight) * 100);
    }
  };

  const handleTouchEnd = () => {
    if ((translateY * window.innerHeight) / 100 > SWIPE_CLOSE_THRESHOLD) {
      setIsClosing(true);
      setTranslateY(100);
      setTimeout(() => {
        onClose();
      }, ANIMATION_DURATION);
    } else {
      setTranslateY(0);
    }
    setIsDragging(false);
    startY.current = null;
  };

  if (!isMounted) return null;

  return (
    <div className="bottom-sheet">
      <div className="backdrop" onClick={() => {
        setIsClosing(true);
        setTranslateY(100);
        setTimeout(() => {
          onClose();
        }, ANIMATION_DURATION);
      }} />
      <div
        className="sheet-content"
        style={{
          transform: `translateY(${translateY}%)`,
          transition: isDragging ? 'none' : `transform ${ANIMATION_DURATION}ms ease`,
          height: fullHeight ? '100vh' : 'auto',
          maxHeight: fullHeight ? '90vh' : '80vh',
        }}
      >
       <div className='drag-area' 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          <div
            className="drag-handle"
          />
       </div>
        <div className="sheet-inner">{children}</div>
      </div>
      <style jsx>{`
        .bottom-sheet {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .backdrop {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .sheet-content {
          position: relative;
          width: 100%;
          max-width: 500px;
          background: white;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          overflow: hidden;
          will-change: transform;
        }

        .drag-area{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;
        }

        .drag-handle {
          width: 40px;
          height: 5px;
          background-color: #ccc;
          border-radius: 999px;
          // margin: 12px auto 8px auto;
          touch-action: pan-y;
        }

        .sheet-inner {
          height: calc(100% - 25px);
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default BottomSheet;
