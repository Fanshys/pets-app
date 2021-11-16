import { Link } from 'react-router-dom';

import classNames from 'helpers/classNames';
import './Button.scss';

interface ButtonPropsInterface extends React.HTMLAttributes<HTMLElement> {
  dark?: boolean;
  plus?: boolean;
  active?: boolean;
  to?: string;
  href?: string;
  type?: string;
}

const Button = ({
  dark,
  children,
  plus,
  active,
  className = '',
  ...rest
}: ButtonPropsInterface): JSX.Element => {
  const classes = classNames({
    button: true,
    'button--dark': dark,
    'button--plus': plus,
    'button--active': active,
    [className]: className,
  });

  let Tag: React.ElementType;

  if (rest.to) {
    Tag = Link;
  } else if (rest.href) {
    Tag = 'a';
  } else {
    Tag = 'button';
  }

  return (
    <Tag className={classes} {...rest}>
      {plus ? '' : children}
    </Tag>
  );
};

export default Button;
