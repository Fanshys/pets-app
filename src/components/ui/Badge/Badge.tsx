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
  const classes = classNames({
    badge: true,
    [`badge--${color}`]: color,
    [className]: className,
  });

  return <div className={classes}>{name}</div>;
};

export default Badge;
