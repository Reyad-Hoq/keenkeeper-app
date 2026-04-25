import { Link } from "react-router";
const Errorpage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#244D3F] text-white px-4">

        {/* 404 Text */}
        <h1 className="text-8xl font-bold mb-4">404</h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-200 mb-6 text-center max-w-md">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="bg-white text-[#244D3F] px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-200 transition"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
};

export default Errorpage;