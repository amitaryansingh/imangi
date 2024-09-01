import React, { useState, useEffect } from "react";
import ReservationService from "./ReservationService";
import MovieService from "../ManageMovies/MovieService";
import TheaterService from "../ManageTheaters/TheaterService";
import style from "../ManageUsers/Updateuser.module.css";

function UpdateReservation({ reservationId, onClose }) {
  const [reservationData, setReservationData] = useState({
    reservationDate: "",
    startAt: "",
    seats: "",
    ticketPrice: "",
    total: "",
    movieName: "",
    theatreId: "",
    customerName: "",
    customerPhone: "",
  });

  const [movies, setMovies] = useState([]);
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    fetchReservationDataById(reservationId);
    fetchMovies();
    fetchTheaters();
  }, [reservationId]);

  const fetchReservationDataById = async (reservationId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await ReservationService.getReservationById(
        reservationId,
        token
      );
      const {
        reservationDate,
        startAt,
        seats,
        ticketPrice,
        total,
        movieName,
        theatreId,
        customerName,
        customerPhone,
      } = response;
      setReservationData({
        reservationDate,
        startAt,
        seats,
        ticketPrice,
        total,
        movieName,
        theatreId,
        customerName,
        customerPhone,
      });
    } catch (error) {
      console.error("Error fetching reservation data:", error);
    }
  };

  const fetchMovies = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await MovieService.getAllMovies();
      setMovies(response || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchTheaters = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await TheaterService.getAllTheaters(token);
      setTheaters(response || []);
    } catch (error) {
      console.error("Error fetching theaters:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const confirmUpdate = window.confirm(
        "Are you sure you want to update this reservation?"
      );
      if (confirmUpdate) {
        const token = localStorage.getItem("token");
        await ReservationService.updateReservation(
          reservationId,
          reservationData,
          token
        );
        onClose();
      }
    } catch (error) {
      alert("An error occurred while updating the reservation.");
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
        <h2>Update Reservation</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Reservation Date:</label>
            <input
              type="date"
              name="reservationDate"
              className={`form-control ${style.data}`}
              value={reservationData.reservationDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Start Time:</label>
            <input
              type="time"
              name="startAt"
              className={`form-control ${style.data}`}
              value={reservationData.startAt}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Seats:</label>
            <input
              type="number"
              name="seats"
              className={`form-control ${style.data}`}
              value={reservationData.seats}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Ticket Price:</label>
            <input
              type="number"
              step="0.01"
              name="ticketPrice"
              className={`form-control ${style.data}`}
              value={reservationData.ticketPrice}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Total:</label>
            <input
              type="number"
              step="0.01"
              name="total"
              className={`form-control ${style.data}`}
              value={reservationData.total}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Movie:</label>
            <select
              name="movieName"
              className={`form-control ${style.data}`}
              value={reservationData.movieName}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Movie</option>
              {movies.map((movie) => (
                <option key={movie.id} value={movie.title}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Theater:</label>
            <select
              name="theatreId"
              className={`form-control ${style.data}`}
              value={reservationData.theatreId}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Theater</option>
              {theaters.map((theater) => (
                <option key={theater.id} value={theater.id}>
                  {theater.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Customer Name:</label>
            <input
              type="text"
              name="customerName"
              className={`form-control ${style.data}`}
              value={reservationData.customerName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Customer Phone:</label>
            <input
              type="text"
              name="customerPhone"
              className={`form-control ${style.data}`}
              value={reservationData.customerPhone}
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

export default UpdateReservation;
