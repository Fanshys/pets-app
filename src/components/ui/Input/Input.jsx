import './Input.scss';

const Input = ({ error, register, ...rest }) => {
  return (
    <div className="input">
      <label className="input__label"></label>
      <input {...rest} {...register} />

      {error && <div className="input__error">{error}</div>}
    </div>
  );
};

export default Input;
