import React, { useState, useEffect } from "react";
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
  const [city, setCity] = useState("Loading...");
  const [darkMode, setDarkMode] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(
          "https://api.ipstack.com/check?access_key=fa2fb775c91cadda6959e1c6b47fcf47"
        );
        const data = await response.json();
        setCity(data.city || "Unknown");
      } catch (error) {
        setCity("Error");
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark-mode");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark-mode");
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleProfilePopup = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleLocationPopup = () => {
    setIsLocationPopupOpen(!isLocationPopupOpen);
  };

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
    setIsLocationPopupOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
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
          <li className={style.menuItem} onClick={() => { toggleProfilePopup(); closeMenu(); }}>
            <a className={style.menuLink} href="#">
              <CgProfile className={style.icon} />
              Profile
            </a>
            {isProfileOpen && <Profile closePopup={toggleProfilePopup} />}
          </li>
          <li className={style.menuItem} onClick={() => { toggleLocationPopup(); closeMenu(); }}>
            <a className={style.menuLink} href="#">
              <GiPositionMarker className={style.icon} />
              {city}
            </a>
            {isLocationPopupOpen && (
              <LocationPopup
                closePopup={toggleLocationPopup}
                onSelectCity={handleCitySelect}
                initialCity={city}
              />
            )}
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
