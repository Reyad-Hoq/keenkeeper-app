
import FriendsCard from "../components/Ui/FriendsCard";
import InformationCard from "./InformationCard";


const Allfriends = ({ allfriendsPromise }) => {
  return (
    <div className="space-y-10">
      <InformationCard allfriendsPromise={allfriendsPromise} />
      <FriendsCard allfriendsPromise={allfriendsPromise} />
    </div>
  );
};

export default Allfriends;