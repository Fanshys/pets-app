import './Alert.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import classNames from 'helpers/classNames';

const Alert = ({ type, text }) => {
  return (
    <div
      className={classNames({
        alert: true,
        ['alert--' + type]: type,
      })}
    >
      <Card>{text}</Card>
    </div>
  );
};

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning']),
};

export default Alert;
