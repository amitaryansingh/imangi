import React, { useState } from "react";
import style from "./SeatSelectionPopup.module.css";
import { FaTimes } from "react-icons/fa";

const SeatSelectionPopup = ({
  closePopup,
  theater,
  numPeople,
  viewingFormat,
  language,
  pricePerSeat,
  sections,
}) => {
  const [selectedSeats, setSelectedSeats] = useState({});

  const handleSeatClick = (sectionId, row, seatNumber) => {
    const seatKey = `${sectionId}-${row}${seatNumber}`;
    if (!selectedSeats[seatKey] && Object.keys(selectedSeats).length < numPeople) {
      setSelectedSeats((prev) => ({
        ...prev,
        [seatKey]: !prev[seatKey],
      }));
    }
  };

  const calculateTotalPrice = () => {
    return Object.keys(selectedSeats).reduce((total, seatKey) => {
      const sectionId = seatKey.split("-")[0];
      const section = sections.find((sec) => sec.id === sectionId);
      return total + section.pricePerSeat;
    }, 0);
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
          {sections.map((section) => (
            <div key={section.id} className={style.section}>
              <div className={style.sectionHeader}>
                <h3>{section.name}</h3>
                <p>Price per seat: ${section.pricePerSeat}</p>
              </div>
              {section.rows.map((row, rowIndex) => (
                <div key={`${section.id}-${row}`} className={style.row}>
                  <span className={style.rowLabel}>{row}</span>
                  {Array.from({ length: section.seatsPerRow[rowIndex] }).map((_, i) => (
                    <button
                      key={`${section.id}-${row}-${i + 1}`}
                      className={`${style.seat} ${
                        selectedSeats[`${section.id}-${row}${i + 1}`]
                          ? style.selectedSeat
                          : ""
                      }`}
                      onClick={() => handleSeatClick(section.id, row, i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              ))}
              {section.gap && <div className={style.sectionGap}></div>}
            </div>
          ))}
        </div>
        <div className={style.priceDetails}>
          <p>Total price: ${calculateTotalPrice()}</p>
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionPopup;
