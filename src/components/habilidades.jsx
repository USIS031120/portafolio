import "./header.css";

const Skills = () => {
  return (
    <div className="container skills">
      <div className="row">
        <div className="col-md-12 titulo">
          <h2 className="text-center" id="skills">Habilidades</h2>
        </div>
        <div className="row d-flex flex-wrap justify-content-around container-sk">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 d-flex">
                <p className="html">HTML</p>
                <div className="grafica html"></div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 d-flex">
                <p className="css">CSS</p>
                <div className="grafica css"></div>
              </div>
              {/* <div className='col-md-6'>
                </div> */}
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 d-flex">
                <p className="js">Javascript</p>
                <div className="grafica js"></div>
              </div>
              {/* <div className='col-md-6'>
                </div> */}
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 d-flex">
                <p className="bootstrap">Bootstrap</p>
                <div className="grafica b"></div>
              </div>
              {/* <div className='col-md-6'>
                </div> */}
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 d-flex">
                <p className="jquery">JQuery</p>
                <div className="grafica jquery"></div>
              </div>
              {/* <div className='col-md-6'>
                </div> */}
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 d-flex">
                <p className="mysql">MySQL</p>
                <div className="grafica mysql"></div>
              </div>
              {/* <div className='col-md-6'>
                </div> */}
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 d-flex">
                <p className="nodejs">NodeJS</p>
                <div className="grafica nodejs"></div>
              </div>
              {/* <div className='col-md-6'>
                </div> */}
            </div>
          </div>
 
          {/* <ul>
            <li>HTML: 90%</li>
            <li>CSS: 80%</li>
            <li>Javascript: 80%</li>
            <li>Bootstrap: 85%</li>
            <li>JQuery: 80%</li>
            <li>MySQL: 85%</li>
            <li>NodeJS: 80%</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
