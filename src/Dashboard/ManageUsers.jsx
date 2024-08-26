import React from "react";
import styles from "./ManageUsers.module.css";

function ManageUsers({ onClose }) {
  return (
    <div className={styles.container}>
      <button className={styles.closeButton} onClick={onClose}>
        Close
      </button>
      <h2>Manage Users</h2>
      {/* Add users management UI here */}
    </div>
  );
}

export default ManageUsers;
