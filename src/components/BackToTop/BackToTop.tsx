import React, { useEffect, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronUp } from 'ionicons/icons';
import { handleScroll } from '../utils/scrollUtils';
import './BackToTop.css';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cleanup = handleScroll(setIsVisible);
    return cleanup;
  }, []);

  return (
    <a
      href="#top"
      className={`back-top-btn ${isVisible ? 'active' : ''}`}
      aria-label="back to top"
      data-back-top-btn
    >
      <IonIcon icon={chevronUp} aria-hidden="true" />
    </a>
  );
};

export default BackToTopButton;
