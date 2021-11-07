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
  return (
    <div
      className={classNames({
        card: true,
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};

export default Card;
