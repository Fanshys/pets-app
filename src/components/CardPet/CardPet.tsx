import './CardPet.scss';
import Button from 'components/_ui/Button/Button';
import Card from 'components/_ui/Card/Card';
import { groups } from 'helpers/petGroups';
import Badge from '../_ui/Badge/Badge';
import Like from '../_ui/Like/Like';
import getColorByBirthday from 'helpers/getColorByBirthday';
import { ReactDivProps } from 'helpers/htmlPropTypes';

interface CardPetPropsInterface extends ReactDivProps {
  image: string;
  name: string;
  likes: number;
  isLiked: boolean;
  isFavorite: boolean;
  group: string;
  birthday: string; // YYYY-MM-DD
}

const CardPet = ({
  image,
  name,
  likes,
  isLiked,
  isFavorite,
  group,
  birthday,
  className = '',
}: CardPetPropsInterface) => {
  return (
    <Card className={className}>
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
          {likes && <Like count={likes} active={isLiked} />}
        </div>
      </div>
    </Card>
  );
};

export default CardPet;
