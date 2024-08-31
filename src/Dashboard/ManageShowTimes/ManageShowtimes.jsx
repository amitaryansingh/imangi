import React, { useState, useEffect } from "react";
import ShowtimeService from "./ShowtimeService";
import styles from "../ManageUsers/ManageUsers.module.css";
import UpdateShowtime from "./UpdateShowtimes";
import AddShowtime from "./AddShowtimes";

function ManageShowtimes({ onClose }) {
  const [showtimes, setShowtimes] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [showAddShowtime, setShowAddShowtime] = useState(false);

  useEffect(() => {
    fetchShowtimes();
  }, []);

  const fetchShowtimes = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await ShowtimeService.getAllShowtimes(token);
      setShowtimes(response || []);
    } catch (error) {
      console.error("Error fetching showtimes:", error);
    }
  };

  const deleteShowtime = async (showtimeId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this Showtime?"
      );
      const token = localStorage.getItem("token");
      if (confirmDelete) {
        await ShowtimeService.deleteShowtime(showtimeId, token);
        fetchShowtimes(); // Refresh the list after deletion
      }
    } catch (error) {
      console.error("Error deleting showtime:", error);
    }
  };

  const handleUpdateClick = (showtime) => {
    setSelectedShowtime(showtime);
  };

  const handleAddClick = () => {
    setShowAddShowtime(true);
  };

  const handleUpdateClose = () => {
    setSelectedShowtime(null);
    fetchShowtimes(); // Optionally refresh the showtime list after updating
  };

  const handleAddClose = () => {
    setShowAddShowtime(false);
    fetchShowtimes(); // Refresh the list after adding a new showtime
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2 className={styles.heading}>Manage Showtimes</h2>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
      <table className="table table-striped text-center align-middle">
        <thead>
          <tr>
            <td colSpan="6">
              <button
                className="btn btn-success w-100"
                onClick={handleAddClick}
              >
                Add New Showtime
              </button>
            </td>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Ticket Price</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {showtimes.map((showtime) => (
            <tr key={showtime.id}>
              <td scope="row">{showtime.id}</td>
              <td scope="col">{showtime.ticketPrice}</td>
              <td scope="col">{showtime.startDate}</td>
              <td scope="col">{showtime.endDate}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteShowtime(showtime.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleUpdateClick(showtime)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedShowtime && (
        <UpdateShowtime
          showtimeId={selectedShowtime.id}
          onClose={handleUpdateClose}
        />
      )}
      {showAddShowtime && <AddShowtime onClose={handleAddClose} />}
    </div>
  );
}

export default ManageShowtimes;
