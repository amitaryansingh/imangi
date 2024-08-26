import React, { useState } from "react";
import style from "./BookingPopup.module.css";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BookingPopup = ({ closePopup, movieName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const theaters = [
    {
      name: "Pvr Utkal Galleria",
      times: ["11:00 AM", "02:00 PM", "05:00 PM", "08:00 PM"],
    },
    {
      name: "Inox DN Regallia",
      times: ["10:30 AM", "01:30 PM", "04:30 PM", "07:30 PM", "10:30 PM"],
    },
    {
      name: "Cinepolis Esplanade",
      times: ["11:15 AM", "02:15 PM", "05:15 PM", "08:15 PM"],
    },
    {
      name: "Mona 70mm",
      times: ["10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM", "10:00 PM"],
    },
  ];

  const getNextSixDays = () => {
    const days = [];
    for (let i = 0; i < 6; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i + currentIndex);
      days.push(date);
    }
    return days;
  };

  const handlePrev = () => {
    setCurrentIndex(Math.max(currentIndex - 6, 0));
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 6);
  };

  return (
    <div className={style.popupOverlay}>
      <div className={style.popupContent}>
        <button className={style.closeBtn} onClick={closePopup}>
          <FaTimes />
        </button>
        <h2>{movieName}</h2>
        <div className={style.dateSection}>
          <button onClick={handlePrev} className={style.arrowButton}>
            <FaArrowLeft />
          </button>
          <div className={style.dateSelector}>
            {getNextSixDays().map((date, index) => {
              const day = date.toLocaleDateString("en-US", {
                weekday: "short",
              });
              const dateNum = date.toLocaleDateString("en-US", {
                day: "2-digit",
              });
              const month = date.toLocaleDateString("en-US", {
                month: "short",
              });
              return (
                <button
                  key={index}
                  onClick={() => setSelectedDate(date)}
                  className={`${style.dateButton} ${
                    selectedDate.toDateString() === date.toDateString()
                      ? style.activeDate
                      : ""
                  }`}
                >
                  <div className={style.dateTag}>
                    <div className={style.dateNum}>{dateNum}</div>
                    <div className={style.dateMonth}>{month}</div>
                  </div>
                  <div className={style.dateDay}>{day}</div>
                </button>
              );
            })}
          </div>
          <button onClick={handleNext} className={style.arrowButton}>
            <FaArrowRight />
          </button>
        </div>
        <div className={style.theaterSection}>
          <div className={style.filterOptions}>
            <div className={style.filterOption}>
              <input type="checkbox" id="availableSeats" />
              <label htmlFor="availableSeats">
                <span></span>
                Available Seats
              </label>
            </div>
            <div className={style.filterOption}>
              <input type="checkbox" id="nonCancellable" />
              <label htmlFor="nonCancellable">
                <span></span>
                Non-Cancellable
              </label>
            </div>
          </div>
          <div className={style.theaterList}>
            {theaters.map((theater, index) => (
              <div key={index} className={style.theater}>
                <h2>{theater.name}</h2>
                <div className={style.showtimes}>
                  {theater.times.map((time, timeIndex) => (
                    <button key={timeIndex} className={style.showtimeButton}>
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
