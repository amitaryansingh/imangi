import React, { useState } from "react";
import style from "./Profile.module.css";

const Profile = ({ closePopup }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={style.popupOverlay}>
      <div className={style.popupContent}>
        <button className={style.closeBtn} onClick={closePopup}>
          ×
        </button>
        <h2>{isLogin ? "Login" : "Signup"}</h2>
        <form>
          {!isLogin && (
            <div className={style.formDiv}>
              <label className={style.labelStyle} htmlFor="name">
                Name:
              </label>
              <input
                className={style.inputStyle}
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
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
              required
            />
          </div>
          <button className={style.submitButton} type="submit">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <p className={style.toggleText} onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Signup"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Profile;
