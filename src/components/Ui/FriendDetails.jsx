
import { useLoaderData, useParams } from "react-router";
import FriendCard from "./FriendCard";
import { useContext } from "react";
import { InteractionContext } from "../../context/ContextApi";


const FriendDetails = () => {
  const interaction = useContext(InteractionContext)
console.log(interaction)
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