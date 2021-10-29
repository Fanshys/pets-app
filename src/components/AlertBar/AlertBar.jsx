import Alert from 'components/ui/Alert/Alert';
import { useSelector } from 'react-redux';
import './AlertBar.scss';

const AlertBar = () => {
  const alerts = useSelector((state) => state.alerts);

  return (
    <div className="alert-bar">
      {alerts.map((item, key) => (
        <Alert key={key} text={item.text} type={item.type} />
      ))}
    </div>
  );
};

export default AlertBar;
