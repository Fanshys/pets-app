import './PetsPage.scss';
import { ChangeEvent } from 'react';
import PetsList from 'components/PetsList/PetsList';
import PetsFilter, {
  PetCategoryInterface,
} from 'components/PetsFilter/PetsFilter';
import { ReactDivProps } from 'helpers/ReactPropTypes';
import { PetListInterface } from 'api/pets.api';

interface PetsPagePropsInterface extends ReactDivProps {
  items: PetListInterface;
  filterCategories: Array<PetCategoryInterface>;
  filterCategoryOnChange: (e: ChangeEvent) => void;
}

const PetsPage = ({
  items,
  filterCategories,
  filterCategoryOnChange,
}: PetsPagePropsInterface): JSX.Element => {
  return (
    <section className="pets-page page">
      <div className="container">
        <div className="pets-page__grid">
          <aside className="pets-page__aside">
            <PetsFilter
              categories={filterCategories}
              categoryOnChange={filterCategoryOnChange}
            />
          </aside>

          <main className="pets-page__content">
            <PetsList items={items} className="pets-page__list" />
          </main>
        </div>
      </div>
    </section>
  );
};

export default PetsPage;
