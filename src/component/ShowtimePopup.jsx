import React, { useState } from "react";
import style from "./ShowtimePopup.module.css";
import { FaTimes } from "react-icons/fa";
import SeatSelectionPopup from "./SeatSelectionPopup";

const ShowtimePopup = ({ closePopup, theater, time, movieName, movieDuration }) => {
  const [numPeople, setNumPeople] = useState(null);
  const [viewingFormat, setViewingFormat] = useState(null);
  const [language, setLanguage] = useState(null);
  const [isSeatSelectionOpen, setIsSeatSelectionOpen] = useState(false);

  const pricePerSeat = 10;

  const handleNumPeopleClick = (num) => {
    setNumPeople(num);
  };

  const handleViewingFormatClick = (format) => {
    setViewingFormat(format);
  };

  const handleLanguageClick = (lang) => {
    setLanguage(lang);
  };

  const handleSeatSelection = () => {
    setIsSeatSelectionOpen(true);
  };

  const closeSeatSelectionPopup = () => {
    setIsSeatSelectionOpen(false);
  };

  return (
    <>
      <div className={style.popupOverlay}>
        <div className={style.popupContent}>
          <button className={style.closeBtn} onClick={closePopup}>
            <FaTimes />
          </button>
          <div className={style.theaterInfo}>
            <p>{theater}</p>
            <p>Showtime: {time}</p>
          </div>
          <div className={style.movieInfo}>
            <span>{movieName}</span>
            <span>{movieDuration ? movieDuration : "Duration not available"}</span>
          </div>
          <div className={style.details}>
            <p className={style.selectText}>Select number of people:</p>
            <div className={style.numPeople}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  className={`${style.numButton} ${num === numPeople ? style.selected : ""}`}
                  onClick={() => handleNumPeopleClick(num)}
                >
                  {num}
                </button>
              ))}
            </div>
            <div className={style.viewingOptions}>
              <div
                className={`${style.option} ${viewingFormat === "2D" ? style.selected : ""}`}
                onClick={() => handleViewingFormatClick("2D")}
              >
                2D
              </div>
              <div
                className={`${style.option} ${viewingFormat === "3D" ? style.selected : ""}`}
                onClick={() => handleViewingFormatClick("3D")}
              >
                3D
              </div>
            </div>
            <div className={style.languageOptions}>
              <div
                className={`${style.option} ${language === "Hindi" ? style.selected : ""}`}
                onClick={() => handleLanguageClick("Hindi")}
              >
                Hindi
              </div>
              <div
                className={`${style.option} ${language === "English" ? style.selected : ""}`}
                onClick={() => handleLanguageClick("English")}
              >
                English
              </div>
            </div>
            {numPeople && viewingFormat && language && (
              <button className={style.selectSeatBtn} onClick={handleSeatSelection}>
                Select seat
              </button>
            )}
            <div className={style.priceDetails}>
              <p>Price per seat: ${pricePerSeat}</p>
            </div>
          </div>
        </div>
      </div>

      {isSeatSelectionOpen && (
        <SeatSelectionPopup closePopup={closeSeatSelectionPopup} theater={theater} />
      )}
    </>
  );
};

export default ShowtimePopup;
