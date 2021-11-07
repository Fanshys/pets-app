import './Alert.scss';
import Card from '../Card/Card';
import classNames from 'helpers/classNames';

interface AlertPropsInterface {
  text: string | JSX.Element | Array<JSX.Element>;
  type?: 'error' | 'warning';
  className?: string;
}

function Alert({
  type,
  text,
  className = '',
}: AlertPropsInterface): JSX.Element {
  return (
    <div
      className={classNames({
        alert: true,
        ['alert--' + type]: type,
        [className]: className,
      })}
    >
      <Card>{text}</Card>
    </div>
  );
}

export default Alert;
