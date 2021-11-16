import CheckCard from 'components/_ui/CheckCard/CheckCard';
import { ChangeEventHandler } from 'react';
import './PetsFilter.scss';

interface PetCategoryInterface {
  text: string;
  name: string;
  value: string;
  img?: string;
  checked: boolean;
}

interface PetsFilterPropsInterface {
  categories: Array<PetCategoryInterface>;
  categoryOnChange: ChangeEventHandler<HTMLInputElement>;
}

const PetsFilter = ({
  categories,
  categoryOnChange,
}: PetsFilterPropsInterface): JSX.Element => {
  return (
    <div className="pets-filter">
      <div className="pets-filter__checkboxes">
        {categories.map((category) => {
          return (
            <CheckCard
              text={category.text}
              img={category.img}
              name={category.name}
              checked={category.checked}
              value={category.value}
              onChange={categoryOnChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PetsFilter;
