import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const scrollToContact = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header>
      <div>
        <ul className="nav_bar">
          <NavLink to="/" className="active">
            <li className="nav_item">Accueil</li>
          </NavLink>
          <NavLink to="/" className="active">
            <li className="nav_item" onClick={() => scrollToContact('presentation')}>Présentation</li>
          </NavLink>
          <li className="nav_item" onClick={() => scrollToContact('projects')}>
            Réalisation
          </li>
          <li className="nav_item" onClick={() => scrollToContact('skills')}>
            Compétences
          </li>
          <li className="nav_item" onClick={() => scrollToContact('contact')}>
            Contact
          </li>
        </ul>
      </div>
    </header>
  );
  
};

export default Header;
