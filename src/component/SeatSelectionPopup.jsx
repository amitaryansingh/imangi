import React, { useState } from "react";
import style from "./SeatSelectionPopup.module.css";
import { FaTimes } from "react-icons/fa";

const SeatSelectionPopup = ({ closePopup, theater }) => {
  const rows = "ABCDEFGHIJKLMNO".split("").slice(0, 15);
  const [selectedSeats, setSelectedSeats] = useState({});

  const seatsPerRow = {
    A: 15,
    B: 10,
    C: 5,
    D: 20,
    // Add more rows as needed
  };

  const handleSeatClick = (row, seatNumber) => {
    const seatKey = `${row}${seatNumber}`;
    setSelectedSeats((prev) => ({
      ...prev,
      [seatKey]: !prev[seatKey],
    }));
  };

  return (
    <div className={style.popupOverlay}>
      <div className={style.popupContent}>
        <button className={style.closeBtn} onClick={() => closePopup()}>
          <FaTimes />
        </button>
        <div className={style.theaterInfo}>
          <h2>{theater}</h2>
        </div>
        <div className={style.seatingArrangement}>
          {rows.map((row) => (
            <div key={row} className={style.row}>
              <span className={style.rowLabel}>{row}</span>
              {Array.from({ length: seatsPerRow[row] || 10 }).map((_, i) => (
                <button
                  key={`${row}-${i + 1}`}
                  className={`${style.seat} ${
                    selectedSeats[`${row}${i + 1}`] ? style.selectedSeat : ""
                  }`}
                  onClick={() => handleSeatClick(row, i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionPopup;
