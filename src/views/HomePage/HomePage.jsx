import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page page">
      <div className="container">
        <div className="home-page__grid">
          <div className="home-page__col-left">
            <div className="birthday">Birthday</div>
            <div className="my-pets">My pets</div>
          </div>
          <div className="home-page__col-center">
            <div className="chat">Chat</div>
          </div>
          <div className="home-page__col-right">
            <div className="best-pets">Best of the week</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
