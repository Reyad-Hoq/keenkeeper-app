
import Hero from "./Hero";
import Allfriends from "./Allfriends";
import { BarLoader, GridLoader } from "react-spinners";
import { Suspense } from "react";

const allfriendsPromise = fetch("/data/data.json").then(res => res.json())
const HomePage = () => {
  return (
    <div className="w-9/12 mx-auto space-y-10 pt-1 pb-15">
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen">
        <GridLoader size={18} color="#244d3f" />

      </div>
      }>
        <Hero />
        <Allfriends allfriendsPromise={allfriendsPromise} />
      </Suspense>
    </div>
  );
};

export default HomePage;