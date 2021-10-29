import Alert from 'components/ui/Alert/Alert';
import { connect } from 'react-redux';
import './AlertBar.scss';

const AlertBar = ({ alerts }) => {
  return (
    <div className="alert-bar">
      {alerts.map((item, key) => (
        <Alert key={key} text={item.text} type={item.type} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    alerts: state.alerts,
  };
};

export default connect(mapStateToProps)(AlertBar);
