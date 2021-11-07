import classNames from 'helpers/classNames';
import './Like.scss';

interface LikePropsInterface {
  active?: boolean;
  text: string | JSX.Element | Array<JSX.Element>;
  className?: string;
}

const Like = ({
  text,
  active,
  className = '',
}: LikePropsInterface): JSX.Element => {
  const classes = classNames({
    like: true,
    [className]: className,
  });

  const buttonClasses = classNames({
    like__button: true,
    'like__button--active': active,
  });

  return (
    <div className={classes}>
      <div className="like__text">{text}</div>
      <button className={buttonClasses}></button>
    </div>
  );
};

export default Like;
