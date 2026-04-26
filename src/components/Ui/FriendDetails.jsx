import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { IoArchiveOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router";

const FriendDetails = () => {
  const { friendId } = useParams();
  console.log(id)
  const friends = useLoaderData()
  console.log(friends)
  {
    friends.find(friend => friend.id === friendId )
  }
  return (
    <div className="min-h-screen p-6 flex justify-center items-center w-9/12 mx-auto">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT PROFILE CARD + ACTIONS */}
        <div className="space-y-4">

          {/* PROFILE CARD */}
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">Emma Wilson</h2>

            <span className="inline-block mt-2 px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full">
              Overdue
            </span>

            <div className="mt-2">
              <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                FAMILY
              </span>
            </div>

            <p className="text-gray-500 italic mt-4">
              "Former colleague, great mentor"
            </p>

            <p className="text-sm text-gray-400 mt-2">
              Preferred: email
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
              <h3 className="text-2xl font-bold">62</h3>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl shadow p-4 text-center">
              <h3 className="text-2xl font-bold">30</h3>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl shadow p-4 text-center">
              <h3 className="text-lg font-semibold">Feb 27, 2026</h3>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Relationship Goal</h3>
              <p className="text-gray-500">
                Connect every <span className="font-semibold">30 days</span>
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
              <button className="border border-gray-300 rounded-lg p-4 flex flex-col items-center hover:bg-gray-100 transition">
                <BiPhoneCall />
                <span>Call</span>
              </button>

              <button className="border  border-gray-300 rounded-lg p-4 flex flex-col items-center hover:bg-gray-100 transition">
                <MdOutlineTextsms />
                <span>Text</span>
              </button>

              <button className="border border-gray-300 rounded-lg p-4 flex flex-col items-center hover:bg-gray-100 transition">
                <CiVideoOn />
                <span>Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;