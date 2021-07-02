import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ dark, children, plus, active, ...rest }) => {
  const classes = ['button'];

  if (dark) classes.push('button--dark');
  if (plus) classes.push('button--plus');
  if (active) classes.push('button--active');

  let Tag = 'button';
  if (rest.to) {
    Tag = Link;
  } else if (rest.href) {
    Tag = 'a';
  }

  return (
    <Tag className={classes.join(' ')} {...rest}>
      {plus ? '' : children}
    </Tag>
  );
};

export default Button;
