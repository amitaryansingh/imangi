import React, { useState } from "react";
import style from "./Mobheader.module.css";
import { FaBars, FaHome, FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GiPositionMarker } from "react-icons/gi";
import Profile from "../Authentication/Profile";
import LocationPopup from "./LocationPopup";
import { Link } from "react-router-dom";

const Mobheader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleLocationPopup = () => {
    setIsLocationPopupOpen(!isLocationPopupOpen);
  };

  const toggleTheme = () => {
    setDarkMode(prevDarkMode => {
      const newDarkMode = !prevDarkMode;
      document.documentElement.classList.toggle("dark-mode", newDarkMode);
      return newDarkMode;
    });
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    toggleLocationPopup();
  };

  return (
    <>
      <div className={style.mobileHeader}>
        <FaBars className={style.menuIcon} onClick={toggleMenu} />
        <img className={style.logo} src="logo2.png" alt="LOGO" />
      </div>
      <div className={`${style.sideMenu} ${menuOpen ? style.open : ""}`}>
        <div className={style.menuItems}>
          <li className={style.menuItem} onClick={closeMenu}>
            <Link className={style.menuLink} to="/">
              <FaHome className={style.icon} />
              Home
            </Link>
          </li>
          <li className={style.menuItem} onClick={closeMenu}>
            <Link className={style.menuLink} to="/booking">
              <LuCalendarClock className={style.icon} />
              ShowTiming
            </Link>
          </li>
          <li className={style.menuItem} onClick={closeMenu}>
            <Link className={style.menuLink} to="/offers">
              <BiSolidOffer className={style.icon} />
              Offers
            </Link>
          </li>
          <li className={style.menuItem} onClick={() => { togglePopup(); closeMenu(); }}>
            <a className={style.menuLink} href="#">
              <CgProfile className={style.icon} />
              Profile
            </a>
            {showPopup && <Profile closePopup={togglePopup} />}
          </li>
          <li className={style.menuItem} onClick={() => { toggleLocationPopup(); closeMenu(); }}>
            <a className={style.menuLink} href="#">
              <GiPositionMarker className={style.icon} />
              {selectedLocation}
            </a>
            {isLocationPopupOpen && <LocationPopup onSelectLocation={handleLocationSelect} closePopup={toggleLocationPopup} />}
          </li>
          <li className={style.menuItem} onClick={closeMenu}>
            <form className={style.search} role="search">
              <div className={style.searchContainer}>
                <input
                  className={style.searchInput}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <FaSearch className={style.searchIcon} />
              </div>
            </form>
          </li>
          <li className={style.menuItem} onClick={() => { toggleTheme(); closeMenu(); }}>
            <a className={style.menuLink} href="#">
              {darkMode ? <FaSun className={style.icon} /> : <FaMoon className={style.icon} />}
              Theme
            </a>
          </li>
        </div>
      </div>
      <div className={style.bottomHeader}>
        <li className={style.bottomMenuItem}>
          <Link className={style.menuLink} to="/">
            <FaHome className={style.icon} />
            Home
          </Link>
        </li>
        <li className={style.bottomMenuItem}>
          <Link className={style.menuLink} to="/booking">
            <LuCalendarClock className={style.icon} />
            ShowTiming
          </Link>
        </li>
        <li className={style.bottomMenuItem}>
          <Link className={style.menuLink} to="/offers">
            <BiSolidOffer className={style.icon} />
            Offers
          </Link>
        </li>
      </div>
    </>
  );
};

export default Mobheader;
