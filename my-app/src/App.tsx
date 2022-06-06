import React from 'react';
import titelbild from './images/titelbild.jpg';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App container">
        <div className="card my-3 noBorder">
        <h2>🅿🅰🅽🅳🅾🆁🅰 ❷⓿❷❷</h2>
      </div>
      <div className="card">
        <img src={titelbild}/>
        <div className="card-body">
          <h5 className="card-title">Willkommen</h5>
          <p className="card-text">
            Hier ein langer Begrüßungstext 
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="card my-3">
        <Link to="/Anfahrt" style={{color : 'black', textDecoration : 'none'}} >Anfahrt</Link>
      </div>
      <div className="card my-3">
        <Link to="/Packliste" style={{color : 'black', textDecoration : 'none'}}>Packliste</Link>
      </div>
      <div className="card my-3">
        <Link to="/Bildergalerie" style={{color : 'black', textDecoration : 'none'}}>Letztes Jahr ❤️</Link>
      </div>
    </div>
  );
}

export default App;
