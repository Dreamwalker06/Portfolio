import "./projects.scss";
import SousTitre from "../sousTitre/SousTitre";
import Cards from "../cards/Cards";
import homeLogo from "../../assets/images/LOGO-Kasa.webp"
import React, { useState, useRef } from "react";
import Grimoire from "../../assets/images/MonVieuxGrimoire_1.webp"
import SophieBluel from "../../assets/images/SophieBluel_1.webp"

const Projects = () => {
  const [filter, setFilter] = useState("Tous");

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const filterCards = (card) => {
    if (filter === "Tous") {
      return true; // Afficher toutes les cartes
    }
    return (
      card.props.technologies &&
      card.props.technologies.includes(filter)
    ); // Vérifier si la carte contient la technologie du filtre
  };
  
 

  return (
    <div id="projects">
      <div className="projets-container">
        <SousTitre title="MES PROJETS" />
        <p className="underscore">______</p>
        <div className="projects_button_container">
        <button className="projects_button" onClick={() => handleFilter("Tous")}>TOUS</button>
          <button className="projects_button"onClick={() => handleFilter("React")}>REACT</button>
          <button className="projects_button"onClick={() => handleFilter("Node")}>NODE</button>
          <button className="projects_button"onClick={() => handleFilter("Javascript")}>JAVASCRIPT</button>
        </div>
        <div className="cards-container">
  {filterCards(<Cards image={homeLogo} technologies={["React"]} />) && (
    <Cards image={homeLogo} technologies={["React"]} />
  )}
  {filterCards(<Cards image={Grimoire} technologies={["Node"]} />) && (
    <Cards image={Grimoire} technologies={["Node"]} />
  )}
    {filterCards(<Cards image={SophieBluel} technologies={["Javascript"]} />) && (
    <Cards image={SophieBluel} technologies={["Javascript"]} />
  )}
</div>
      </div>
    </div>
  );
};

export default Projects;
