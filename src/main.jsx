import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ReactLenis } from "lenis/react";

import App from "./App";
import AboutPage from "./AboutPage";
import PackitPage from "./assets/Projects/Packit/PackitPage";
import JustlogPage from "./assets/Projects/Justlog/JustlogPage";
import TaxilkPage from "./assets/Projects/Taxilk/Taxilk";
import GreenifyPage from "./assets/Projects/Greenify/Greenify";
import FitmaldivesPage from "./assets/Projects/Fitmaldives/Fitmaldives";
import RoamridePage from "./assets/Projects/Roamride/Roamride";
import ScrollToTop from "./Scrolltotop";

import "lenis/dist/lenis.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactLenis
        root
        options={{
          autoRaf: true,
          lerp: 0.09,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.5,
        }}
      />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/packit" element={<PackitPage />} />
        <Route path="/justlog" element={<JustlogPage />} />
        <Route path="/taxilk" element={<TaxilkPage />} />
        <Route path="/greenify" element={<GreenifyPage />} />
        <Route path="/fitmaldives" element={<FitmaldivesPage />} />
        <Route path="/roamride" element={<RoamridePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);