import Alert from 'components/_ui/Alert/Alert';
import { ReactDivProps } from 'helpers/ReactPropTypes';
import { AlertInterface } from 'store/reducers/alertReducer';
import './AlertBar.scss';

interface AlertBarPropsContainer extends ReactDivProps {
  alerts: Array<AlertInterface>;
}

const AlertBar = ({ alerts }: AlertBarPropsContainer): JSX.Element => {
  return (
    <div className="alert-bar">
      {alerts.map((item, key) => (
        <Alert key={key} type={item.type}>
          {item.text}
        </Alert>
      ))}
    </div>
  );
};

export default AlertBar;
