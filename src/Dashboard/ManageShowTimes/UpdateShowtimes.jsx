import React, { useState, useEffect } from "react";
import ShowtimeService from "./ShowtimeService";
import style from "../ManageUsers/Updateuser.module.css";

function UpdateShowtime({ showtimeId, onClose }) {
  const [showtimeData, setShowtimeData] = useState({
    ticketPrice: "",
    startDate: "",
    endDate: "",
    movieId: "",
    theaterId: "",
  });

  useEffect(() => {
    fetchShowtimeDataById(showtimeId);
  }, [showtimeId]);

  const fetchShowtimeDataById = async (showtimeId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await ShowtimeService.getShowtimeById(showtimeId, token);
      const { ticketPrice, startDate, endDate, movieId, theaterId } = response;
      setShowtimeData({ ticketPrice, startDate, endDate, movieId, theaterId });
    } catch (error) {
      console.error("Error fetching showtime data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShowtimeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Showtime ID:", showtimeId);
    try {
      const confirmUpdate = window.confirm(
        "Are you sure you want to update this showtime?"
      );
      if (confirmUpdate) {
        const token = localStorage.getItem("token");
        await ShowtimeService.updateShowtime(showtimeId, showtimeData, token);
        onClose();
      }
    } catch (error) {
      alert("An error occurred while updating the showtime.");
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
        <h2>Update Showtime</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Ticket Price:</label>
            <input
              type="text"
              name="ticketPrice"
              className={`form-control ${style.data}`}
              value={showtimeData.ticketPrice}
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
            <label>Theater ID:</label>
            <input
              type="text"
              name="theaterId"
              className={`form-control ${style.data}`}
              value={showtimeData.theaterId}
              onChange={handleInputChange}
              required
            />
          </div>
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateShowtime;
