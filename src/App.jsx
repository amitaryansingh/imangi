import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Mobheader from "./component/Mobheader";
import ImageSlider from "./component/ImageSlider";
import Footer from "./component/Footer";
import Body from "./component/Body";
import AdminDashboard from "./Dashboard/AdminDashboard";
import UserService from "./Authentication/UserService";
import ErrorPage from "./Authentication/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Mobheader />
      <Routes>
        {/* Admin-only routes */}
        <Route
          exact
          path="/admin"
          element={
            UserService.adminOnly() ? <AdminDashboard /> : <Navigate to="/" />
          }
        />
        <Route
          exact
          path="/"
          element={
            <>
              <ImageSlider />
              <Body />
              <Footer />
            </>
          }
        />
        {/* Error page for undefined routes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
