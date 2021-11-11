import PropTypes from 'prop-types';
import './CardPet.scss';
import Button from 'components/ui/Button/Button';
import Card from 'components/ui/Card/Card';
import { groups } from 'helpers/petGroups';
import Badge from '../ui/Badge/Badge';
import Like from '../ui/Like/Like';
import getColorByBirthday from 'helpers/getColorByBirthday';

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
          {likes && <Like count={likes} active={isLiked} />}
        </div>
      </div>
    </Card>
  );
};

CardPet.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  likes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isLiked: PropTypes.bool,
  group: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  birthday: function (props, propName, componentName) {
    if (!/\d{4}-\d{2}-\d{2}/.test(props[propName])) {
      return new Error(`
        Invalid ${propName} prop in component ${componentName}. Valid format: YYYY-MM-DD.
      `);
    }
  },
};

export default CardPet;
