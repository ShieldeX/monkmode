import WelcomeSection from "./WelcomeSection/WelcomeSection";
import AboutSection from "./AboutSection/AboutSection";
import DiscoverSection from "./DiscoverSection/DiscoverSection";
import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  return (
    <div className={classes.home}>
      <WelcomeSection />
      <AboutSection />
      <DiscoverSection />
    </div>
  );
};

export default StartingPageContent;
