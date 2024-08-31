import React, { useState, useEffect } from "react";
import styles from "./ManageUsers.module.css";
import UserService from "../../Authentication/UserService";
import UpdateUser from "./Updateuser";
import AddUser from "./AddUser";
function ManageUsers({ onClose }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await UserService.getAllUsers(token);
      setUsers(response.ourUsersList);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );

      const token = localStorage.getItem("token");
      if (confirmDelete) {
        await UserService.deleteUser(userId, token);
        fetchUsers();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleAddClick = () => {
    setShowAddUser(true);
  };

  const handleAddClose = () => {
    setShowAddUser(false);
    fetchUsers();
  };

  const handleUpdateClick = (user) => {
    setSelectedUser(user);
  };

  const handleUpdateClose = () => {
    setSelectedUser(null);
    fetchUsers();
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
      <table className="table table-striped text-center align-middle">
        <thead>
          <tr>
            <td colspan="6">
              <button
                className="btn btn-success w-100"
                onClick={handleAddClick}
              >
                Add New User
              </button>
            </td>
          </tr>
        </thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Delete</th>
          <th scope="col">Update</th>
        </tr>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td scope="row">{user.id}</td>
              <td scope="col">{user.name}</td>
              <td scope="col">{user.email}</td>
              <td scope="col">{user.role}</td>
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
      {showAddUser && <AddUser onClose={handleAddClose} />}
    </div>
  );
}

export default ManageUsers;
