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
  return (
    <div
      className={classNames({
        like: true,
        [className]: className,
      })}
    >
      <div className="like__text">{text}</div>
      <button
        className={classNames({
          like__button: true,
          'like__button--active': active,
        })}
      ></button>
    </div>
  );
};

export default Like;
