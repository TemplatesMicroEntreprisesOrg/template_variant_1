import { IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import './Appointment.css';
import appoinBanner1 from '../../assets/img/appoin-banner-1.jpg';
import appoinBanner2 from '../../assets/img/appoin-banner-2.jpg';

const Appointment = () => {
  return (
    <section
      className="section appoin"
      id="appointment"
      aria-label="appointment"
    >
      <div className="container">
        <div className="appoin-card">
          {/* Left banner */}
          <figure className="card-banner img-holder .figure-size-style">
            <img
              src={appoinBanner1}
              width="250"
              height="774"
              loading="lazy"
              alt=""
              className="img-cover"
            />
          </figure>

          {/* Main content */}
          <div className="card-content">
            <h2 className="h2 section-title">Make Appointment</h2>
            <p className="section-text">
              Sit amet consectetur adipiscing elit sed do eiusmod tempor
              incididunt labore dolore magna aliqua suspendisse
            </p>

            {/* Appointment form */}
            <form action="" className="appoin-form">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  className="input-field"
                />
                <input
                  type="email"
                  name="email_address"
                  placeholder="Email Address"
                  required
                  className="input-field"
                />
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="input-field"
                />
                <select name="category" className="input-field">
                  <option value="Select category">Select category</option>
                  <option value="Beauty & spa">Beauty & spa</option>
                  <option value="Body massage">Body massage</option>
                  <option value="Shaving & Facial">Shaving & Facial</option>
                  <option value="Hair Color">Hair Color</option>
                </select>
              </div>

              <input
                type="date"
                name="date"
                required
                className="input-field date"
              />
              <textarea
                name="message"
                placeholder="Write Message"
                required
                className="input-field"
              ></textarea>

              <button type="submit" className="form-btn">
                <span className="span">Appointment Now</span>
                <IonIcon icon={arrowForward} aria-hidden="true" />
              </button>
            </form>
          </div>

          {/* Right banner */}
          <figure className="card-banner img-holder .figure-size-style">
            <img
              src={appoinBanner2}
              width="250"
              height="774"
              loading="lazy"
              alt=""
              className="img-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
