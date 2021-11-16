import classNames from 'helpers/classNames';
import './Card.scss';

const Card = ({
  children,
  className = '',
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const classes = classNames({
    card: true,
    [className]: className,
  });

  return <div className={classes}>{children}</div>;
};

export default Card;
