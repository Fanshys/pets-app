import PropTypes from 'prop-types';
import classNames from 'helpers/classNames';
import './Badge.scss';

const Badge = ({ name, color }) => {
  const classes = classNames({
    badge: true,
    [`badge--${color}`]: color,
  });

  return <div className={classes}>{name}</div>;
};

Badge.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['orange', 'purple']).isRequired,
};

export default Badge;
