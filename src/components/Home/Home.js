import "./Home.css";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Article from "../Article/Article";
import Header from "../Header/Header";

const Home = ({ userName, inputsAreValid }) => {
  const history = useHistory();
  const goSignUp = () => history.push("/");

  useEffect(() => {
    if (!inputsAreValid) {
      console.error("not user ");
      goSignUp();
    }
  }, []);

  return (
    <main className="home">
      <Header userName={`Welcome, ${userName}!`} />
      <section className="news">
        <h2 className="news-title">News</h2>
        <Article
          title="We are hiring!"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, totam
        necessitatibus. Amet earum voluptate, magnam veritatis numquam dolores
        esse doloribus expedita, minus perferendis unde eligendi aliquid culpa
        nemo totam error. Earum, tempore voluptatibus delectus sit cum ipsam
        explicabo exercitationem facilis ipsum unde, inventore, consectetur nam
        error architecto obcaecati quos temporibus rem doloremque. Itaque id et
        optio. Ea dolor exercitationem expedita! Nobis eligendi cumque rerum
        quos nam itaque magnam iste, hic saepe libero, labore quia. Distinctio
        cupiditate architecto ex aut ad beatae nulla quis, aperiam ullam natus
        quam labore obcaecati magni. Assumenda expedita culpa ullam harum, unde
        voluptatem dolor ipsa consectetur libero laudantium nostrum hic amet! In
        sapiente, laudantium accusantium vel et soluta quasi tenetur error a
        vero, eius vitae nihil. Autem modi sequi eaque voluptate est consectetur
        soluta voluptatibus illo ex labore consequuntur odit minus quas quis
        possimus facilis, at voluptatum totam maiores tempore nostrum! Ex a
        harum animi blanditiis."
          link="//luciamezquida.netlify.app/"
        />
        <Article
          title="34 JavaScript Optimization Techniques to Know in 2021"
          text="The life of a developer is always learning new things and keeping up with the changes shouldn’t be harder than it already is, and my motive is to introduce all the JavaScript best practices such as shorthand and features which we must know as a frontend developer to make our life easier in 2021."
          link="https://javascript.plainenglish.io/34-javascript-optimization-techniques-to-know-in-2021-d561afdf73c3"
        />
      </section>
    </main>
  );
};

Home.propTypes = {
  userName: PropTypes.string,
  inputsAreValid: PropTypes.bool,
};

export default Home;
