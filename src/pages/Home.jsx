import React from "react";
import { NavLink } from "react-router-dom";
import './Home.scss'
import { FaGithub, FaLinkedin } from "react-icons/fa"
const Home = () => {
  return (
    <div className="cont-home">
     
      <nav className="home">
        
        <div>
          <NavLink to="/addcandidate" activeclassname={"active"}>
            Añadir Candidatos
          </NavLink>
        </div>
        <div>
          <NavLink to="/candidatelist" activeclassname={"active"}>
            Lista de Candidatos
          </NavLink>
        </div>
      </nav>
    <div className="info">
      <h3>Prueba realizada por Claudiu Adrian Pasca</h3>
      <a href="https://github.com/clauadri">GitHub <FaGithub/></a>
      <a href="https://www.linkedin.com/in/claudiu-adrian-pasca-fullstackdeveloper/">Linkedin <FaLinkedin/></a>
    </div>
    </div>
  );
};

export default Home;
