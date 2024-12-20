import React, { useState } from "react";
import style from "./Profile.module.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import UserService from "./UserService";
import { useNavigate, Link } from "react-router-dom";

const Profile = ({ closePopup }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    usrname: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    dob: "",
    role: "USER",
  });
  const [consoleOutput, setConsoleOutput] = useState("");

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

  const handleSignup = async () => {
    try {
      setConsoleOutput("Attempting to register...");
      await UserService.register(formData);
      setOtpSent(true);
      setConsoleOutput("OTP has been sent to your email. Please verify.");
    } catch (error) {
      setConsoleOutput(`Error: ${error.message}`);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      setConsoleOutput("Verifying OTP...");
      const verifyResponse = await UserService.verify(formData.email, otp);
      if (verifyResponse) {
        await handleUserLogin();
        navigate("/");
      } else {
        setConsoleOutput("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setConsoleOutput(`Error: ${error.message}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isAdmin) {
      handleAdminLogin();
    } else if (isLogin) {
      handleUserLogin();
    } else if (otpSent) {
      handleVerifyOtp();
    } else {
      handleSignup();
    }
  };

  const handleAdminLogin = async () => {
    try {
      setConsoleOutput("Attempting admin login...");
      const loginResponse = await UserService.login(
        formData.email,
        formData.password
      );
      if (loginResponse.role.toUpperCase() === "ADMIN") {
        setConsoleOutput("Navigating to admin...");
      } else {
        setConsoleOutput("Unauthorized: Admin access only.");
      }
    } catch (error) {
      setConsoleOutput(`Error: ${error.message}`);
    }
    closePopup();
  };

  const handleUserLogin = async () => {
    try {
      setConsoleOutput("Attempting user login...");
      const loginResponse = await UserService.login(
        formData.email,
        formData.password
      );
      setConsoleOutput(loginResponse.message);
      closePopup();
    } catch (error) {
      setConsoleOutput(`Error: ${error.message}`);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      className={style.popupOverlay}
      onClick={closePopup} // Close popup on clicking overlay
    >
      <div
        className={style.popupContent}
        onClick={(e) => e.stopPropagation()} // Prevent event propagation to overlay
      >
        <button className={style.closeBtn} onClick={closePopup}>
          &times;
        </button>
        {!UserService.isAuthenticated() ? (
          <>
            <h2>
              {isAdmin ? "Admin Login" : isLogin ? "User Login" : "Signup"}
            </h2>
            <form onSubmit={handleSubmit}>
              {!isLogin && !isAdmin && !otpSent && (
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
                      title="Username"
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
              {otpSent && (
                <div className={style.formDiv}>
                  <label className={style.labelStyle} htmlFor="otp">
                    Enter OTP:
                  </label>
                  <input
                    className={style.inputStyle}
                    type="text"
                    id="otp"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
              )}
              <button className={style.submitButton} type="submit">
                {isAdmin
                  ? "Login"
                  : isLogin
                  ? "Login"
                  : otpSent
                  ? "Verify OTP"
                  : "Signup"}
              </button>
            </form>
            {!otpSent && (
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
            )}
            {!otpSent && (
              <button
                className={style.adminButton}
                onClick={() => setIsAdmin(!isAdmin)}
              >
                {isAdmin ? "Switch to User" : "Admin Login"}
              </button>
            )}
            {/* Displaying the console output */}
            <div className={style.consoleOutput}>
              <pre>{consoleOutput}</pre>
            </div>
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
                {UserService.adminOnly() && (
                  <li>
                    <Link to="/admin">Admin Page</Link>
                  </li>
                )}
                <li onClick={() => handleOptionClick("helpSupport")}>
                  Help and Support
                </li>
                <li onClick={() => handleOptionClick("contactUs")}>
                  Contact Us
                </li>
                <li onClick={() => handleOptionClick("accountSettings")}>
                  Account and Settings
                </li>
                <li onClick={() => handleOptionClick("aboutUs")}>About Us</li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
              <div className={style.optionDetails}>
                {selectedOption === "editProfile" && (
                  <div>Edit your profile details here.</div>
                )}
                {selectedOption === "yourBooking" && (
                  <div>View your booking details here.</div>
                )}
                {selectedOption === "helpSupport" && (
                  <div>Find help and support here.</div>
                )}
                {selectedOption === "contactUs" && (
                  <div>Contact us for any queries.</div>
                )}
                {selectedOption === "accountSettings" && (
                  <div>Manage your account settings here.</div>
                )}
                {selectedOption === "aboutUs" && (
                  <div>Learn more about us here.</div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
