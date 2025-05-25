import React from "react";
import Orchids from "./components/Orchids";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import { OrchidsData } from "../ListOfOrchids.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
  return (
    <>
      <Header />
      <div className="row">
        {OrchidsData.map((item) => (
          <div className="col-md-4">
            <Orchids {...item} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
