import React, { useState } from 'react';
import wald from './images/wald2022.jpeg';
import drache from './images/selbstgemalt.jpg';
import { Link } from 'react-router-dom';
import './App.css';
import { url } from 'inspector';
import { Button, Modal } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Modal show={show} onHide={handleClose} centered>
    <Modal.Body style={{backgroundColor: 'black' }}>
      <img onClick={() => handleClose()} style={{borderRadius: 10, borderWidth: 50 , borderColor: 'black'}}  className="img-fluid" alt="" src={drache}/>
    </Modal.Body>
  
  </Modal>
    <div className="App container d-flex flex-column h-100 mt-5">
      <div className="card" style={{backgroundColor: 'white'}}>
      <img  className="img-fluid" alt="" src={wald}/>
        <div className="card-body">
          <h5 className="card-title">Willkommen</h5>
          <p className="card-textfont-weight-bold">
          Hola liebe Pandorianer:innen:
          Schön das ihr euch hier auf unsere gemeinsames Abenteuerexpedition vorbereitet.
          Wir freuen uns schon gigamegaultra dolle auf die gemeinsamen Tage 🖤🖤<br/>
          Bitte kontrolliert eure Namen auf der Gästeliste, das ist eure „EINTRITTSKARTE“, da
          wir als private Veranstaltung angemeldet sind.<br/>
          Wenn Ihr Ideen, Fragen oder Anmerkungen habt, gerne her damit – wendet euch
          einfach an euren Ansprechpartner:innen des Vertrauens 🖤
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
    </>
  );
}

export default App;
