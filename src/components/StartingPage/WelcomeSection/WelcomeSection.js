import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import { ReactComponent as ArrowIcon } from "../../../assets/arrow.svg";
import classes from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <section className={classes.welcome}>
      <h1>
        <span>Welcome</span> to Beats Per Mint
      </h1>
      <div className={classes["cards"]}>
        <Card className={classes["left-card"]}>
          <h2>Where NFTs are valued by the culture they create.</h2>
          <Button className={classes.button}>How it works</Button>
        </Card>
        <div className={classes["right-cards"]}>
          <Card className={classes["top-right-card"]}>
            <p>Upgrade how you listen</p>
            <h2>MUSIC ON THE BLOCKCHAIN</h2>
            <Button className={classes.button}>
              <span>Learn more</span>
              <ArrowIcon className={classes["arrow-icon"]} />
            </Button>
          </Card>
          <Card className={classes["bottom-right-card"]}>
            <p>Check this out</p>
            <h2>FEATURED PROJECT NAME</h2>
            <Button className={classes.button}>
              <span>Learn more</span>
              <ArrowIcon className={classes["arrow-icon"]} />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
