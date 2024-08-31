import React, { useState, useEffect } from "react";
import style from "./Header.module.css";
import { FaHome, FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GiPositionMarker } from "react-icons/gi";
import Profile from "../Authentication/Profile";
import LocationPopup from './LocationPopup';

const Header = () => {
  const [city, setCity] = useState("Loading...");
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("http://ip-api.com/json");
        const data = await response.json();
        setCity(data.city);
      } catch (error) {
        setCity("Error");
      }
    };

    fetchLocation();

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark-mode", !darkMode);
  };

  const toggleProfilePopup = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleLocationPopup = () => {
    setIsLocationPopupOpen(!isLocationPopupOpen);
  };

  return (
    <header className={`${style.header} ${isScrolled ? style.scrolled : ""}`}>
      <div className={style.container}>
        <img className={style.logo} src="logo2.png" alt="LOGO" />
        <nav className={style.nav}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <a className={style.navLink} href="/">
                <FaHome className={style.icon} />
                Home
              </a>
            </li>
            <li className={style.navItem}>
              <a className={style.navLink} href="#">
                <LuCalendarClock className={style.icon} />
                ShowTiming
              </a>
            </li>
            <li className={style.navItem}>
              <a className={style.navLink} href="#">
                <BiSolidOffer className={style.icon} />
                Offers
              </a>
            </li>
          </ul>
        </nav>
        <div className={style.rightSection}>
          <div className={style.leftSection}>
            <div className={style.locationBar} onClick={toggleLocationPopup}>
              <GiPositionMarker className={style.iconLocation} /> {city}
            </div>
          </div>
          <form className={style.search} role="search">
            <div className={style.searchContainer}>
              <input
                className={style.searchInput}
                type="search"
                placeholder="Search"
                aria-label="Search"                   />
                 <FaSearch className={style.searchIcon} />
               </div>
             </form>
             <div className={style.pro} onClick={toggleProfilePopup}>
               <a className={style.navLink} href="#">
                 <CgProfile className={style.icon} />
                 Profile
               </a>
             </div>
             {isProfileOpen && <Profile closePopup={toggleProfilePopup} />}
             <div className={style.themeToggle} onClick={toggleTheme}>
               {darkMode ? <FaSun className={style.icon} /> : <FaMoon className={style.icon} />}
             </div>
           </div>
         </div>
         {isLocationPopupOpen && <LocationPopup closePopup={toggleLocationPopup} initialCity={city} />}
       </header>
     );
   };

export default Header;
