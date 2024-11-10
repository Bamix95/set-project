import style from "./header.module.css";
import PropTypes from "prop-types";
const Header = ({ user }) => {
  return (
    <div className={style.mainheader}>
      <header>
        <p className={style.wlcmmsg}>
          Hello <span>{user.firstName}</span>, welcome back!
        </p>
      </header>
    </div>
  );
};
Header.propTypes;
export default Header;
