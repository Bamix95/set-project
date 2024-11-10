import IconCategory from "../../assets/icons/IconCategory";
import IconChat from "../../assets/icons/IconChat";
import IconFolder from "../../assets/icons/IconFolder";
import IconHome from "../../assets/icons/IconHome";
import style from "./sideBar.module.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import IconSetting from "../../assets/icons/IconSetting";
const SideBar = () => {
  const pageRoutes = [
    { Title: "Overview", Icon: <IconHome />, href: "/" },
    { Title: "Course", Icon: <IconCategory />, href: "/courses" },
    { Title: "Resources", Icon: <IconFolder />, href: "/resources" },
    { Title: "Message", Icon: <IconChat />, href: "/message" },
    { Title: "Setting", Icon: <IconSetting />, href: "/setting" },
  ];

  return (
    <div className={style.sideBarContainer}>
      <div className={style.bordereffect}></div>
      <div className={style.sideBarWrapper}>
        <header className={style.sideBarLogo}>
          <img src='/images/Logo.svg' alt='logo' />
        </header>
        <nav className={style.sideBarNavWrapper}>
          {pageRoutes.map((routes) => (
            <NavLink
              to={routes.href}
              key={routes.Title}
              className={({ isActive }) =>
                `${style.sideBarNav} ${isActive && style.activeLink}`
              }
            >
              <div>
                {routes.Icon}
                <span>{routes.Title}</span>
              </div>
            </NavLink>
          ))}
        </nav>
        <img
          src='/images/Group.png'
          alt='Lady'
          className={style.sideBarImage}
        />
        <div className={style.upGrade}>
          <p>Upgrade your plan</p>
          <div className={style.goPro}>
            <small>
              Go to <span>PRO</span>
            </small>
            <img
              src='images/chevrons-right 1.svg'
              alt='chevrons'
              className={style.goProChevron}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
SideBar.propTypes = {
  Links: PropTypes.array,
};
export default SideBar;
