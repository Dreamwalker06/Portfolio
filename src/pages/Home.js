import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Form from "../components/form/Form";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Presentation from "../components/presentation/Presentation";
/* import ScrollToTop from "../components/scrollToTop/ScrollToTop"; */

const Home = () => {
  return (
    <div>
      <Header />
      {/*    <LoremIpsum p={10} />  */}
      <Presentation />
      {/*   <LoremIpsum p={10} /> */}
      <Projects />
      {/*   <LoremIpsum p={10} /> */}
      <Skills />
      {/*       <LoremIpsum p={10} /> */}
      <Form />
      {/*     <LoremIpsum p={10} /> */}
      {/*       <ScrollToTop /> */}
      <Footer />
    </div>
  );
};

export default Home;
