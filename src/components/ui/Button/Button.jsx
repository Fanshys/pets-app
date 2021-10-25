import classNames from 'helpers/classNames';
import { Link } from 'react-router-dom';
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

export default Button;
