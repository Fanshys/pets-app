import Button from '../components/ui/Button/Button';

const UiPage = () => {
  return (
    <div className="page ui-page">
      <ul>
        <li>
          <a href="#buttons">Buttons</a>
        </li>
      </ul>

      <div id="buttons">
        <Button>кнопка</Button>
        <Button to="/">кнопка-линк</Button>
        <Button href="/">кнопка-ссылка</Button>
        <Button dark>темная кнопка</Button>
      </div>
    </div>
  );
};

export default UiPage;
