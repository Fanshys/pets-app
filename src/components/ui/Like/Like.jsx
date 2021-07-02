import './Like.scss';

const Like = ({ text, active }) => {
  const buttonClasses = ['like__button'];
  if (active) buttonClasses.push('like__button--active');

  return (
    <div className="like">
      <div className="like__text">{text}</div>
      <button className={buttonClasses.join(' ')}></button>
    </div>
  );
};

export default Like;
