import FriendsCard from "../components/Ui/FriendsCard";
import InformationCard from "./InformationCard";

const allfriendsPromise = fetch("/data/data.json").then(res => res.json())
const Allfriends = () => {
  return (
    <div className="space-y-10">
      <InformationCard allfriendsPromise={allfriendsPromise} />
      <FriendsCard allfriendsPromise={allfriendsPromise} />
    </div>
  );
};

export default Allfriends;