import axios from "axios";

class MovieService {
  static BASE_URL = "imangi-a3c5cxh5fzhbbkez.centralindia-01.azurewebsites.net";

  static async addMovie(movieData, token) {
    try {
      const response = await axios.post(
        `${MovieService.BASE_URL}/admin/movies`,
        movieData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async updateMovie(id, movieData, token) {
    try {
      const response = await axios.put(
        `${MovieService.BASE_URL}/admin/movies/${id}`,
        movieData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async deleteMovie(id, token) {
    try {
      await axios.delete(`${MovieService.BASE_URL}/admin/movies/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      throw err;
    }
  }

  static async getMovieById(id) {
    try {
      const response = await axios.get(
        `${MovieService.BASE_URL}/public/movies/${id}`
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async getMovieByTitle(title) {
    try {
      const response = await axios.get(
        `${MovieService.BASE_URL}/public/movies/search`,
        {
          params: { title },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async getAllMovies() {
    try {
      const response = await axios.get(
        `${MovieService.BASE_URL}/public/movies`
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
}

export default MovieService;
