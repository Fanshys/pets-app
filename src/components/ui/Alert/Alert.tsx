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
  const classes = classNames({
    alert: true,
    ['alert--' + type]: type,
    [className]: className,
  });

  return (
    <div className={classes}>
      <Card>{text}</Card>
    </div>
  );
}

export default Alert;
