import React, { useState } from "react";
import style1 from "./Header.module.css";
import style2 from "./Mobheader.module.css";
import { FaHome, FaSearch } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Profile from "./Profile";
import { Link } from "react-router-dom";
const Mobheader = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <div className={style2.navigation}>
        <div className={style2.navitems}>
          <li className={style2.li}>
            <Link to="/">
              <FaHome className={style1.icon} />
              Home
            </Link>
          </li>
          <li className={style2.li}>
            <Link to="/">
              <LuCalendarClock className={style1.icon} />
              ShowTiming
            </Link>
          </li>
          <li className={style2.li}>
            <Link onClick={togglePopup}>
              <CgProfile className={style1.icon} />
              Profile
              {showPopup && <Profile closePopup={togglePopup} />}
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};
export default Mobheader;
