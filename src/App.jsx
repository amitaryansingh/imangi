import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  HashRouter,
} from "react-router-dom";
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
    <HashRouter>
      <Header />
      <Mobheader />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageSlider />
              <Body />
              <Footer />
            </>
          }
        />
        {/* Admin-only routes */}
        <Route
          path="/admin"
          element={
            UserService.adminOnly() ? <AdminDashboard /> : <Navigate to="/" />
          }
        />
        {/* Error page for undefined routes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
