import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ dark, children, ...rest }) => {
  const classes = ['button'];

  if (dark) {
    classes.push('button--dark');
  }

  let Tag = 'button';
  if (rest.to) {
    Tag = Link;
  } else if (rest.href) {
    Tag = 'a';
  }

  return (
    <Tag className={classes.join(' ')} {...rest}>
      {children}
    </Tag>
  );
};

export default Button;
