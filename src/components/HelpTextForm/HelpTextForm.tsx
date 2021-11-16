import { NavLink } from 'react-router-dom';
import './HelpTextForm.scss';

interface HelpTextFormPropsInterface {
  text: string;
  link?: string;
  linkText?: string;
}

const HelpTextForm = ({
  text,
  link,
  linkText,
}: HelpTextFormPropsInterface): JSX.Element => {
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

export default HelpTextForm;
