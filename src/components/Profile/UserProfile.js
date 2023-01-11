import SubscriberSection from "./SubscriberSection.js/SubscriberSection";
import InterestsSection from "./InterestsSection/InterestsSection";
import CommunitySection from "./CommunitySection/CommunitySection";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <div className={classes.profile}>
      <SubscriberSection />
      <InterestsSection />
      <CommunitySection />
    </div>
  );
};

export default UserProfile;
