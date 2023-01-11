import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import { ReactComponent as ArrowIcon } from "../../../assets/describeArrow.svg";
import { ReactComponent as PlayIcon } from "../../../assets/play.svg";
import classes from "./DiscoverCard.module.css";

const DiscoverCard = ({
  cover,
  video,
  projectName,
  projectOwner,
  info,
  totalAmount,
  monthlyAmount,
  projectPage,
}) => {
  const information = info.map((option) => {
    return <li key={Math.random().toString()}>{option}</li>;
  });

  return (
    <Card className={classes.card}>
      <div className={classes.wrapper}>
        <div className={classes.video}>
          <img src={video.cover} alt={projectName} />
          <a href={video.source} className={classes["play-icon"]}>
            <PlayIcon />
          </a>
        </div>
        <h3 className={classes.title}>{projectName}</h3>
        <p className={classes.author}>{projectOwner}</p>
        <ul>{information}</ul>
        <p
          className={classes.amounts}
        >{`$${totalAmount} or $${monthlyAmount}/month`}</p>
        <Button className={classes.button}>Subscribe</Button>
        <a href={projectPage}>
          <span>Go to project page </span>
          <ArrowIcon className={classes["arrow-icon"]} />
        </a>
      </div>
    </Card>
  );
};

export default DiscoverCard;
