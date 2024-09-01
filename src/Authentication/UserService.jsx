import axios from "axios";
class UserService {
  static BASE_URL =
    "https://imangi-a3c5cxh5fzhbbkez.centralindia-01.azurewebsites.net/";

  static async login(email, password) {
    try {
      const response = await axios.post(`${UserService.BASE_URL}/auth/login`, {
        email,
        password,
      });
      // Assuming response contains token and role
      const { token, role, name } = response.data;
      // Save token and role to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("name", name);
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async register(userData) {
    try {
      const response = await axios.post(
        `${UserService.BASE_URL}/auth/register`,
        userData
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
  static async verify(email, otp) {
    console.log(otp); // This is fine for debugging
    try {
      const response = await axios.post(
        `${UserService.BASE_URL}/auth/verify`, // Correct URL path
        null, // No body data, so pass `null` here
        {
          params: {
            email, // These are query parameters
            otp,
          },
        }
      );
      return response.data;
    } catch (err) {
      console.error(
        "Verification failed:",
        err.response ? err.response.data : err.message
      );
      throw err;
    }
  }

  static async getAllUsers(token) {
    try {
      const response = await axios.get(
        `${UserService.BASE_URL}/admin/getAllUsers`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async getYourProfile(token) {
    try {
      const response = await axios.get(
        `${UserService.BASE_URL}/adminuser/getProfile`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async getUserById(userId, token) {
    try {
      const response = await axios.get(
        `${UserService.BASE_URL}/admin/getUsers/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async deleteUser(userId, token) {
    try {
      const response = await axios.delete(
        `${UserService.BASE_URL}/admin/delete/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async updateUser(userId, userData, token) {
    try {
      const response = await axios.put(
        `${UserService.BASE_URL}/admin/update/${userId}`,
        userData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  /**AUTHENTICATION CHECKER */
  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
  }

  static isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  static isAdmin() {
    const role = localStorage.getItem("role");
    return role === "ADMIN";
  }
  static isName() {
    return localStorage.getItem("name");
  }

  static isUser() {
    const role = localStorage.getItem("role");
    return role === "USER";
  }
  static adminOnly() {
    return this.isAuthenticated() && this.isAdmin();
  }
}
export default UserService;
