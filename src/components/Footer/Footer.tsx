import { IonIcon } from '@ionic/react';
import FooterBg from '../../assets/img/footer-bg.png';
import './Footer.css';

function Footer() {
  return (
    <footer
      className="footer has-bg-image"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              Barber<span className="span">Hair Salon</span>
            </a>

            <form action="" className="input-wrapper">
              <input
                type="email"
                name="email_address"
                placeholder="Enter Your Email"
                required
                className="email-field"
              />
              <button type="submit" className="btn has-before">
                <span className="span">Subscribe Now</span>
                <IonIcon name="arrow-forward" aria-hidden="true" />
              </button>
            </form>
          </div>

          <div className="footer-link-box">
            {/* Quick Links */}
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Quick Links</p>
              </li>
              {[
                'Our Services',
                'Meet Our Team',
                'Our Portfolio',
                'Need A Career?',
                'News & Blog',
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link has-before">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Services */}
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Services</p>
              </li>
              {[
                'Hair Cutting',
                'Shaving & Design',
                'Hair Colors',
                'Beauty & Spa',
                'Body Massages',
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="footer-link has-before">
                    {service}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Us */}
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Contact Us</p>
              </li>
              {[
                {
                  icon: 'location-outline',
                  content: (
                    <address className="contact-link">
                      7528 Roberts Ave. Palm Bay, FL 32907
                    </address>
                  ),
                },
                {
                  icon: 'call-outline',
                  content: (
                    <a href="tel:+0123456789" className="contact-link">
                      +012 (345) 67 89
                    </a>
                  ),
                },
                {
                  icon: 'time-outline',
                  content: (
                    <span className="contact-link">
                      Sun - Friday, 08 am - 09 pm
                    </span>
                  ),
                },
                {
                  icon: 'mail-outline',
                  content: (
                    <a href="mailto:support@gmail.com" className="contact-link">
                      support@gmail.com
                    </a>
                  ),
                },
              ].map((contact, index) => (
                <li className="footer-list-item" key={index}>
                  <IonIcon name={contact.icon} aria-hidden="true" />
                  {contact.content}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2022{' '}
            <a href="#" className="copyright-link">
              codewithsadee
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
