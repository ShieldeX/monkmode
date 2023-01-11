import Card from "../../UI/Card/Card";
import SubscriptionIcon from "../../../assets/subscription.svg";
import Subscription from "./Subscription";
import BadgeIcon1 from "../../../assets/badge-1.svg";
import BadgeIcon2 from "../../../assets/badge-2.svg";
import BadgeIcon3 from "../../../assets/badge-3.svg";
import Badge from "./Badge";
import classes from "./InterestsSection.module.css";

const subscriptionsData = [
  {
    id: "subscription-1",
    avatar: SubscriptionIcon,
    name: "Name",
  },
  {
    id: "subscription-2",
    avatar: SubscriptionIcon,
    name: "Name",
  },
];

const badgesData = [
  {
    id: "badge-1",
    tokenIcon: BadgeIcon1,
    name: "BPM Token",
  },
  {
    id: "badge-2",
    tokenIcon: BadgeIcon2,
    name: "BPM Token",
  },
  {
    id: "badge-3",
    tokenIcon: BadgeIcon3,
    name: "BPM Token",
  },
];

const SubscriptionsSection = () => {
  const subscriptions = subscriptionsData.map((subscription) => (
    <Subscription
      key={subscription.id}
      avatar={subscription.avatar}
      name={subscription.name}
    />
  ));

  const badges = badgesData.map((badge) => (
    <Badge key={badge.id} tokenIcon={badge.tokenIcon} name={badge.name} />
  ));

  return (
    <section className={classes.interests}>
      <div className={classes.background}></div>
      <Card className={classes.card}>
        <h2 className={classes["subscriptions-title"]}>Subscriptions</h2>
        <ul className={classes.subscriptions}>{subscriptions}</ul>
        <h2 className={classes["badges-title"]}>Badges and NFTs</h2>
        <ul className={classes.badges}>{badges}</ul>
      </Card>
    </section>
  );
};

export default SubscriptionsSection;
