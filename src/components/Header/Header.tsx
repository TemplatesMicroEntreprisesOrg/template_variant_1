import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}

export default Header;
