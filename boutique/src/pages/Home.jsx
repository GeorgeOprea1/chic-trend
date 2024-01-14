import Hero from "../Hero";
import FeaturedItems from "../FeatureItems";

const Home = ({ items }) => {
  return (
    <>
      <Hero />
      <FeaturedItems items={items} />
    </>
  );
};

export default Home;
