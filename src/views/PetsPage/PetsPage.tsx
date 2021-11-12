import './PetsPage.scss';
import { RootState } from 'store/store';
import { useAppSelector } from 'hooks';
import CardPet from 'components/CardPet/CardPet';
import { useEffect } from 'react';
import { getPets } from 'store/actions/pets';
import { useDispatch } from 'react-redux';
import Masonry from 'react-masonry-css';

const PetsPage = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);

  const pets = useAppSelector((state: RootState) => state.pets.items);

  return (
    <div className="pets-page page">
      <div className="container">
        <Masonry
          breakpointCols={3}
          className="pets-page__grid"
          columnClassName="pets-page__column"
        >
          {Object.entries(pets).map(([key, pet]) => (
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
      </div>
    </div>
  );
};

export default PetsPage;
