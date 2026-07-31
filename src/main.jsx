import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import AboutPage from "./AboutPage";
import PackitPage from "./assets/Projects/Packit/PackitPage";
import JustlogPage from "./assets/Projects/Justlog/JustlogPage";
import ScrollToTop from "./Scrolltotop";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/packit" element={<PackitPage />} />
        <Route path="/justlog" element={<JustlogPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);