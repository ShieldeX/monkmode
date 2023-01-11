import classes from "./Subscription.module.css";

const Subscription = ({ avatar, name }) => {
  return (
    <div className={classes.subscription}>
      <img className={classes.avatar} src={avatar} alt={name} />
      <span className={classes.name}>{name}</span>
    </div>
  );
};

export default Subscription;
