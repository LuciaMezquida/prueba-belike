import "./Home.css";
import PropTypes from "prop-types";
import belikelogo from "../../images/belikelogo.png";
import Article from "../Article/Article";

const Home = ({ userName }) => {
  return (
    <main className="home">
      <header className="logo-container">
        <img
          src={belikelogo}
          className="belike-logo"
          alt="Belike logo"
          title="Belike logo"
        />
        <p className="welcome-message">{`Welcome, ${userName}!`}</p>
      </header>
      <section className="news">
        <h2 className="news-title">Novedades</h2>
        <Article />
      </section>
    </main>
  );
};

Home.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Home;
