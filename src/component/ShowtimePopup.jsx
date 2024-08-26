import React, { useState } from "react";
import style from "./ShowtimePopup.module.css";
import { FaTimes } from "react-icons/fa";

const ShowtimePopup = ({ closePopup, theater, time }) => {
  const [numPeople, setNumPeople] = useState(1);

  // Assume price per seat
  const pricePerSeat = 10;

  const handleChange = (e) => {
    setNumPeople(e.target.value);
  };

  const totalPrice = numPeople * pricePerSeat;

  return (
    <div className={style.popupOverlay}>
      <div className={style.popupContent}>
        <button className={style.closeBtn} onClick={closePopup}>
          <FaTimes />
        </button>
        <h2>{theater}</h2>
        <p>Showtime: {time}</p>
        <div className={style.details}>
          <label htmlFor="numPeople">Number of people:</label>
          <input
            type="number"
            id="numPeople"
            value={numPeople}
            min="1"
            onChange={handleChange}
          />
          <div className={style.priceDetails}>
            <p>Price per seat: ${pricePerSeat}</p>
            <p>Total Price: ${totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowtimePopup;
