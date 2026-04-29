import { useContext, useEffect, useState } from "react";
import { InteractionContext } from "../context/InteractionContext";
import Video from "../assets/video.png"
import Call from "../assets/call.png"
import Text from "../assets/text.png"
import NoTimeline from "./NoTimeline";
import FilteredAction from "./FilteredAction"


const TimelinePage = () => {
  const { timelines } = useContext(InteractionContext);
  console.log(timelines)
  const [sortingType, setSortingType] = useState("");
  console.log(sortingType);

  const filteredList = sortingType
    ? timelines.filter(item => item.action === sortingType)
    : timelines;

  if (timelines.length === 0) {
    return <div>
      <NoTimeline />
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
    <div className="w-9/12 mx-auto space-y-4 my-10 min-h-[60vh]">
      <FilteredAction sortingType={sortingType} setSortingType={setSortingType} />
      {filteredList.map(({ id, name, action, time }) => (
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