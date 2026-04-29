import { use, useState } from "react";
import { Link } from "react-router";

const FriendsCard = ({ allfriendsPromise }) => {
  const friends = use(allfriendsPromise);
  const [search, setSearch] = useState("");

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-between items-center gap-5">
        <h2 className="card-title text-2xl">Your Friends</h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search friend by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered max-w-3xs my-4"
        />
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
        {
          filteredFriends.map(friend => (
            <Link to={`friendDetails/${friend.id}`} key={friend.id}>
              <div className="card bg-base-100 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                <figure className="px-10 pt-10">
                  <img
                    src={friend.picture}
                    alt={friend.name}
                    className="rounded-full"
                  />
                </figure>

                <div className="card-body items-center text-center">
                  <h2 className="card-title">{friend.name}</h2>
                  <p className="text-gray-500">{friend.days_since_contact}d ago</p>

                  <div className="flex gap-2">
                    {
                      friend.tags.map((tag, index) => (
                        <div
                          key={index}
                          className="bg-[#CBFADB] text-[14px] px-2 py-0.5 rounded-xl flex items-center justify-center text-[#244D3F]"
                        >
                          {tag.toUpperCase()}
                        </div>
                      ))
                    }
                  </div>

                  <div className="text-white text-center">
                    <p className={`px-4 py-1 rounded-full ${friend.status === "on-track"
                      ? "bg-[#244D3F]"
                      : friend.status === "overdue"
                        ? "bg-red-500"
                        : "bg-orange-400"
                      }`}>
                      {friend.status}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </>
  );
};

export default FriendsCard;