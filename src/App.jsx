import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Mobheader from "./component/Mobheader";
import Herovideo from "./component/Herovideo";
import ImageSlider from "./component/ImageSlider";
import Footer from "./component/Footer";
import Body from "./component/Body";

function App() {
  const location = useLocation(); // Get the current location

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageSlider />
              <Body />
            </>
          }
        />
      </Routes>
      <Footer />
      <Mobheader />
    </>
  );
}

export default App;