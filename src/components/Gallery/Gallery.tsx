import React from 'react';
import { IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import './Gallery.css';

import Gallery1 from '../../assets/img/gallery-1.jpg';
import Gallery2 from '../../assets/img/gallery-2.jpg';
import Gallery3 from '../../assets/img/gallery-3.jpg';
import Gallery4 from '../../assets/img/gallery-4.jpg';

interface GalleryCardProps {
  imgSrc: string;
  alt: string;
  title: string;
  text: string;
  link: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  imgSrc,
  alt,
  title,
  text,
  link,
}) => (
  <li>
    <div className="gallery-card">
      <figure
        className="card-banner img-holder"
        style={{ '--width': 422, '--height': 550 } as React.CSSProperties}
      >
        <img
          src={imgSrc}
          width="422"
          height="550"
          loading="lazy"
          alt={alt}
          className="img-cover"
        />
      </figure>
      <div className="card-content">
        <h3 className="h3 card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <a
          href={link}
          className="card-btn"
          aria-label={`Read more about ${title}`}
        >
          <IonIcon icon={arrowForward} aria-hidden="true" />
        </a>
      </div>
    </div>
  </li>
);

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      imgSrc: Gallery1,
      alt: 'Hair Cutting',
      title: 'Hair Cutting',
      text: 'Barbers & Salon Services',
      link: '#',
    },
    {
      imgSrc: Gallery2,
      alt: 'Hair Cutting',
      title: 'Hair Cutting',
      text: 'Barbers & Salon Services',
      link: '#',
    },
    {
      imgSrc: Gallery3,
      alt: 'Hair Cutting',
      title: 'Hair Cutting',
      text: 'Barbers & Salon Services',
      link: '#',
    },
    {
      imgSrc: Gallery4,
      alt: 'Hair Cutting',
      title: 'Hair Cutting',
      text: 'Barbers & Salon Services',
      link: '#',
    },
  ];

  return (
    <section
      className="section gallery"
      id="gallery"
      aria-label="photo gallery"
    >
      <div className="container">
        <div className="title-wrapper">
          <div>
            <h2 className="h2 section-title">Latest Photo Gallery</h2>
            <p className="section-text">
              Sit amet consectetur adipiscing elit sed do eiusmod tempor
              incididunt labore dolore magna aliqua suspendisse
            </p>
          </div>
          <a href="#" className="btn has-before">
            <span className="span">Explore More Gallery</span>
            <IonIcon icon={arrowForward} aria-hidden="true" />
          </a>
        </div>
        <ul className="grid-list">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
