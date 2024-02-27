import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import Typewriter from "typewriter-effect";
// import { Container } from "react-bootstrap";
const Header = () => {
  
  return (
    <header>
      <div className="container-fluid">
        <div className="menu" id="header">
          <ul>
            <li>
              <a href={"#header"}>Inicio</a>
            </li>
            <li>
              <a href={"#skills"}>Habilidades</a>
            </li>
            <li>
              <a href={"#portfolio"}>Proyectos</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hero">
              <div className="contenedor-titulo">
                <h1>
                <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Mi nombre es Herson Lopez")
                  .start()
                }}>
                </Typewriter>
                </h1>
                {/* <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Soy desarrollador web")
                  .start()
                }}>

                </Typewriter> */}
                <h2 className="azul">
                   <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Soy desarrollador web")
                  .start()
                }}>
                </Typewriter>
                </h2>
              </div>
              <div className="redes-sociales">
              <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
