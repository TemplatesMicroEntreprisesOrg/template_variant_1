import { IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import HeroBanner from '../../assets/img/hero-banner.jpg';
import './Hero.css';

function Hero() {
  return (
    <section
      className="section hero has-before has-bg-image"
      id="home"
      aria-label="home"
      style={{
        backgroundImage: `url(${HeroBanner})`,
      }}
    >
      <div className="container">
        <h1 className="h1 hero-title">Barbers & Hair Cutting</h1>

        <p className="hero-text">
          Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua suspendisse ultrices gravida
        </p>

        <a href="#" className="btn has-before">
          <span className="span">Explore Our Services</span>
          <IonIcon icon={arrowForward} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
