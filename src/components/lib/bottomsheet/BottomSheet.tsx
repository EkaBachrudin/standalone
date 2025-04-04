// components/BottomSheet.tsx

import React, { ReactNode, useState } from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="bottom-sheet">
      <div className="backdrop" onClick={onClose} />
      <div className="sheet-content">{children}</div>
      <style jsx>{`
        .bottom-sheet {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 1000;
        }

        .backdrop {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          cursor: pointer;
        }

        .sheet-content {
          position: relative;
          width: 100%;
          max-width: 500px;
          height: 300px;
          background-color: white;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          box-sizing: border-box;
          overflow: hidden;
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BottomSheet;
