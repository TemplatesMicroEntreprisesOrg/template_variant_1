import SocialMediaList from './SocialMediaList';
import { IonIcon } from '@ionic/react';
import { callOutline, timeOutline } from 'ionicons/icons';

function HeaderTop() {
  return (
    <div className="header-top">
      <div className="container">
        <ul className="header-top-list">
          <li className="header-top-item">
            <IonIcon icon={callOutline} aria-hidden="true" />
            <p className="item-title">Call Us :</p>
            <a href="tel:01234567895" className="item-link">
              012 (345) 67 895
            </a>
          </li>
          <li className="header-top-item">
            <IonIcon icon={timeOutline} aria-hidden="true" />
            <p className="item-title">Opening Hour :</p>
            <p className="item-text">Sunday - Friday, 08 am - 09 pm</p>
          </li>
          <li>
            <SocialMediaList />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderTop;
