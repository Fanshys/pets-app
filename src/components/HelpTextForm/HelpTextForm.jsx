import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './HelpTextForm.scss';

const HelpTextForm = ({ text, link, linkText }) => {
  return (
    <p className="help-text-form">
      {text}{' '}
      {link && linkText && (
        <NavLink to={link} className="help-text-form__link">
          {linkText}
        </NavLink>
      )}
    </p>
  );
};

HelpTextForm.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
};

export default HelpTextForm;
