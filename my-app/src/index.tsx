import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Anfahrt from './pages/anfahrt';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/App.css';
import Packliste from './pages/packliste';
import FAQ from './pages/faq';
import Bildergalerie from './pages/lastyear';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="anfahrt" element={<Anfahrt />} />
      <Route path="packliste" element={<Packliste />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="lastyear" element={<Bildergalerie />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
