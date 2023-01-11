import { Link } from "react-router-dom";

import LogoIcon from "../../assets/logo.svg";
import Navigation from "./Navigation";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>
          <img src={LogoIcon} alt="logo" />
        </div>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
