import classNames from 'helpers/classNames';
import './Badge.scss';

const Badge = ({ name, color }) => {
  const classes = classNames({
    badge: true,
    [`badge--${color}`]: color,
  });

  return <div className={classes}>{name}</div>;
};

export default Badge;
