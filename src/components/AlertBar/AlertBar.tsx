import Alert from 'components/ui/Alert/Alert';
import { useAppSelector } from 'hooks';
import './AlertBar.scss';

const AlertBar = (): JSX.Element => {
  const alerts = useAppSelector((state) => state.alerts);

  return (
    <div className="alert-bar">
      {alerts.map((item, key) => (
        <Alert key={key} text={item.text} type={item.type} />
      ))}
    </div>
  );
};

export default AlertBar;
