import React, { useState } from "react";
import { FaTimes, FaFilter } from "react-icons/fa"; // Import the cross icon for closing
import { useLocation, useNavigate } from "react-router-dom";
import style from "./Bookingpage.module.css";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const location = useLocation();
  const navigate = useNavigate(); // For programmatic navigation
  const movieName = location.state?.movieName || "Book Your Movie Tickets"; // Default text

  const theaters = [
    { name: "Newfangled Miniplex: Motera", times: ["11:00 PM"] },
    { name: "AB Miniplex: Shivranjni Cross Road", times: ["11:05 PM"] },
    { name: "Apple Cinema: Bapunagar", times: ["10:45 PM"] },
    { name: "Apple Multiplex: Gota", times: ["10:15 PM"] },
  ];

  const getNextSixDays = () => {
    const days = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date();
      date.setDate(selectedDate.getDate() + i);
      days.push(date.toDateString());
    }
    return days;
  };

  return (
    <div className={style.container}>
      <button onClick={() => navigate(-1)} className={style.closeButton}>
        <FaTimes />
      </button>
      <h1>{movieName}</h1>
      <div className={style.dateSelector}>
        {getNextSixDays().map((date, index) => (
          <button
            key={index}
            onClick={() => setSelectedDate(new Date(date))}
            className={`${style.dateButton} ${
              selectedDate.toDateString() === date ? style.activeDate : ""
            }`}
          >
            {date}
          </button>
        ))}
      </div>

      <div className={style.filterOptions}>
        <h3>
          <FaFilter /> Filters:
        </h3>
        <label>
          <input type="checkbox" /> Available Seats
        </label>
        <label>
          <input type="checkbox" /> Non-Cancellable
        </label>
      </div>

      <div className={style.theaterList}>
        {theaters.map((theater, index) => (
          <div key={index} className={style.theater}>
            <h2>{theater.name}</h2>
            <div className={style.showtimes}>
              {theater.times.map((time, idx) => (
                <button className={style.showtimeButton} key={idx}>
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
