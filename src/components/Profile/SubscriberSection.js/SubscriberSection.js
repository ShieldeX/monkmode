import ThemeImage from "../../../assets/theme.png";
import { ReactComponent as AvatarIcon } from "../../../assets/bigAvatar.svg";
import classes from "./SubscriberSection.module.css";

const SubscriberSection = () => {
  return (
    <div className={classes.subscriber}>
      <div className={classes.theme}>
        <img src={ThemeImage} alt="A user theme" />
        <AvatarIcon className={classes["avatar-icon"]} />
      </div>
      <h3 className={classes.title}>Subscriber Name</h3>
      <p className={classes.description}>
        Short bio or description written by the subscriber.
      </p>
      <div className={classes.statistics}>
        <div>
          <p className={classes.amount}>100</p>
          <p className={classes.subject}>Subscriptions</p>
        </div>
        <div>
          <p className={classes.amount}>5</p>
          <p className={classes.subject}>Content created</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriberSection;
