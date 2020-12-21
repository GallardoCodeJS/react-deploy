import './style/App.css';
import './style/Perfil.css';

/* Importa archivos JS*/
import Perfil from './Perfil.js';
import Curriculum from './Curriculum.js';

/* Importa las fotos */
import Foto from './img/caca.jpg';
import Foto2 from './img/io.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { AnimatedSwitch } from 'react-router-transition';


function App() {

  return (

    <Router>

      <div id="container">
        <Link to="/Perfil"><div className="d">
          <img className="imgdiv" src={Foto} alt="Nachito" />
        </div></Link>
        <Link to="/Curriculum"><div className="d">
          <img className="imgdiv" src={Foto2} alt="Nachito" />
        </div></Link>
        <Link to="/Perfil"><div className="d">
          <img className="imgdiv" src="./img/io.jpg" alt="Nachito" />
        </div></Link>
        <Link to="/Perfil"><div className="d">
          <img className="imgdiv" src="./img/io.jpg" alt="Nachito" />
        </div></Link>
      </div>

      <Switch >
        <AnimatedSwitch
          atEnter={{ opacity: 1.25 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 2 }}
        >
          <Route exact path="/Perfil">
            <Perfil />
          </Route>

          <Route exact path="/Curriculum">
            <Curriculum />
          </Route>

        </AnimatedSwitch>
      </Switch>

    </Router>

  );
}

export default App;