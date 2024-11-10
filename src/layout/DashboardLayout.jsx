import SideBar from "../Components/SideBar/SideBar";
import style from "../App.module.css";
import PropTypes from "prop-types";

export default function DashboardLayout({ children }) {
  return (
    <div className={style.app_wrapper}>
      <SideBar />
      {children}
    </div>
  );
}
DashboardLayout.propTypes = {
  children: PropTypes.array,
};
