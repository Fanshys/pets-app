import './PetsList.scss';
import Masonry from 'react-masonry-css';
import CardPet from 'components/CardPet/CardPet';
import { PetListInterface } from 'api/pets.api';
import classNames from 'helpers/classNames';
import { ReactDivProps } from 'helpers/htmlPropTypes';

interface PetsListPropsInterface extends ReactDivProps {
  items: PetListInterface;
}

const PetsList = ({
  items,
  className = '',
}: PetsListPropsInterface): JSX.Element => {
  const classes = classNames({
    [className]: className,
    'pets-list': true,
  });

  return (
    <Masonry
      breakpointCols={3}
      className={classes}
      columnClassName="pets-list__column"
    >
      {Object.entries(items).map(([key, pet]) => (
        <CardPet
          image={pet.img}
          name={pet.name}
          group={pet.groupID.toString()}
          likes={pet.likes}
          isFavorite={false}
          isLiked={false}
          birthday={pet.age}
          key={key}
        />
      ))}
    </Masonry>
  );
};

export default PetsList;
