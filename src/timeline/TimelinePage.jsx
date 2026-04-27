import { useContext } from "react";
import { InteractionContext } from "../context/InteractionContext";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";

const TimelinePage = () => {
  const { timelines } = useContext(InteractionContext);

  const getIcon = (action) => {
    if (action === "call") return <BiPhoneCall className="text-xl" />;
    if (action === "text") return <MdOutlineTextsms className="text-xl" />;
    if (action === "video") return <CiVideoOn className="text-xl" />;
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
            <p className="font-medium">
              <span className="font-semibold">{getLabel(action)}</span> with{" "}
              {name}
            </p>
            <p className="text-sm text-gray-500">
              {new Date(time).toDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelinePage;