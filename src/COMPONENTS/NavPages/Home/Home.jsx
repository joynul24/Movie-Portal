import Banner from "../../Banner/Banner";
import FeaturedMovie from "../../HomeRoute/FeaturedMovie";
import Pricing from "../../HomeRoute/Pricing";
import Service from "../../HomeRoute/Service";

function Home() {
  return (
    <>
      <Banner></Banner>
      <FeaturedMovie></FeaturedMovie>
      <Service></Service>
      <Pricing></Pricing>
    </>
  );
}

export default Home;
