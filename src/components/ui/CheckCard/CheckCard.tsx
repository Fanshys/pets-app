import classNames from 'helpers/classNames';
import { ChangeEventHandler } from 'react';
import './CheckCard.scss';

interface CheckCardPropsInterface {
  type?: 'checkbox' | 'radio';
  name: string;
  checked: boolean;
  disabled?: boolean;
  className?: string;
  img?: string;
  text: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const CheckCard = ({
  type = 'checkbox',
  name,
  text,
  checked,
  disabled = false,
  className = '',
  img,
  value,
  onChange = () => {},
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
        name={name}
        checked={checked}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      {img && <img src={img} alt={text} className="check-card__image" />}
      <span className="check-card__text">{text}</span>
    </label>
  );
};

export default CheckCard;
