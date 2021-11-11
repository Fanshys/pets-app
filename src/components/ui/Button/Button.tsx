import { Link } from 'react-router-dom';

import classNames from 'helpers/classNames';
import './Button.scss';

interface ButtonPropsInterface {
  dark?: boolean;
  plus?: boolean;
  active?: boolean;
  to?: string;
  href?: string;
  className?: string;
  children?: string | JSX.Element | Array<JSX.Element>;
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

  let Tag;

  if (rest.to) {
    Tag = Link;
  } else if (rest.href) {
    Tag = 'a' as keyof JSX.IntrinsicElements;
  } else {
    Tag = 'button' as keyof JSX.IntrinsicElements;
  }

  return (
    <Tag className={classes} {...rest}>
      {plus ? '' : children}
    </Tag>
  );
};

export default Button;
