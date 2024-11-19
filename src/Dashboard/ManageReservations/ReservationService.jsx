import axios from "axios";

class ReservationService {
  static BASE_URL =
    "https://imangi-a3c5cxh5fzhbbkez.centralindia-01.azurewebsites.net";

  static async addReservation(reservationData, token) {
    try {
      const response = await axios.post(
        `${ReservationService.BASE_URL}/adminuser/resrevations`,
        reservationData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async updateReservation(id, reservationData, token) {
    try {
      const response = await axios.put(
        `${ReservationService.BASE_URL}/admin/resrevations/${id}`,
        reservationData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async deleteReservation(id, token) {
    try {
      await axios.delete(
        `${ReservationService.BASE_URL}/adminuser/resrevations/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (err) {
      throw err;
    }
  }

  static async getReservationById(id, token) {
    try {
      const response = await axios.get(
        `${ReservationService.BASE_URL}/admin/resrevations/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async getReservationsByCustomerPhone(phone, token) {
    try {
      const response = await axios.get(
        `${ReservationService.BASE_URL}/adminuser/resrevations/${phone}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async getAllReservations(token) {
    try {
      const response = await axios.get(
        `${ReservationService.BASE_URL}/admin/resrevations`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
}

export default ReservationService;
