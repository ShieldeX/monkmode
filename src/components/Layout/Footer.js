import TwitterIcon from "../../assets/twitter.svg";
import DiscordIcon from "../../assets/discord.svg";
import TelegramIcon from "../../assets/telegram.svg";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes["footer-wrapper"]}>
      <footer className={classes.footer}>
        <div className={classes.info}>
          <ul className={classes["social-icons"]}>
            <li>
              <a href="https://twitter.com/">
                <img src={TwitterIcon} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://discord.com/">
                <img src={DiscordIcon} alt="Discord" />
              </a>
            </li>
            <li>
              <a href="https://telegram.org/">
                <img src={TelegramIcon} alt="Telegram" />
              </a>
            </li>
          </ul>
          <p className={classes.footnote}>
            Beats Per Mint
            <br />
            Site last updated November 2022
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
