import './Alert.scss';
import Card from '../Card/Card';
import classNames from 'helpers/classNames';
import { ReactDivProps } from 'helpers/htmlPropTypes';

interface AlertPropsInterface extends ReactDivProps {
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
