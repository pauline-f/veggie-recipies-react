import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <nav>
      <Link className="link nav-link" to="/">Accueil</Link>
      <Link className="link nav-link" to="recipes">Recettes</Link>
    </nav>
  );
}

export default NavBar;
