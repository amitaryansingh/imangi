import React, { useState } from "react";
import style from "./Profile.module.css";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Profile = ({ closePopup }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    dob: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && !isAdmin) {
      const { name } = formData;
      setFirstName(name.split(" ")[0]);
    }
    setIsAuthenticated(true);
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
          onTouchStart={closePopup} // Handle touch events for mobile
        >
          &times;
        </button>
        {!isAuthenticated ? (
          <>
            <h2>{isAdmin ? "Admin Login" : isLogin ? "User Login" : "Signup"}</h2>
            <form onSubmit={handleSubmit}>
              {!isLogin && !isAdmin && (
                <>
                  <div className={style.formDiv}>
                    <label className={style.labelStyle} htmlFor="username">
                      Username:
                    </label>
                    <input
                      className={style.inputStyle}
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
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
            <p className={style.toggleText} onClick={() => setIsLogin(!isLogin)}>
              {isAdmin
                ? ""
                : isLogin
                ? "Don't have an account? Signup"
                : "Already have an account? Login"}
            </p>
            <button className={style.adminButton} onClick={() => setIsAdmin(!isAdmin)}>
              {isAdmin ? "Switch to User" : "Admin Login"}
            </button>
          </>
        ) : (
          <>
            <h2>Hey {firstName}!</h2>
            <div className={style.optionsMenu}>
              <ul>
                <li onClick={() => handleOptionClick("editProfile")}>Edit Profile</li>
                <li onClick={() => handleOptionClick("yourBooking")}>Your Booking</li>
                <li onClick={() => handleOptionClick("helpSupport")}>Help and Support</li>
                <li onClick={() => handleOptionClick("contactUs")}>Contact Us</li>
                <li onClick={() => handleOptionClick("accountSettings")}>Account and Settings</li>
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
                      value={formData.mobile}
                      onChange={handlePhoneChange}
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
                <ul>
                  <li>
                    Booking #12345 - <button>Edit</button> <button>Cancel</button>
                  </li>
                  <li>
                    Booking #67890 - <button>Edit</button> <button>Cancel</button>
                  </li>
                </ul>
              </div>
            )}
            {selectedOption === "helpSupport" && (
              <div className={style.optionContent}>
                <h3>Help and Support</h3>
                <ul>
                  <li><strong>Q:</strong> How do I reset my password?</li>
                  <li><strong>A:</strong> Click on 'Forgot Password' on the login page and follow the instructions.</li>
                  <li><strong>Q:</strong> How can I contact customer support?</li>
                  <li><strong>A:</strong> You can reach us via the 'Contact Us' page.</li>
                </ul>
              </div>
            )}
            {selectedOption === "contactUs" && (
              <div className={style.optionContent}>
                <h3>Contact Us</h3>
                <p>Email: support@yourcompany.com</p>
                <p>Phone: +1234567890</p>
              </div>
            )}
            {selectedOption === "accountSettings" && (
              <div className={style.optionContent}>
                <h3>Account Settings</h3>
                <form>
                  <div className={style.formDiv}>
                    <label className={style.labelStyle} htmlFor="changePassword">
                      Change Password:
                    </label>
                    <input
                      className={style.inputStyle}
                      type="password"
                      id="changePassword"
                      name="changePassword"
                    />
                  </div>
                  <button className={style.submitButton} type="submit">
                    Update Settings
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
