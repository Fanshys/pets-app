import Input from '../../_ui/Input/Input';
import './HeaderSearch.scss';

const HeaderSearch = (): JSX.Element => {
  return (
    <div className="header-search">
      <form className="header-search__form">
        <Input
          type="text"
          small
          red
          className="header-search__input"
          inputClassName="header-search__field"
          placeholder="Search"
        />
        <button type="submit" className="header-search__button">
          <svg
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="3.5" stroke="white" />
            <line
              y1="-0.5"
              x2="5.24976"
              y2="-0.5"
              transform="matrix(0.647648 0.761939 -0.647648 0.761939 5.84998 7)"
              stroke="white"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default HeaderSearch;
