import { useAppSelector } from 'hooks';
import AlertBar from './AlertBar';

function AlertBarContainer(): JSX.Element {
  const alerts = useAppSelector((state) => state.alerts);

  return <AlertBar alerts={alerts} />;
}

export default AlertBarContainer;
