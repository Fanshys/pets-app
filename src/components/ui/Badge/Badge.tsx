import classNames from 'helpers/classNames';
import './Badge.scss';

interface BadgePropsInterface {
  name: string;
  color: 'orange' | 'purple';
}

const Badge = ({ name, color }: BadgePropsInterface): JSX.Element => {
  return (
    <div
      className={classNames({
        badge: true,
        [`badge--${color}`]: color,
      })}
    >
      {name}
    </div>
  );
};

export default Badge;
