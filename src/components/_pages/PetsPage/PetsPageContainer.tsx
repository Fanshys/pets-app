import { useAppSelector } from 'hooks';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPets } from 'store/actions/pets';
import { RootState } from 'store/store';
import PetsPage from './PetsPage';

import dog from 'assets/images/pets/dogs.svg';
import bird from 'assets/images/pets/birds.svg';

function PetsPageContainer(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);

  const pets = useAppSelector((state: RootState) => state.pets.items);
  const [categories, setCategories] = useState([
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
  ]);

  function categoryOnChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;

    setCategories(
      categories.map((category) => {
        if (category.value === target.value) {
          category.checked = !category.checked;
        }

        return category;
      })
    );
  }

  return (
    <PetsPage
      items={pets}
      filterCategories={categories}
      filterCategoryOnChange={categoryOnChange}
    />
  );
}

export default PetsPageContainer;
