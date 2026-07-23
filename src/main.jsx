import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './AboutPage';
import PackitPage from './assets/Projects/Packit/PackitPage';
import JustlogPage from './assets/Projects/Justlog/JustlogPage';
import TaxilkPage from './assets/Projects/Taxilk/Taxilk';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/packit" element={<PackitPage />} />
        <Route path="/justlog" element={<JustlogPage />} />
        <Route path="/taxilk" element={<TaxilkPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);