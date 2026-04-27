
import { useLoaderData, useParams } from "react-router";
import FriendCard from "./FriendCard";

const FriendDetails = () => {
  const { friendId } = useParams();
  const friends = useLoaderData()

  const targetedFriend = friends.find(friend => friend.id === Number(friendId))
  return (
    <div>
      <FriendCard targetedFriend={targetedFriend} />
    </div>
  );
};

export default FriendDetails;