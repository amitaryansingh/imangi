import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import { FaHome, FaSearch } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import Profile from "./Profile"; // Ensure Profile component is imported correctly

const Header = () => {
  const [city, setCity] = useState("Location");
  const [selectedCity, setSelectedCity] = useState("Location");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allLocations = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata",
    "Pune", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
  ];

  const topLocations = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad"];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`
            );
            let cityName =
              response.data.address.city ||
              response.data.address.town ||
              response.data.address.village;
            if (cityName) {
              cityName = cityName.replace(
                / Municipal Corporation| Urban Agglomeration| Metropolitan Region/i,
                ""
              );
            }
            setCity(cityName);
            setSelectedCity(cityName);
          } catch (error) {
            console.error("Error fetching city name:", error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleCityChange = (newCity) => {
    setSelectedCity(newCity);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredLocations = searchQuery
    ? allLocations.filter((location) =>
        location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : topLocations;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="navbar navbar-expand-lg border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <img className={style.navbarBrand} src="logo2.png" alt="LOGO" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <FaHome className={style.icon} />
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <LuCalendarClock className={style.icon} />
                ShowTiming
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <BiSolidOffer className={style.icon} />
                Offers
              </a>
            </li>
          </ul>
          <li className={`navbar-nav ${style['location-dropdown']}`}>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-secondary dropdown-toggle"
                id="locationDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedCity}
              </button>
              <ul className="dropdown-menu" aria-labelledby="locationDropdown">
                <div className={style.dropdownSearchContainer}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Location..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                {filteredLocations.length > 0 ? (
                  filteredLocations.map((location) => (
                    <li key={location}>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleCityChange(location)}
                      >
                        {location}
                      </a>
                    </li>
                  ))
                ) : (
                  <li>
                    <a className="dropdown-item text-muted" href="#">
                      No matching locations
                    </a>
                  </li>
                )}
                
              </ul>
            </div>
          </li>
          <form className={`${style.search} d-flex`} role="search">
            <div className={style.searchContainer}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <FaSearch className={style.searchIcon} />
            </div>
          </form>
          <button
            className={`${style.profile} btn btn-outline-secondary`}
            type="button"
            onClick={openModal}
          >
            <CgProfile className={style.icon2} />
            Profile
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={style.modalOverlay} onClick={closeModal}>
          <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={style.closeButton} onClick={closeModal}>&times;</button>
            <Profile />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
