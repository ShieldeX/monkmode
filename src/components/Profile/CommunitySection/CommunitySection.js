import CommunityImage from "../../../assets/community.png";
import CommunityCard from "./CommunityCard";
import classes from "./CommunitySection.module.css";

const COMMUNITY_DATA = [
  {
    id: "community-1",
    image: CommunityImage,
    source: "#",
    name: "Content Name",
    creator: "Content Creator",
    pros: 12,
    cons: 0,
  },
  {
    id: "community-2",
    image: CommunityImage,
    source: "#",
    name: "Content Name",
    creator: "Content Creator",
    pros: 12,
    cons: 0,
  },
  {
    id: "community-3",
    image: CommunityImage,
    source: "#",
    name: "Content Name",
    creator: "Content Creator",
    pros: 12,
    cons: 0,
  },
  {
    id: "community-4",
    image: CommunityImage,
    source: "#",
    name: "Content Name",
    creator: "Content Creator",
    pros: 12,
    cons: 0,
  },
  {
    id: "community-5",
    image: CommunityImage,
    source: "#",
    name: "Content Name",
    creator: "Content Creator",
    pros: 12,
    cons: 0,
  },
  {
    id: "community-6",
    image: CommunityImage,
    source: "#",
    name: "Content Name",
    creator: "Content Creator",
    pros: 12,
    cons: 0,
  },
];

const CommunitySection = () => {
  const communityCard = COMMUNITY_DATA.map((card) => (
    <CommunityCard
      key={card.id}
      image={card.image}
      source={card.source}
      name={card.name}
      creator={card.creator}
      pros={card.pros}
      cons={card.cons}
    />
  ));

  return (
    <div className={classes.community}>
      <div className={classes["community-wrapper"]}>
        <div className={classes.title}>
          <h2>Community Creations</h2>
          <span className={classes.reminder}>20 Days left to vote</span>
        </div>
        <p className={classes.description}>
          Create content related to this project, then post on social media with
          the hastag #projectName for it show up here. Then, vote on your
          favorite content to see it represented in the final project NFT!
        </p>
      </div>
      <ul className={classes.cards}>{communityCard}</ul>
    </div>
  );
};

export default CommunitySection;
