
import Hero from "./Hero";
import Allfriends from "./Allfriends";

const HomePage = () => {
  return (
    <div className="w-9/12 mx-auto space-y-10 pt-1 pb-15">
      <Hero />
      <Allfriends />
    </div>
  );
};

export default HomePage;