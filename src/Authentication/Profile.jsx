import React, { useState } from "react";
import style from "./Profile.module.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import UserService from "./UserService";
import { useNavigate } from "react-router-dom";

const Profile = ({ closePopup }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    usrname: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    dob: "",
    role: "USER",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      mobile: value,
    }));
  };
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      UserService.logout();
      closePopup();
      navigate("/");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Admin login logic
      if (isAdmin) {
        const loginResponse = await UserService.login(
          formData.email,
          formData.password
        );
        if (loginResponse.role === "ADMIN") {
          alert(loginResponse.message);
          closePopup();
          navigate("/admin");
        } else {
          alert("Unauthorized: Admin access only.");
        }
      } else {
        // User Registration or Login
        if (isLogin) {
          const loginResponse = await UserService.login(
            formData.email,
            formData.password
          );
          alert(loginResponse.message);
          closePopup();
        } else {
          await UserService.register(formData);
          setFormData({
            usrname: "",
            name: "",
            email: "",
            password: "",
            mobile: "",
            dob: "",
          });
          alert("User registered successfully");
          closePopup();
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={style.popupOverlay}>
      <div className={style.popupContent}>
        <button
          className={style.closeBtn}
          onClick={closePopup}
          onTouchStart={closePopup}
        >
          &times;
        </button>
        {!UserService.isAuthenticated() ? (
          <>
            <h2>
              {isAdmin ? "Admin Login" : isLogin ? "User Login" : "Signup"}
            </h2>
            <form onSubmit={handleSubmit}>
              {!isLogin && !isAdmin && (
                <>
                  <div className={style.formDiv}>
                    <label className={style.labelStyle} htmlFor="usrname">
                      Username:
                    </label>
                    <input
                      className={style.inputStyle}
                      type="text"
                      id="usrname"
                      name="usrname"
                      value={formData.usrname}
                      onChange={handleInputChange}
                      required
                      pattern="[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;,.?]{3,20}"
                      title="Username must be 3-20 characters long and can only contain alphanumeric characters or !@#$%^&*()_+{}[]:;,.?"
                    />
                  </div>
                  <div className={style.formDiv}>
                    <label className={style.labelStyle} htmlFor="name">
                      Name:
                    </label>
                    <input
                      className={style.inputStyle}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={style.formDiv}>
                    <label className={style.labelStyle} htmlFor="mobile">
                      Mobile Number:
                    </label>
                    <PhoneInput
                      className={style.inputStyle}
                      country="US"
                      value={formData.mobile}
                      onChange={handlePhoneChange}
                      international
                      defaultCountry="US"
                      required
                    />
                  </div>
                  <div className={style.formDiv}>
                    <label className={style.labelStyle} htmlFor="dob">
                      Date of Birth:
                    </label>
                    <input
                      className={style.inputStyle}
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </>
              )}
              <div className={style.formDiv}>
                <label className={style.labelStyle} htmlFor="email">
                  Email:
                </label>
                <input
                  className={style.inputStyle}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={style.formDiv}>
                <label className={style.labelStyle} htmlFor="password">
                  Password:
                </label>
                <input
                  className={style.inputStyle}
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button className={style.submitButton} type="submit">
                {isAdmin ? "Login" : isLogin ? "Login" : "Signup"}
              </button>
            </form>
            <p
              className={style.toggleText}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isAdmin
                ? ""
                : isLogin
                ? "Don't have an account? Signup"
                : "Already have an account? Login"}
            </p>
            <button
              className={style.adminButton}
              onClick={() => setIsAdmin(!isAdmin)}
            >
              {isAdmin ? "Switch to User" : "Admin Login"}
            </button>
          </>
        ) : (
          <>
            <h2>Hey {UserService.isName()}!</h2>
            <div className={style.optionsMenu}>
              <ul>
                <li onClick={() => handleOptionClick("editProfile")}>
                  Edit Profile
                </li>
                <li onClick={() => handleOptionClick("yourBooking")}>
                  Your Booking
                </li>
                <li onClick={() => handleOptionClick("helpSupport")}>
                  Help and Support
                </li>
                <li onClick={() => handleOptionClick("contactUs")}>
                  Contact Us
                </li>
                <li onClick={() => handleOptionClick("accountSettings")}>
                  Account and Settings
                </li>
                <li onClick={() => handleLogout()}>Logout</li>
              </ul>
            </div>
            {selectedOption === "editProfile" && (
              <div className={style.optionContent}>
                <h3>Edit Profile</h3>
                <form>
                  <div className={style.formDiv}>
                    <label className={style.labelStyle} htmlFor="editName">
                      Edit Name:
                    </label>
                    <input
                      className={style.inputStyle}
                      type="text"
                      id="editName"
                      name="editName"
                    />
                  </div>
                  <div className={style.formDiv}>
                    <label className={style.labelStyle} htmlFor="dob">
                      Date of Birth:
                    </label>
                    <input
                      className={style.inputStyle}
                      type="date"
                      id="dob"
                      name="dob"
                    />
                  </div>
                  <div className={style.formDiv}>
                    <label className={style.labelStyle} htmlFor="mobile">
                      Mobile Number:
                    </label>
                    <PhoneInput
                      className={style.inputStyle}
                      country="US"
                      international
                      defaultCountry="US"
                    />
                  </div>
                  <button className={style.submitButton} type="submit">
                    Save Changes
                  </button>
                </form>
              </div>
            )}
            {selectedOption === "yourBooking" && (
              <div className={style.optionContent}>
                <h3>Your Booking</h3>
                <p>Details of your booking...</p>
              </div>
            )}
            {selectedOption === "helpSupport" && (
              <div className={style.optionContent}>
                <h3>Help and Support</h3>
                <p>Information about help and support...</p>
              </div>
            )}
            {selectedOption === "contactUs" && (
              <div className={style.optionContent}>
                <h3>Contact Us</h3>
                <p>Details to contact us...</p>
              </div>
            )}
            {selectedOption === "accountSettings" && (
              <div className={style.optionContent}>
                <h3>Account and Settings</h3>
                <form>
                  <div className={style.formDiv}>
                    <label className={style.labelStyle} htmlFor="email">
                      Email:
                    </label>
                    <input
                      className={style.inputStyle}
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className={style.formDiv}>
                    <label className={style.labelStyle} htmlFor="password">
                      New Password:
                    </label>
                    <input
                      className={style.inputStyle}
                      type="password"
                      id="password"
                      name="password"
                    />
                  </div>
                  <button className={style.submitButton} type="submit">
                    Save Settings
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
