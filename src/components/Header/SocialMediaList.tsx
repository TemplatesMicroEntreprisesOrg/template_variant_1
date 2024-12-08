import { IonIcon } from '@ionic/react';
import {
  logoFacebook,
  logoTwitter,
  logoYoutube,
  chatbubbleEllipsesOutline,
} from 'ionicons/icons';

function SocialMediaList() {
  return (
    <ul className="social-list">
      <li>
        <a href="#" className="social-link">
          <IonIcon icon={logoFacebook} />
        </a>
      </li>
      <li>
        <a href="#" className="social-link">
          <IonIcon icon={logoTwitter} />
        </a>
      </li>
      <li>
        <a href="#" className="social-link">
          <IonIcon icon={logoYoutube} />
        </a>
      </li>
      <li>
        <a href="#" className="social-link">
          <IonIcon icon={chatbubbleEllipsesOutline} />
        </a>
      </li>
    </ul>
  );
}

export default SocialMediaList;
