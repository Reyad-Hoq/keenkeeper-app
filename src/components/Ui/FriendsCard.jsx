import { use } from "react";
import { Link } from "react-router";

const FriendsCard = ({ allfriendsPromise }) => {
  const friends = use(allfriendsPromise);
  console.log(friends);
  return (
    <>
      <h2 className="card-title text-2xl">Your Friends</h2>
      <div className="grid grid-cols-4 gap-10">
        {
          friends.map(friend => (
            <Link to={`friendDetails/${friend.id}`} key={friend.id}>
              <div className="card bg-base-100 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                <figure className="px-10 pt-10">
                  <img
                    src={friend.picture}
                    alt={friend.name}
                    className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{friend.name}</h2>
                  <p className="text-gray-500">{friend.days_since_contact}d ago</p>
                  <div className="flex gap-2">
                    {
                      friend.tags.map((tag, index) => (
                        <div key={index} className="bg-[#CBFADB]
                     text-[14px] px-2 py-0.5 rounded-xl flex items-center justify-center text-[#244D3F">{tag.toUpperCase()}</div>
                      ))
                    }
                  </div>
                  <div className="text-white text-center">
                    <p className={`px-4 py-1 rounded-full  ${friend.status === "on-track" ? "bg-[#244D3F]" : friend.status === "overdue" ? "bg-red-500" : "bg-orange-400"}`}>{friend.status}</p>
                  </div>
                </div>
              </div>
            </Link>

          ))
        }
      </div >
    </>

  );
};

export default FriendsCard;