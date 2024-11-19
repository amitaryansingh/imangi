import axios from "axios";
class ShowtimeService {
  static BASE_URL =
    "https://imangi-a3c5cxh5fzhbbkez.centralindia-01.azurewebsites.net";

  static async addShowtime(ShowTimeData, token) {
    try {
      const response = await axios.post(
        `${ShowtimeService.BASE_URL}/admin/showtimes`,
        ShowTimeData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async getAllShowtimes(token) {
    try {
      const response = await axios.get(
        `${ShowtimeService.BASE_URL}/admin/showtimes`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async getShowtimeById(showtimeId, token) {
    try {
      const response = await axios.get(
        `${ShowtimeService.BASE_URL}/admin/showtimes/${showtimeId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      console.error("Error fetching theater by ID:", err);
      throw err;
    }
  }

  static async deleteShowtime(showtimeId, token) {
    try {
      const response = await axios.delete(
        `${ShowtimeService.BASE_URL}/admin/showtimes/${showtimeId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async updateShowtime(showtimeId, showtime, token) {
    try {
      const response = await axios.put(
        `${ShowtimeService.BASE_URL}/admin/showtimes/${showtimeId}`,
        showtime,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      console.error(
        "Error in updateTheater:",
        err.response ? err.response.data : err.message
      );
      throw err;
    }
  }
}
export default ShowtimeService;
