import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Mobheader from "./component/Mobheader";
import ImageSlider from "./component/ImageSlider";
import Footer from "./component/Footer";
import Body from "./component/Body";
import AdminDashboard from "./Dashboard/AdminDashboard";

function App() {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {location.pathname !== "/admin" && <Header />}
      <button onClick={toggleMode} className="mode-toggle">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
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
        <Route path="/admin" element={<AdminDashboard />}></Route>
      </Routes>
      {location.pathname !== "/admin" && <Footer />}
      <Mobheader />
    </>
  );
}

export default App;
