import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
