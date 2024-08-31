import React, { useState, useEffect } from "react";
import ShowtimeService from "./ShowtimeService";
import style from "../ManageUsers/Updateuser.module.css";

function AddShowtime({ onClose }) {
  const [showtimeData, setShowtimeData] = useState({
    movieId: "",
    theatreId: "",
    startDate: "",
    endDate: "",
    ticketPrice: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShowtimeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const confirmAdd = window.confirm(
        "Are you sure you want to add this showtime?"
      );
      if (confirmAdd) {
        const token = localStorage.getItem("token");
        await ShowtimeService.addShowtime(showtimeData, token);
        onClose();
      }
    } catch (error) {
      alert("An error occurred while adding the showtime.");
    }
  };

  const closePopup = () => {
    onClose();
  };

  return (
    <div className={style.popupOverlay}>
      <div className={style.popupContent}>
        <button
          className={style.closeBtn}
          onClick={closePopup}
          onTouchStart={closePopup}
        >
          &times;
        </button>
        <h2>Add Showtime</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Movie ID:</label>
            <input
              type="text"
              name="movieId"
              className={`form-control ${style.data}`}
              value={showtimeData.movieId}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Theatre ID:</label>
            <input
              type="text"
              name="theatreId"
              className={`form-control ${style.data}`}
              value={showtimeData.theatreId}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              className={`form-control ${style.data}`}
              value={showtimeData.startDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              className={`form-control ${style.data}`}
              value={showtimeData.endDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Ticket Price:</label>
            <input
              type="number"
              name="ticketPrice"
              className={`form-control ${style.data}`}
              value={showtimeData.ticketPrice}
              onChange={handleInputChange}
              required
            />
          </div>
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddShowtime;
