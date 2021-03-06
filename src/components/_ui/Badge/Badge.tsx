import classNames from 'helpers/classNames';
import { colors } from 'helpers/getColorByBirthday';
import { ReactDivProps } from 'helpers/ReactPropTypes';
import './Badge.scss';

interface BadgePropsInterface extends ReactDivProps {
  name: string;
  color: colors;
}

const Badge = ({
  name,
  color,
  className = '',
}: BadgePropsInterface): JSX.Element => {
  const classes = classNames({
    badge: true,
    [`badge--${color}`]: color,
    [className]: className,
  });

  return <div className={classes}>{name}</div>;
};

export default Badge;
