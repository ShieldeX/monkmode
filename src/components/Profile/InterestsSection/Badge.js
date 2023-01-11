import classes from "./Badge.module.css";

const Badge = ({ tokenIcon, name }) => {
  return (
    <div className={classes.badge}>
      <img className={classes["token-icon"]} src={tokenIcon} alt={name} />
      <span className={classes.name}>{name}</span>
    </div>
  );
};

export default Badge;
