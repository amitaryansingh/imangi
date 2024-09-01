import React, { useState, useEffect } from "react";
import ReservationService from "./ReservationService";
import styles from "../ManageUsers/ManageUsers.module.css";
import UpdateReservation from "./UpdateReservation";
import AddReservation from "./AddReservation";

function ManageReservations({ onClose }) {
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showAddReservation, setShowAddReservation] = useState(false);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await ReservationService.getAllReservations(token);
      setReservations(response || []);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  const deleteReservation = async (reservationId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this Reservation?"
      );
      const token = localStorage.getItem("token");
      if (confirmDelete) {
        await ReservationService.deleteReservation(reservationId, token);
        fetchReservations(); // Refresh the list after deletion
      }
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  const handleUpdateClick = (reservation) => {
    setSelectedReservation(reservation);
  };

  const handleAddClick = () => {
    setShowAddReservation(true);
  };

  const handleUpdateClose = () => {
    setSelectedReservation(null);
    fetchReservations(); // Optionally refresh the reservation list after updating
  };

  const handleAddClose = () => {
    setShowAddReservation(false);
    fetchReservations(); // Refresh the list after adding a new reservation
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2 className={styles.heading}>Manage Reservations</h2>
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
                Add New Reservation
              </button>
            </td>
          </tr>
        </thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Total Price</th>
          <th scope="col">Delete</th>
          <th scope="col">Update</th>
        </tr>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td scope="row">{reservation.id}</td>
              <td>{reservation.customerName}</td>
              <td>{reservation.reservationDate}</td>
              <td>{reservation.total}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteReservation(reservation.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleUpdateClick(reservation)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedReservation && (
        <UpdateReservation
          reservationId={selectedReservation.id}
          onClose={handleUpdateClose}
        />
      )}
      {showAddReservation && <AddReservation onClose={handleAddClose} />}
    </div>
  );
}

export default ManageReservations;
