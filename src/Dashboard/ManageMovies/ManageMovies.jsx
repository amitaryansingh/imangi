import React, { useState, useEffect } from "react";
import MovieService from "./MovieService";
import styles from "../ManageUsers/ManageUsers.module.css";
import UpdateMovie from "./UpdateMovie";
import AddMovie from "./AddMovie";

function ManageMovies({ onClose }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showAddMovie, setShowAddMovie] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await MovieService.getAllMovies(token);
      setMovies(response || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const deleteMovie = async (movieId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this movie?"
      );
      const token = localStorage.getItem("token");
      if (confirmDelete) {
        await MovieService.deleteMovie(movieId, token);
        fetchMovies(); // Refresh the list after deletion
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  const handleUpdateClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleAddClick = () => {
    setShowAddMovie(true);
  };

  const handleUpdateClose = () => {
    setSelectedMovie(null);
    fetchMovies();
  };

  const handleAddClose = () => {
    setShowAddMovie(false);
    fetchMovies();
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2 className={styles.heading}>Manage Movies</h2>
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
                Add New Movie
              </button>
            </td>
          </tr>
        </thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Language</th>
          <th scope="col">Duration</th>
          <th scope="col">Delete</th>
          <th scope="col">Update</th>
        </tr>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td scope="row">{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.language}</td>
              <td>{movie.duration}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteMovie(movie.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleUpdateClick(movie)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedMovie && (
        <UpdateMovie movieId={selectedMovie.id} onClose={handleUpdateClose} />
      )}
      {showAddMovie && <AddMovie onClose={handleAddClose} />}
    </div>
  );
}

export default ManageMovies;
