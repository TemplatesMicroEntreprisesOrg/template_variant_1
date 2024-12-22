import React, { useState } from 'react';
import './Pricing.css';

import PricingBg from '../../assets/img/pricing-bg.jpg';
import Pricing1 from '../../assets/img/pricing-1.jpg';
import Pricing2 from '../../assets/img/pricing-2.jpg';
import Pricing3 from '../../assets/img/pricing-3.jpg';
import Pricing4 from '../../assets/img/pricing-4.jpg';
import Pricing5 from '../../assets/img/pricing-5.jpg';
import Pricing6 from '../../assets/img/pricing-6.jpg';
import Pricing7 from '../../assets/img/pricing-7.jpg';
import Pricing8 from '../../assets/img/pricing-8.jpg';

interface PricingCardProps {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  filter: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  imgSrc,
  alt,
  title,
  description,
  price,
  filter,
}) => (
  <li data-filter={filter}>
    <div className="pricing-card">
      <figure
        className="card-banner img-holder"
        style={{ '--width': 90, '--height': 90 } as React.CSSProperties}
      >
        <img
          src={imgSrc}
          alt={alt}
          className="img-cover"
          width="90"
          height="90"
        />
      </figure>
      <div className="wrapper">
        <h3 className="h3 card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
      <data className="card-price" value={price}>
        ${price}
      </data>
    </div>
  </li>
);

const Pricing: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const pricingCards = [
    {
      imgSrc: Pricing1,
      alt: 'Hair Cutting & Fitting',
      title: 'Hair Cutting & Fitting',
      description: 'Clean & simple 30-40 minutes',
      price: 89,
      filter: 'shaving',
    },
    {
      imgSrc: Pricing2,
      alt: 'Shaving & Facial',
      title: 'Shaving & Facial',
      description: 'Clean & simple 30-40 minutes',
      price: 45,
      filter: 'shaving',
    },
    {
      imgSrc: Pricing3,
      alt: 'Hair Color & Wash',
      title: 'Hair Color & Wash',
      description: 'Clean & simple 30-40 minutes',
      price: 35,
      filter: 'face-washing',
    },
    {
      imgSrc: Pricing4,
      alt: 'Body Massage',
      title: 'Body Massage',
      description: 'Clean & simple 30-40 minutes',
      price: 56,
      filter: 'body-treatments',
    },
    {
      imgSrc: Pricing5,
      alt: 'Beauty & Spa',
      title: 'Beauty & Spa',
      description: 'Clean & simple 30-40 minutes',
      price: 27,
      filter: 'beauty-spa',
    },
    {
      imgSrc: Pricing6,
      alt: 'Facial & Face Wash',
      title: 'Facial & Face Wash',
      description: 'Clean & simple 30-40 minutes',
      price: 63,
      filter: 'face-washing',
    },
    {
      imgSrc: Pricing7,
      alt: 'Backbone Massage',
      title: 'Backbone Massage',
      description: 'Clean & simple 30-40 minutes',
      price: 43,
      filter: 'body-treatments',
    },
    {
      imgSrc: Pricing8,
      alt: 'Meditation & Massage',
      title: 'Meditation & Massage',
      description: 'Clean & simple 30-40 minutes',
      price: 74,
      filter: 'meditations',
    },
  ];

  return (
    <section
      className="section pricing has-bg-image has-before"
      id="pricing"
      aria-label="pricing"
      style={{ backgroundImage: `url(${PricingBg})` }}
    >
      <div className="container">
        <h2 className="h2 section-title text-center">Awesome Pricing Plan</h2>
        <p className="section-text text-center">
          Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
          labore dolore magna aliqua suspendisse
        </p>

        <div className="pricing-tab-container">
          <ul className="tab-filter">
            {[
              {
                label: 'All Pricing',
                filter: 'all',
                icon: 'flaticon-beauty-salon',
              },
              {
                label: 'Beauty & Spa',
                filter: 'beauty-spa',
                icon: 'flaticon-relax',
              },
              {
                label: 'Body Treatments',
                filter: 'body-treatments',
                icon: 'flaticon-massage',
              },
              {
                label: 'Face Washing',
                filter: 'face-washing',
                icon: 'flaticon-spa',
              },
              {
                label: 'Meditations',
                filter: 'meditations',
                icon: 'flaticon-yoga',
              },
              {
                label: 'Shaving',
                filter: 'shaving',
                icon: 'flaticon-razor-blade',
              },
            ].map(({ label, filter, icon }) => (
              <li key={filter}>
                <button
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => handleFilterClick(filter)}
                >
                  <div className="btn-icon">
                    <i className={icon} aria-hidden="true"></i>
                  </div>
                  <p className="btn-text">{label}</p>
                </button>
              </li>
            ))}
          </ul>

          <ul className="grid-list">
            {pricingCards
              .filter(
                (card) =>
                  activeFilter === 'all' || card.filter === activeFilter,
              )
              .map((card, index) => (
                <PricingCard key={index} {...card} />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
