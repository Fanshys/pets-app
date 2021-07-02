import './CardPet.scss';
import Button from 'components/ui/Button/Button';
import Card from 'components/ui/Card/Card';
import { groups } from 'helpers/petGroups';
import Badge from '../ui/Badge/Badge';
import Like from '../ui/Like/Like';
import { getColorByBirthday } from 'helpers/petGroups';

const CardPet = ({
  image,
  name,
  likes,
  isLiked,
  isFavorite,
  group,
  birthday,
}) => {
  return (
    <Card>
      <div className="card-pet">
        <div className="card-pet__img-wrap">
          <img src={image} alt="" className="card-pet__img" />
        </div>
        <div className="card-pet__body">
          <Button plus active={isFavorite} />
          <div className="card-pet__info">
            <div className="card-pet__name">{name}</div>
            <Badge name={groups[group]} color={getColorByBirthday(birthday)} />
          </div>
          <Like text={`${likes} like`} active={isLiked} />
        </div>
      </div>
    </Card>
  );
};

export default CardPet;
