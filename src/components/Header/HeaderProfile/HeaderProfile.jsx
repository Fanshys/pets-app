import './HeaderProfile.scss';
import avatar from '../../../assets/images/smudge.png';

const HeaderProfile = () => {
  return (
    <div className="header-profile">
      <div className="header-profile-avatar">
        <img src={avatar} alt="" className="header-profile-avatar__img" />
      </div>
      <div className="header-profile__text">Hi, Smudge</div>
    </div>
  );
};

export default HeaderProfile;
