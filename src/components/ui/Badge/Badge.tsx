import classNames from 'helpers/classNames';
import './Badge.scss';

interface BadgePropsInterface {
  name: string;
  color: 'orange' | 'purple';
  className?: string;
}

const Badge = ({
  name,
  color,
  className = '',
}: BadgePropsInterface): JSX.Element => {
  return (
    <div
      className={classNames({
        badge: true,
        [`badge--${color}`]: color,
        [className]: className,
      })}
    >
      {name}
    </div>
  );
};

export default Badge;
