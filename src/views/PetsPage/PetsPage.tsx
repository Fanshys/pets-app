import './PetsPage.scss';
import { RootState } from 'store/store';
import { useAppSelector } from 'hooks';
import { ChangeEvent, useEffect } from 'react';
import { getPets } from 'store/actions/pets';
import { useDispatch } from 'react-redux';
import PetsList from 'components/PetsList/PetsList';
import PetsFilter from 'components/PetsFilter/PetsFilter';

// images
import dog from 'assets/images/pets/dogs.svg';
import bird from 'assets/images/pets/birds.svg';

const PetsPage = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);

  const pets = useAppSelector((state: RootState) => state.pets.items);
  const categories = [
    {
      name: 'dogs',
      text: 'dogs',
      img: dog,
      checked: false,
      value: '1',
    },
    {
      name: 'cats',
      text: 'cats',
      img: dog,
      checked: false,
      value: '2',
    },
    {
      name: 'birds',
      text: 'birds',
      img: bird,
      checked: false,
      value: '3',
    },
    {
      name: 'rabbits',
      text: 'rabbits',
      img: bird,
      checked: false,
      value: '4',
    },
    {
      name: 'hamsters',
      text: 'hamsters',
      img: bird,
      checked: false,
      value: '5',
    },
    {
      name: 'other',
      text: 'other',
      img: bird,
      checked: false,
      value: '6',
    },
  ];

  function categoryOnChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;

    console.log(target.value);
  }

  return (
    <section className="pets-page page">
      <div className="container">
        <div className="pets-page__grid">
          <aside className="pets-page__aside">
            <PetsFilter
              categories={categories}
              categoryOnChange={categoryOnChange}
            />
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
