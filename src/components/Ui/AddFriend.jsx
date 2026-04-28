
import { Link } from "react-router";
import { FaUserPlus } from "react-icons/fa";

const AddFriendPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center border border-gray-200">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#244d3f]/10 p-4 rounded-full">
            <FaUserPlus className="text-3xl text-[#244d3f]" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-black">
          Add Friend Page
        </h1>

        {/* Message */}
        <p className="text-gray-500 mt-3">
          This page is not built yet 🚧 <br />
          We're working on adding new friends feature.
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200"></div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="bg-[#244d3f] text-white py-2 rounded-lg hover:bg-[#1b3a30] transition"
          >
            Go to Home
          </Link>

          <button
            disabled
            className="bg-gray-200 text-gray-500 py-2 rounded-lg cursor-not-allowed"
          >
            Add Friend (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFriendPage;
