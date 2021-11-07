import './Alert.scss';
import Card from '../Card/Card';
import classNames from 'helpers/classNames';

interface AlertPropsInterface {
  text: string | JSX.Element | Array<JSX.Element>;
  type?: 'error' | 'warning';
}

function Alert({ type, text }: AlertPropsInterface): JSX.Element {
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
}

export default Alert;
