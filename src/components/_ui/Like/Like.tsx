import classNames from 'helpers/classNames';
import { ReactDivProps } from 'helpers/htmlPropTypes';
import './Like.scss';

interface LikePropsInterface extends ReactDivProps {
  active?: boolean;
  count: number;
}

const Like = ({
  count,
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
      <div className="like__text">{count} likes</div>
      <button className={buttonClasses}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
        >
          <path
            d="M9.5 16.9999C9.5 16.9999 18 11.0653 18 5.43761C18 -0.190068 10.4552 -0.613972 9.5 5.02102C8.54476 -0.613972 1 -0.18276 1 5.87613C1 11.935 9.5 16.9999 9.5 16.9999Z"
            stroke="#FF5F54"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Like;
