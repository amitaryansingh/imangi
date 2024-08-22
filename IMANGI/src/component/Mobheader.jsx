import style1 from "./Header.module.css";
import style2 from "./Mobheader.module.css";
import { FaHome, FaSearch } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Mobheader = () => {
  return(<>
  <div className={style2.navigation}>
    <div className={style2.navitems}>
        <div><FaHome className={style1.icon} />
        Home
        </div>
        <div>
        <LuCalendarClock className={style1.icon} />
        ShowTiming
        </div>
        <div>
        <CgProfile className={style1.icon} />
              Profile
        </div>
    </div>
  </div>
  </>);
}
  export default Mobheader;