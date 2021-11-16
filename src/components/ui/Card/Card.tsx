import classNames from 'helpers/classNames';
import { ReactDivProps } from 'helpers/htmlPropTypes';
import './Card.scss';

const Card = ({ children, className = '' }: ReactDivProps): JSX.Element => {
  const classes = classNames({
    card: true,
    [className]: className,
  });

  return <div className={classes}>{children}</div>;
};

export default Card;
