import './Services.css';
import { IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';

const services = [
  {
    iconClass: 'flaticon-salon',
    title: 'Hair Cutting Style',
    description:
      'Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
  {
    iconClass: 'flaticon-shampoo',
    title: 'Hair Washing',
    description:
      'Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
  {
    iconClass: 'flaticon-hot-stone',
    title: 'Body Treatments',
    description:
      'Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
  {
    iconClass: 'flaticon-treatment',
    title: 'Beauty & Spa',
    description:
      'Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
  {
    iconClass: 'flaticon-shaving-razor',
    title: 'Stylist Shaving',
    description:
      'Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
  {
    iconClass: 'flaticon-hair-dye',
    title: 'Multi Hair Colors',
    description:
      'Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
];

function Services() {
  return (
    <section className="section service" id="services" aria-label="services">
      <div className="container">
        <h2 className="h2 section-title text-center">Service We Provide</h2>

        <p className="section-text text-center">
          Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
          labore dolore magna aliqua suspendisse
        </p>

        <ul className="grid-list">
          {services.map((service, index) => (
            <li key={index}>
              <div className="service-card">
                {/* Flaticon Icons */}
                <div className="card-icon">
                  <i className={service.iconClass}></i>
                </div>

                <h3 className="h3">
                  <a href={service.link} className="card-title">
                    {service.title}
                  </a>
                </h3>

                <p className="card-text">{service.description}</p>

                <a href={service.link} className="card-btn" aria-label="more">
                  <IonIcon icon={arrowForward} aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
