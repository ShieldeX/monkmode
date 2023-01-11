import AboutCard from "./AboutCard";
import AboutImage1 from "../../../assets/about-1.svg";
import AboutImage2 from "../../../assets/about-2.svg";
import AboutImage3 from "../../../assets/about-3.svg";
import Button from "../../UI/Button/Button";
import classes from "./AboutSection.module.css";

const ABOUT_DATA = [
  {
    id: "about-1",
    image: AboutImage1,
    title: "Connect with creators",
    description:
      "Beats Per Mint (BPM) is a subscription-based platform that allows fans to connect with artists and communities through blockchain technology.",
  },
  {
    id: "about-2",
    image: AboutImage2,
    title: "Contribute your content",
    description:
      "Featured artists and projects create content that community members can add to. All content is then accessed through a subscription.",
  },
  {
    id: "about-3",
    image: AboutImage3,
    title: "Archive indefinitely",
    description:
      "As content is created, it’s added to a project community archive and forms the community’s NFT.",
  },
];

const AboutSection = () => {
  const aboutCards = ABOUT_DATA.map((card) => (
    <AboutCard
      key={card.id}
      image={card.image}
      title={card.title}
      description={card.description}
    />
  ));

  return (
    <section className={classes.about}>
      <h2>About Beats Per Mint (BPM)</h2>
      <ul className={classes.cards}>{aboutCards}</ul>
      <Button className={classes.button}>Learn more about us</Button>
    </section>
  );
};

export default AboutSection;
