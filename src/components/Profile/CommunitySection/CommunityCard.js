import Card from "../../UI/Card/Card";
import { ReactComponent as ViewIcon } from "../../../assets/view.svg";
import { ReactComponent as ProsIcon } from "../../../assets/pros.svg";
import { ReactComponent as ConsIcon } from "../../../assets/cons.svg";
import classes from "./CommunityCard.module.css";

const CommunityCard = ({ image, source, name, creator, pros, cons }) => {
  return (
    <Card className={classes.card}>
      <div className={classes.post}>
        <img src={image} alt={name} />
        <a href={source} className={classes["view-icon"]}>
          <ViewIcon />
        </a>
      </div>
      <div className={classes.content}>
        <div>
          <p className={classes.name}>{name}</p>
          <p className={classes.creator}>{creator}</p>
        </div>
        <div className={classes.vote}>
          <div className={classes.pros}>
            <ProsIcon className={classes["pros-icon"]} />
            <p className={classes.amount}>{pros}</p>
          </div>
          <div className={classes.cons}>
            <ConsIcon className={classes["cons-icon"]} />
            <p className={classes.amount}>{cons}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CommunityCard;
