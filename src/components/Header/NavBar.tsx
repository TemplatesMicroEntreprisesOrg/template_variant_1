function Navbar() {
  return (
    <nav className="navbar container" data-navbar>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#home" className="navbar-link" data-nav-link>
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="#services" className="navbar-link" data-nav-link>
            Services
          </a>
        </li>
        <li className="navbar-item">
          <a href="#pricing" className="navbar-link" data-nav-link>
            Pricing
          </a>
        </li>
        <li className="navbar-item">
          <a href="#gallery" className="navbar-link" data-nav-link>
            Gallery
          </a>
        </li>
        <li className="navbar-item">
          <a href="#appointment" className="navbar-link" data-nav-link>
            Appointment
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link" data-nav-link>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
