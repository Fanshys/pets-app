import { Link } from 'react-router-dom';

import './HeaderLogo.scss';
import Logo from '../../../assets/images/logo.svg';

const HeaderLogo = (): JSX.Element => {
  return (
    <Link to="/" className="header-logo">
      <img src={Logo} className="header-logo__img" alt="logo" />
      <span className="header-logo__text">Pets App</span>
    </Link>
  );
};

export default HeaderLogo;
