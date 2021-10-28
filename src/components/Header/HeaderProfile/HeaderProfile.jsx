import './HeaderProfile.scss';
import avatar from '../../../assets/images/smudge.png';
import { useDispatch } from 'react-redux';
import { userLogout } from 'store/actions/user';

const HeaderProfile = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(userLogout());
  };

  return (
    <div className="header-profile" onClick={onClickHandler}>
      <div className="header-profile-avatar">
        <img src={avatar} alt="" className="header-profile-avatar__img" />
      </div>
      <div className="header-profile__text">Hi, Smudge</div>
    </div>
  );
};

export default HeaderProfile;
