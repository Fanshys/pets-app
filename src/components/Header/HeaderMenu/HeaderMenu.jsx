import { NavLink } from 'react-router-dom';
import './HeaderMenu.scss';

const menuItems = [
  {
    name: 'Dashboard',
    link: '/',
    exact: true,
  },
  {
    name: 'Pets',
    link: '/pets',
  },
  {
    name: 'Favorites',
    link: '/favorites',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Ui',
    link: '/ui',
  },
];

const HeaderMenu = () => {
  return (
    <nav className="header-menu">
      <ul className="header-menu__list">
        {menuItems.map((item, index) => {
          return (
            <li className="header-menu__item" key={index}>
              <NavLink
                exact={item.exact}
                to={item.link}
                activeClassName="header-menu__link--active"
                className="header-menu__link"
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
