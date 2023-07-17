import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <ul className="nav_bar">
          <NavLink exact="true" to="/" activeclassname="active">
            <li className="nav_item">Accueil</li>
          </NavLink>
          <NavLink exact="true" to="/" activeclassname="active">
            <li className="nav_item">Présentation</li>
          </NavLink>
          <NavLink exact="true" to="/" activeclassname="active">
            <li className="nav_item">Réalisation</li>
          </NavLink>
          <NavLink exact="true" to="/" activeclassname="active">
            <li className="nav_item">Compétences</li>
          </NavLink>
          <NavLink exact="true" to="/" activeclassname="active">
            <li className="nav_item">Contact</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
