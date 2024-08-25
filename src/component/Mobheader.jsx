import React, { useState } from "react";
import style1 from "./Header.module.css";
import style2 from "./Mobheader.module.css";
import { FaHome, FaSearch } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Profile from "./Profile";
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
            <a>
              <FaHome className={style1.icon} />
              Home
            </a>
          </li>
          <li className={style2.li}>
            <a>
              <LuCalendarClock className={style1.icon} />
              ShowTiming
            </a>
          </li>
          <li className={style2.li}>
            <a onClick={togglePopup}>
              <CgProfile className={style1.icon} />
              Profile
            </a>
            {showPopup && <Profile closePopup={togglePopup} />}
          </li>
        </div>
      </div>
    </>
  );
};
export default Mobheader;
