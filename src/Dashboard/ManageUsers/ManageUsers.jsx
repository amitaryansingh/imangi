import React, { useState, useEffect } from "react";
import styles from "./ManageUsers.module.css";
import UserService from "../../Authentication/UserService"; // Adjust the import path as necessary
import UpdateUser from "./Updateuser";

function ManageUsers({ onClose }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
      const response = await UserService.getAllUsers(token);
      console.log(response);
      setUsers(response.ourUsersList); // Assuming the list of users is under the key 'ourUsersList'
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      // Prompt for confirmation before deleting the user
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );

      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
      if (confirmDelete) {
        await UserService.deleteUser(userId, token);
        // After deleting the user, fetch the updated list of users
        fetchUsers();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdateClick = (user) => {
    setSelectedUser(user);
  };

  const handleUpdateClose = () => {
    setSelectedUser(null);
    fetchUsers(); // Optionally refresh the user list after updating
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2 className={styles.heading}>Manage Users</h2>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
      <div className={styles.form}></div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td scope="row">{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleUpdateClick(user)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <UpdateUser userId={selectedUser.id} onClose={handleUpdateClose} />
      )}
    </div>
  );
}

export default ManageUsers;
