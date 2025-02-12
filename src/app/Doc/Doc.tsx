import React from 'react';
import styles from './Doc.module.scss';

const Doc: React.FC = () => {
  return (
    <div className={styles.docContainer}>
      <h1 className={styles.title}>Documentation Page</h1>
      <p className={styles.description}>This is the documentation page.</p>

    </div>
  );
};

export default Doc;