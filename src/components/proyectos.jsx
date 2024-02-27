import agencia from './agencia.png'
const Proyectos = () => {
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h2 className="text-center titulo-proyectos" id='portfolio'>Proyectos</h2>
            </div>
            <div className="col-md-12 portfolio">
                <div className="col-md-3">
                    <img src=""></img>
                </div>
                <div className="col-md-3">
                    <a href="https://usis031120.github.io/"><img src={agencia}></img></a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Proyectos;