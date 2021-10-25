import PropTypes from 'prop-types';
import classNames from 'helpers/classNames';
import './Like.scss';

const Like = ({ text, active }) => {
  const buttonClasses = classNames({
    like__button: true,
    'like__button--active': active,
  });

  return (
    <div className="like">
      <div className="like__text">{text}</div>
      <button className={buttonClasses}></button>
    </div>
  );
};

Like.propTypes = {
  active: PropTypes.bool,
};

export default Like;
