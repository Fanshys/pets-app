import { NavLink } from 'react-router-dom';
import './HelpTextForm.scss';

const HelpTextForm = ({ text, link, linkText }) => {
  return (
    <p className="help-text-form">
      {text}{' '}
      <NavLink to={link} className="help-text-form__link">
        {linkText}
      </NavLink>
    </p>
  );
};

export default HelpTextForm;
