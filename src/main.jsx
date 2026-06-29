
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './AboutPage';
import PackitPage from './assets/Projects/Packit/PackitPage';
import './index.css'; // keep your global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/packit" element={<PackitPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);