import { useContext } from "react";
import { InteractionContext } from "../context/InteractionContext";
import { Link } from "react-router";
import { ImSad } from "react-icons/im";
import Video from "../assets/video.png"
import Call from "../assets/call.png"
import Text from "../assets/text.png"
const TimelinePage = () => {
  const { timelines } = useContext(InteractionContext);
  if (timelines.length === 0) {
    return <div>
      <div className="hero bg-base-200 min-h-[60vh]">
        <div className="hero-content text-center flex flex-col">
          <ImSad className="w-10 h-10 text-[#244D3F]" />
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-neutral/90">No Timeline Available
            </h1>
            <p className="py-6 text-gray-500">
              There are no events or updates recorded in the timeline yet.
            </p>
            <Link to={"/"} className="btn bg-[#244D3F] text-white">Go to Home Page</Link>
          </div>
        </div>
      </div>
    </div>
  }
  const getIcon = (action) => {
    if (action === "call") return <img src={Call} alt="Call-icon" />;
    if (action === "text") return <img src={Text} alt="Call-icon" />;
    if (action === "video") return <img src={Video} alt="Call-icon" />;
  };

  const getLabel = (action) => {
    if (action === "call") return "Call";
    if (action === "text") return "Text";
    if (action === "video") return "Video";
  };

  return (
    <div className="w-9/12 mx-auto space-y-4 my-10">
      {timelines.map(({ id, name, action, time }) => (
        <div
          key={id}
          className="flex items-center gap-4 border border-gray-300 rounded-lg p-4 bg-gray-100 shadow-sm"
        >
          {/* Icon */}
          <div className="text-gray-600">{getIcon(action)}</div>

          {/* Content */}
          <div>
            <p className="font-medium text-gray-500">
              <span className="font-semibold text-[#244D3F]">{
                getLabel(action)
              }</span> with{" "}
              {name}
            </p>
            <p className="text-sm text-gray-400">
              {new Date(time).toDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelinePage;