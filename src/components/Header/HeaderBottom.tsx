import Navbar from './NavBar';
import { IonIcon } from '@ionic/react';
import { menuOutline, arrowForward } from 'ionicons/icons';

function HeaderBottom() {
  return (
    <div className="header-bottom" data-header>
      <div className="container">
        <a href="#" className="logo">
          Barber
          <span className="span">Hair Salon</span>
        </a>
        <Navbar />
        <button
          className="nav-toggle-btn"
          aria-label="toggle menu"
          data-nav-toggler
        >
          <IonIcon icon={menuOutline} aria-hidden="true" />
        </button>
        <a href="#" className="btn has-before">
          <span className="span">Appointment</span>
          <IonIcon icon={arrowForward} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default HeaderBottom;
