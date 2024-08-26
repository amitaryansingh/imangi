import React, { useState } from "react";
import style from "./SeatSelectionPopup.module.css";
import { FaTimes } from "react-icons/fa";

const SeatSelectionPopup = ({ closePopup, theater, sections }) => {
  const [selectedSeats, setSelectedSeats] = useState({});

  const handleSeatClick = (sectionId, row, seatNumber) => {
    const seatKey = `${sectionId}-${row}-${seatNumber}`;
    setSelectedSeats((prev) => ({
      ...prev,
      [seatKey]: !prev[seatKey], // Toggle seat selection
    }));
  };

  return (
    <div className={style.popupOverlay}>
      <div className={style.popupContent}>
        <button className={style.closeBtn} onClick={closePopup}>
          <FaTimes />
        </button>
        <div className={style.theaterInfo}>
          <h2>{theater}</h2>
          <img src={"screen.svg"} alt="Screen" className={style.screenImage} />
          <h2>Screen Here</h2>
        </div>
        <div className={style.seatingArrangement}>
          {sections.map((section) => (
            <div key={section.id} className={style.section}>
              <div className={style.sectionName}>{section.name}</div>
              {section.rows.map((row, rowIndex) => (
                <div key={`${section.id}-${row}`} className={style.row}>
                  <span className={style.rowLabel}>{row}</span>
                  <div className={style.seatBlock}>
                    {/* Part 1: Seats 1-4 */}
                    {Array.from({ length: 4 }).map((_, seatIndex) => {
                      const seatNumber = seatIndex + 1;
                      const seatKey = `${section.id}-${row}-${seatNumber}`;
                      return (
                        <button
                          key={seatKey}
                          className={`${style.seat} ${
                            selectedSeats[seatKey] ? style.selectedSeat : ""
                          }`}
                          onClick={() => handleSeatClick(section.id, row, seatNumber)}
                        >
                          {seatNumber}
                        </button>
                      );
                    })}
                    {/* Blank Space */}
                    <div className={style.seatGap}></div>
                    {/* Part 2: Seats 5-13 */}
                    {Array.from({ length: 9 }).map((_, seatIndex) => {
                      const seatNumber = seatIndex + 5;
                      const seatKey = `${section.id}-${row}-${seatNumber}`;
                      return (
                        <button
                          key={seatKey}
                          className={`${style.seat} ${
                            selectedSeats[seatKey] ? style.selectedSeat : ""
                          }`}
                          onClick={() => handleSeatClick(section.id, row, seatNumber)}
                        >
                          {seatNumber}
                        </button>
                      );
                    })}
                    {/* Blank Space */}
                    <div className={style.seatGap}></div>
                    {/* Part 3: Seats 14-18 */}
                    {Array.from({ length: 5 }).map((_, seatIndex) => {
                      const seatNumber = seatIndex + 14;
                      const seatKey = `${section.id}-${row}-${seatNumber}`;
                      return (
                        <button
                          key={seatKey}
                          className={`${style.seat} ${
                            selectedSeats[seatKey] ? style.selectedSeat : ""
                          }`}
                          onClick={() => handleSeatClick(section.id, row, seatNumber)}
                        >
                          {seatNumber}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionPopup;
