import React from 'react';
import './loader.scss';

interface FullPageLoaderProps {
  isLoading: boolean;
}

const FullPageLoader: React.FC<FullPageLoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div style={styles.loaderContainer}>
      <div className='loader'></div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  loaderContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999, 
  }
};

export default FullPageLoader;
