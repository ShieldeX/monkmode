import classes from "./AboutCard.module.css";

const AboutCard = ({ image, title, description }) => {
  return (
    <div className={classes.card}>
      <img className={classes.image} src={image} alt={title} />
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default AboutCard;
