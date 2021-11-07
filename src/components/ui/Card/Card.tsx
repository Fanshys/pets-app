import './Card.scss';

interface CardPropsInterface {
  children?: string | JSX.Element | Array<JSX.Element>;
}

const Card = ({ children }: CardPropsInterface) => {
  return <div className="card">{children}</div>;
};

export default Card;
