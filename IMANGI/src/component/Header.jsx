import style from "./Header.module.css";
import { FaHome, FaSearch } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <img className={style.navbarBrand} src="logo2.png" alt="Imangi" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <FaHome className={style.icon} />
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <LuCalendarClock className={style.icon} />
                  ShowTiming
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <BiSolidOffer className={style.icon} />
                  Offers
                </a>
              </li>
            </ul>
            <li className="navbar-nav">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Location
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <form className="d-flex ms-3" role="search">
              <div className={style.searchContainer}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <FaSearch className={style.searchIcon} />
              </div>
            </form>
            <button className="btn btn-outline-secondary ms-3" type="button">
              <CgProfile className={style.icon} />
              Profile
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
