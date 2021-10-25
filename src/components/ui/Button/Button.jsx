import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classNames from 'helpers/classNames';
import './Button.scss';

const Button = ({ dark, children, plus, active, ...rest }) => {
  const classes = classNames({
    button: true,
    'button--dark': dark,
    'button--plus': plus,
    'button--active': active,
  });

  let Tag = 'button';

  if (rest.to) {
    Tag = Link;
  } else if (rest.href) {
    Tag = 'a';
  }

  return (
    <Tag className={classes} {...rest}>
      {plus ? '' : children}
    </Tag>
  );
};

Button.propTypes = {
  dark: PropTypes.bool,
  plus: PropTypes.bool,
  active: PropTypes.bool,
};

export default Button;
