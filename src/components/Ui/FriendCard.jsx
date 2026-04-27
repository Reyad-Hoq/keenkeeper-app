import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { IoArchiveOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import { InteractionContext } from "../../context/InteractionContext";

const formatDate = (dateStr) => {
  return new Date(dateStr)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/(\d{4})$/, ", $1");
};

const FriendCard = ({ targetedFriend }) => {
  const { handleTimeline } = useContext(InteractionContext);
  console.log(handleTimeline)
  const {
    bio,
    days_since_contact,
    email,
    goal,
    id,
    name,
    next_due_date,
    picture,
    status,
    tags } = targetedFriend;
  return (
    <div key={id} className="min-h-screen p-6 flex justify-center items-center w-9/12 mx-auto">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT PROFILE CARD + ACTIONS */}
        <div className="space-y-4">

          {/* PROFILE CARD */}
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <img
              src={picture}
              alt="profile"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{name}</h2>

            <span className={`inline-block mt-2 px-3 py-1 text-sm rounded-full text-white ${status === "on-track" ? "bg-[#244D3F]" : status === "overdue" ? "bg-red-500" : "bg-orange-400"}`}>
              {status}
            </span>

            <div className="mt-2 flex gap-3 items-center justify-center">
              {tags.map((tag, ind) => <span key={ind} className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                {tag}
              </span>)}
            </div>

            <p className="text-gray-500 italic mt-4">
              {bio}
            </p>

            <p className="text-sm text-gray-400 mt-2">
              Email: {email}
            </p>
          </div>

          {/* ACTION BUTTONS (moved here) */}
          <div className="space-y-2">
            <button className="w-full btn bg-white rounded-lg hover:bg-gray-100">
              <RiNotificationSnoozeLine />
              Snooze 2 Weeks
            </button>

            <button className="w-full btn bg-white rounded-lg hover:bg-gray-100">
              <IoArchiveOutline />
              Archive
            </button>

            <button className="w-full btn bg-white rounded-lg text-red-500 hover:bg-red-50">
              <AiOutlineDelete />
              Delete
            </button>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {/* TOP STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow p-4 text-center">
              <h3 className="text-2xl font-bold text-[#244D3F]">{days_since_contact}</h3>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl shadow p-4 text-center">
              <h3 className="text-2xl font-bold text-[#244D3F]">{goal}</h3>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl shadow p-4 text-center">
              <h3 className="text-lg font-semibold text-[#244D3F]">{formatDate(next_due_date)}</h3>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg text-[#244D3F]">Relationship Goal</h3>
              <p className="text-gray-500">
                Connect every <span className="font-bold text-black">30 days</span>
              </p>
            </div>
            <button className="btn rounded-lg text-sm hover:bg-gray-100">
              Edit
            </button>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => handleTimeline(targetedFriend, "call")}
                className="border border-gray-300 rounded-lg p-4 flex flex-col items-center hover:bg-gray-100 transition">
                <BiPhoneCall className="w-5 h-5" />
                <span>Call</span>
              </button>

              <button
                onClick={() => handleTimeline(targetedFriend, "text")}
                className="border  border-gray-300 rounded-lg p-4 flex flex-col items-center hover:bg-gray-100 transition">
                <MdOutlineTextsms className="w-5 h-5" />
                <span>Text</span>
              </button>

              <button
                onClick={() => handleTimeline(targetedFriend, "video")}
                className="border border-gray-300 rounded-lg p-4 flex flex-col items-center hover:bg-gray-100 transition">
                <CiVideoOn className="w-5 h-5" />
                <span>Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default FriendCard;