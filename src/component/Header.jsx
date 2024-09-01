import React, { useState, useEffect } from "react";
import style from "./Header.module.css";
import { FaHome, FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GiPositionMarker } from "react-icons/gi";
import Profile from "../Authentication/Profile";
import LocationPopup from "./LocationPopup";

const Header = () => {
  const [city, setCity] = useState("Loading...");
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);

  useEffect(() => {
    const fetchLocation = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
        );
        const data = await response.json();

        let cityName = data.address.city || data.address.town || data.address.village || "Unknown";

        if (cityName) {
          cityName = cityName.replace(
            / Municipal Corporation| Urban Agglomeration| Metropolitan Region/i,
            ""
          ).trim();
        }

        setCity(cityName);
      } catch (error) {
        setCity("Error");
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchLocation(latitude, longitude);
          },
          (error) => {
            console.error("Error fetching location: ", error);
            setCity("Location Unavailable");
          }
        );
      } else {
        setCity("Geolocation not supported");
      }
    };

    getLocation();

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

  // Set the initial theme based on localStorage
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

  return (
    <header className={`${style.header} ${isScrolled ? style.scrolled : ""}`}>
      <div className={style.container}>
        <img className={style.logo} src="logo2.png" alt="LOGO" />
        <nav className={style.nav}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <a className={style.navLink} href="/">
                <FaHome className={`${style.icon} icon`} />
                Home
              </a>
            </li>
            <li className={style.navItem}>
              <a className={style.navLink} href="#">
                <LuCalendarClock className={`${style.icon} icon`} />
                ShowTiming
              </a>
            </li>
            <li className={style.navItem}>
              <a className={style.navLink} href="#">
                <BiSolidOffer className={`${style.icon} icon`} />
                Offers
              </a>
            </li>
          </ul>
        </nav>
        <div className={style.rightSection}>
          <div className={style.leftSection}>
            <div className={style.locationBar} onClick={toggleLocationPopup}>
              <GiPositionMarker className={`${style.iconLocation} icon`} />{" "}
              {city}
            </div>
          </div>
          <form className={style.search} role="search">
            <div className={style.searchContainer}>
              <input
                className={style.searchInput}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <FaSearch className={`${style.searchIcon} icon`} />
            </div>
          </form>
          <div className={style.pro} onClick={toggleProfilePopup}>
            <a className={style.navLink}>
              <CgProfile className={`${style.icon} icon`} />
              Profile
            </a>
          </div>
          {isProfileOpen && <Profile closePopup={toggleProfilePopup} />}
          <div className={style.themeToggle} onClick={toggleTheme}>
            {darkMode ? (
              <FaSun className={`${style.icon} icon`} />
            ) : (
              <FaMoon className={`${style.icon} icon`} />
            )}
          </div>
        </div>
      </div>
      {isLocationPopupOpen && (
        <LocationPopup
          closePopup={toggleLocationPopup}
          onSelectCity={handleCitySelect}
          initialCity={city}
        />
      )}
    </header>
  );
};

export default Header;
