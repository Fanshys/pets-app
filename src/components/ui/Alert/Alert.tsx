import './Alert.scss';
import Card from '../Card/Card';
import classNames from 'helpers/classNames';

interface AlertPropsInterface extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'error' | 'warning';
}

function Alert({
  type,
  children,
  className = '',
}: AlertPropsInterface): JSX.Element {
  const classes = classNames({
    alert: true,
    ['alert--' + type]: type,
    [className]: className,
  });

  return (
    <div className={classes}>
      <Card>{children}</Card>
    </div>
  );
}

export default Alert;
