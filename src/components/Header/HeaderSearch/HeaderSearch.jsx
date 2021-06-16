import './HeaderSearch.scss';

const HeaderSearch = () => {
  return (
    <div className="header-search">
      <form className="header-search__form">
        <input
          type="text"
          className="header-search__input"
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
