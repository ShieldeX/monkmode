import { Link } from "react-router-dom";

import AvatarIcon from "../../assets/avatar.svg";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/">Discover</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <img className={classes.avatar} src={AvatarIcon} alt="Avatar" />
          <Link to="/auth">Log in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
