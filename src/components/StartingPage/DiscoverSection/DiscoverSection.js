import CoverImage1 from "../../../assets/cover-1.jpg";
import CoverImage2 from "../../../assets/cover-2.jpg";
import DiscoverCard from "./DiscoverCard";
import classes from "./DiscoverSection.module.css";

const DISCOVER_DATA = [
  {
    id: "discover-1",
    video: {
      cover: CoverImage1,
      source: "#",
    },
    projectName: "Project Name",
    projectOwner: "Project Owner",
    info: [
      "Subscription detail",
      "More of what’s included",
      "Another subscription detail",
      "More details here",
    ],
    totalAmount: "XX.XX",
    monthlyAmount: "X",
    projectPage: "#",
  },
  {
    id: "discover-2",
    video: {
      cover: CoverImage2,
      source: "#",
    },
    projectName: "Project Name",
    projectOwner: "Project Owner",
    info: [
      "Subscription detail",
      "More of what’s included",
      "Another subscription detail",
      "More details here",
    ],
    totalAmount: "XX.XX",
    monthlyAmount: "X",
    projectPage: "#",
  },
];

const DiscoverSection = () => {
  const discoverCards = DISCOVER_DATA.map((card) => (
    <DiscoverCard
      key={card.id}
      video={card.video}
      source={card.source}
      projectName={card.projectName}
      projectOwner={card.projectOwner}
      info={card.info}
      totalAmount={card.totalAmount}
      monthlyAmount={card.monthlyAmount}
      projectPage={card.projectPage}
    />
  ));

  return (
    <section className={classes.discover}>
      <h2>Discover BPMs</h2>
      <ul className={classes.cards}>{discoverCards}</ul>
    </section>
  );
};

export default DiscoverSection;
