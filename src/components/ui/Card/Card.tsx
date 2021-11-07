import classNames from 'helpers/classNames';
import './Card.scss';

interface CardPropsInterface {
  children?: string | JSX.Element | Array<JSX.Element>;
  className?: string;
}

const Card = ({
  children,
  className = '',
}: CardPropsInterface): JSX.Element => {
  const classes = classNames({
    card: true,
    [className]: className,
  });

  return <div className={classes}>{children}</div>;
};

export default Card;
