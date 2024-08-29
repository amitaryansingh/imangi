import React from "react";
import styles from "./ManageTheatres.module.css";

function ManageTheatres({ onClose }) {
  return (
    <div className={styles.container}>
      <button className={styles.closeButton} onClick={onClose}>
        Close
      </button>
      <h2>Manage Theatres</h2>
      {/* Add theatre management UI here */}
    </div>
  );
}

export default ManageTheatres;
