import './Badge.scss';

const Badge = ({ name, color }) => {
  const classes = ['badge'];

  if (color) classes.push(`badge--${color}`);

  return <div className={classes.join(' ')}>{name}</div>;
};

export default Badge;
