import CheckCard from 'components/ui/CheckCard/CheckCard';
import dog from 'assets/images/pets/dogs.svg';
import bird from 'assets/images/pets/birds.svg';
import './PetsFilter.scss';

const PetsFilter = (): JSX.Element => {
  return (
    <div className="pets-filter">
      <CheckCard text="dogs" img={dog} name="dog" checked />
      <CheckCard text="birds" img={bird} name="birds" checked={false} />
    </div>
  );
};

export default PetsFilter;
