import './UiPage.scss';
import Button from 'components/ui/Button/Button';
import Input from 'components/ui/Input/Input';
import Card from 'components/ui/Card/Card';
import CardPet from 'components/CardPet/CardPet';

import bob from 'assets/images/bob.jpg';
import Badge from 'components/ui/Badge/Badge';

const nav: Array<string> = ['buttons', 'inputs', 'cards', 'badges'];

const UiPage = (): JSX.Element => {
  return (
    <div className="page ui-page">
      <div className="container">
        <h1>Components</h1>

        <ul className="ui-page__list">
          {nav.map((item, index) => {
            return (
              <li className="ui-page__list-item" key={index}>
                <a className="ui-page__list-link" href={`#${item}`}>
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        <div id="buttons">
          <h2>Buttons</h2>

          <div className="example-row">
            <Button>Button</Button>
            <Button to="/">Button-link</Button>
            <Button href="/">Button-a</Button>
            <Button dark>Dark button</Button>
            <Button plus />
            <Button plus active />
          </div>
        </div>

        <div id="inputs">
          <h2>Inputs</h2>

          <div className="example-row">
            <Input label="Input" />
            <Input label="Input with error" error="Unknown error" />
            <Input label="Small input" small />
            <Input label="Small red input" small red />
          </div>
        </div>

        <div id="cards">
          <h2>Cards</h2>

          <div className="example-row">
            <Card>Default card</Card>
            <CardPet
              image={bob}
              name="Bob"
              group="2"
              likes={9999}
              isLiked
              isFavorite={false}
              birthday="2021-05-06"
            />
            <CardPet
              image={bob}
              name="Bob"
              group="2"
              likes={9999}
              isFavorite
              isLiked={false}
              birthday="2020-05-06"
            />
          </div>
        </div>

        <div id="badges">
          <h2>Badges</h2>

          <div className="example-row">
            <Badge name="Adult" color="orange" />
            <Badge name="Puppy" color="purple" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiPage;
