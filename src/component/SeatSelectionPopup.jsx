import React, { useState } from "react";
import style from "./SeatSelectionPopup.module.css";
import { FaTimes } from "react-icons/fa";

const SeatSelectionPopup = ({ closePopup, theater, sections }) => {
  const [selectedSeats, setSelectedSeats] = useState({});

  const handleSeatClick = (row, seatNumber, sectionId) => {
    const seatKey = `${sectionId}-${row}${seatNumber}`;
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
          {sections.map((section) => (
            <div key={section.id} className={style.section}>
              <div className={style.sectionName}>{section.name}</div>
              {section.rows.map((row, rowIndex) => (
                <div key={`${section.id}-${row}`} className={style.row}>
                  <span className={style.rowLabel}>{row}</span>
                  {section.seatsPerRow.map((block, blockIndex) =>
                    block.gap ? (
                      <div key={`gap-${blockIndex}`} className={style.seatGap}></div>
                    ) : (
                      <div key={`block-${blockIndex}`} className={style.seatBlock}>
                        {Array.from({ length: block.seats }).map((_, seatIndex) => (
                          <button
                            key={`${row}-${seatIndex + 1}`}
                            className={`${style.seat} ${
                              selectedSeats[`${section.id}-${row}${seatIndex + 1}`]
                                ? style.selectedSeat
                                : ""
                            }`}
                            onClick={() =>
                              handleSeatClick(row, seatIndex + 1, section.id)
                            }
                          >
                            {seatIndex + 1}
                          </button>
                        ))}
                      </div>
                    )
                  )}
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
