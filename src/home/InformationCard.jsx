import { use } from "react";

const InformationCard = ({ allfriendsPromise }) => {
  const friends = use(allfriendsPromise)
  console.log(friends.length)
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 border-b-2 border-gray-200 py-10">
      <div className="card bg-base-100 text-neutral-content shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[#244D3F] text-2xl">{friends.length}</h2>
          <p className="text-gray-500">Total Friends</p>
        </div>
      </div>
      <div className="card bg-base-100 text-neutral-content shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[#244D3F] text-2xl">
            {
              friends.filter(friend => friend.status === "on-track").length
            }
          </h2>
          <p className="text-gray-500">On-track</p>
        </div>
      </div>
      <div className="card bg-base-100 text-neutral-content shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[#244D3F]  text-2xl">
            {
              friends.filter(friend => friend.status === "overdue").length
            }
          </h2>
          <p className="text-gray-500">Need Attention</p>
        </div>
      </div>
      <div className="card bg-base-100 text-neutral-content shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[#244D3F] text-2xl">{friends.length}</h2>
          <p className="text-gray-500"> Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;