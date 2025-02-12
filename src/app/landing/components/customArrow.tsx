import styles from './customArrow.module.scss'

interface ArrowProps {
  onClick: () => void,
  extraStyle: React.CSSProperties,
  isVisible?: boolean
}


export const PrevArrow: React.FC<ArrowProps> = ({ onClick, extraStyle, isVisible }) => {
  return (
    isVisible ? <button onClick={onClick} className={styles['ar-button']}>
      <img src='/assets/icons/arrow-slick-left.svg' className={styles['arrow-left']} alt="Left Arrow" style={extraStyle} />
    </button> : null
  );
};

export const NextArrow: React.FC<ArrowProps> = ({ onClick, extraStyle, isVisible }) => {
  return (
    isVisible ? <button onClick={onClick} className={styles['ar-button']}>
      <img src='/assets/icons/arrow-slick-right.svg' className={styles['arrw-right']} alt="as" style={extraStyle} />
    </button> : null
  );
};
