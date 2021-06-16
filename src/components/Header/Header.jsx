import './Header.scss';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import HeaderSearch from './HeaderSearch/HeaderSearch';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <HeaderLogo />
          <HeaderMenu />
          <div className="header__right">
            <HeaderProfile />
            <HeaderSearch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
