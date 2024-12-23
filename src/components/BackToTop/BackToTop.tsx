import React from 'react';
import './BackToTop.css';
import { IonIcon } from '@ionic/react';
import { chevronUp } from 'ionicons/icons';

const BackToTopButton: React.FC = () => {
  return (
    <a
      href="#top"
      className="back-top-btn"
      aria-label="back to top"
      data-back-top-btn
    >
      <IonIcon icon={chevronUp} aria-hidden="true" />
    </a>
  );
};

export default BackToTopButton;
