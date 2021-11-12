import './PetsPage.scss';
import { RootState } from 'store/store';
import { useAppSelector } from 'hooks';
import { useEffect } from 'react';
import { getPets } from 'store/actions/pets';
import { useDispatch } from 'react-redux';
import PetsList from 'components/PetsList/PetsList';
import PetsFilter from 'components/PetsFilter/PetsFilter';

const PetsPage = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);

  const pets = useAppSelector((state: RootState) => state.pets.items);

  return (
    <section className="pets-page page">
      <div className="container">
        <div className="pets-page__grid">
          <aside className="pets-page__aside">
            <PetsFilter />
          </aside>

          <main className="pets-page__content">
            <PetsList items={pets} className="pets-page__list" />
          </main>
        </div>
      </div>
    </section>
  );
};

export default PetsPage;
