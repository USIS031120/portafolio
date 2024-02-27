import logo from './logo.svg';
import './App.css';
import Header from'./components/header'
import Bootstrap from 'bootstrap'
import {  } from 'react-bootstrap'
import Skills from './components/habilidades';
import Proyectos from './components/proyectos';
import Footer from './components/footer';
function App() {
    return(
        <div>
            <Header />
            <Skills />
            <Proyectos />
            <Footer />
        </div>
    )
}

export default App;
