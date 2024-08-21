import style from "./Header.module.css";
import { FaHome, FaSearch } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <img className={style.logo} src="/Assest/images/logo2.png" alt="logo" />
        <div className={style.navbar}>
          <div className={style.navigation}>
            <div className={style.navItem}>
              <FaHome className={style.icon} />
              Home
            </div>
            <div className={style.navItem}>
              <LuCalendarClock className={style.icon} />
              ShowTiming
            </div>
            <div className={style.navItem}>
              <BiSolidOffer className={style.icon} />
              Offers
            </div>
          </div>
          <div className={style.navigation2}>
            <div className={style.navItem2}>
              <input
                type="text"
                placeholder="Search"
                className={style.searchInput}
              />
              <button className={style.searchButton}>
                <FaSearch size={20} />
              </button>
            </div>
            <div className={style.navItem}>Location</div>
            <div className={style.profile}>
              <button className={style.navItem}>
                <CgProfile className={style.icon} />
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
