import classNames from 'helpers/classNames';
import { ReactParagraphProps } from 'helpers/ReactPropTypes';
import { NavLink } from 'react-router-dom';
import './HelpTextForm.scss';

interface HelpTextFormPropsInterface extends ReactParagraphProps {
  text: string;
  link?: string;
  linkText?: string;
}

const HelpTextForm = ({
  text,
  link,
  linkText,
  className = '',
}: HelpTextFormPropsInterface): JSX.Element => {
  const classes = classNames({
    'help-text-form': true,
    [className]: className,
  });

  return (
    <p className={classes}>
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
