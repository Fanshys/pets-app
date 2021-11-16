import classNames from 'helpers/classNames';
import { ReactInputProps } from 'helpers/htmlPropTypes';
import './CheckCard.scss';

interface CheckCardPropsInterface extends ReactInputProps {
  type?: 'checkbox' | 'radio';
  img?: string;
  text: string;
}

const CheckCard = ({
  type = 'checkbox',
  text,
  checked,
  disabled = false,
  className = '',
  img,
  ...rest
}: CheckCardPropsInterface): JSX.Element => {
  const classes = classNames({
    [className]: className,
    'focus-outline': true,
    'check-card': true,
    'check-card--active': checked,
    'check-card--disabled': disabled,
  });

  return (
    <label className={classes}>
      <input
        className="check-card__input hidden-visible"
        type={type}
        checked={checked}
        disabled={disabled}
        {...rest}
      />
      {img && <img src={img} alt={text} className="check-card__image" />}
      <span className="check-card__text">{text}</span>
    </label>
  );
};

export default CheckCard;
