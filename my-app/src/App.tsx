import React from 'react';
import titelbild from './images/titelbild.jpg';
import drache from './images/selbstgemalt.jpg';
import { Link } from 'react-router-dom';
import './App.css';
import { url } from 'inspector';

function App() {
  return (
    <div className="App container d-flex flex-column h-100 mt-5">
      <div className="card" style={{backgroundColor: 'white'}}>
        <img  className="img-fluid" alt="" src={drache}/>
        <div className="card-body">
          <h5 className="card-title">Willkommen</h5>
          <p className="card-textfont-weight-bold">
          Hola liebe Pandorianer:innen:
          Schön das ihr euch hier auf unsere gemeinsames Abenteuerexpedition vorbereitet.
          Wir freuen uns schon gigamegaultra dolle auf die gemeinsamen Tage 🖤🖤<br/>
          Bitte kontrolliert eure Namen auf der Gästeliste, das ist eure „EINTRITTSKARTE“, da
          wir als private Veranstaltung angemeldet sind.<br/>
          Wenn Ihr Ideen, Fragen oder Anmerkungen habt, gerne her damit – wendet euch
          einfach an euren Ansprechpartner des Vertrauens 🖤
          </p>
        </div>
      </div>
      <div className="card my-3">
        <Link to="/faq" style={{color : 'black', textDecoration : 'none'}} ><h2>FAQ</h2></Link>
      </div>
      <div className="card my-3">
        <Link to="/Anfahrt" style={{color : 'black', textDecoration : 'none'}} ><h2>Anfahrt</h2></Link>
      </div>
      <div className="card my-3">
        <Link to="/Packliste" style={{color : 'black', textDecoration : 'none'}}><h2>Packliste</h2></Link>
      </div>
      <div className="card my-3 mb-5">
        <Link to="/lastyear" style={{color : 'black', textDecoration : 'none'}}><h2>Letztes Jahr</h2></Link>
      </div>
    </div>
  );
}

export default App;
