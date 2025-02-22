import React from 'react';
import styles from './CustomDot.module.scss'
interface CustomDotProps {
  isActive: boolean;
  onClick: () => void;
}

const CustomDot: React.FC<CustomDotProps> = ({ isActive, onClick }) => {
  return (
    <button
      className={styles.customButton}
      onClick={onClick}
      style={{
        width: isActive ? '44px' : '16px',
        height: '16px',
        backgroundColor: isActive ? '#FF0025' : '#ccc',
        borderRadius: '16px',
        marginRight: '10px',
        cursor: 'pointer',
        transition: 'all 0.5s ease',
        content: 'none'
      }}
    />
  );
};

export default CustomDot;
