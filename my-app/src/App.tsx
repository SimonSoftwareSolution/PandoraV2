import React from 'react';
import titelbild from './images/titelbild.jpg';
import drache from './images/wald.jpeg';
import { Link } from 'react-router-dom';
import './App.css';
import { url } from 'inspector';

function App() {
  return (
    <div className="App container d-flex flex-column h-100">
        <div className="card my-3 noBorder">
        <h2>🅿🅰🅽🅳🅾🆁🅰 ❷⓿❷❷</h2>
      </div>
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
        <Link to="/faq" style={{color : 'black', textDecoration : 'none'}} >FAQ</Link>
      </div>
      <div className="card my-3">
        <Link to="/Anfahrt" style={{color : 'black', textDecoration : 'none'}} >Anfahrt</Link>
      </div>
      <div className="card my-3">
        <Link to="/Packliste" style={{color : 'black', textDecoration : 'none'}}>Packliste</Link>
      </div>
      <div className="card my-3">
        <Link to="/lastyear" style={{color : 'black', textDecoration : 'none'}}>Letztes Jahr</Link>
      </div>
    </div>
  );
}

export default App;
