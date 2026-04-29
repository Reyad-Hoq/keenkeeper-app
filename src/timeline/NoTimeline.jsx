import { useContext } from "react";
import { InteractionContext } from "../context/InteractionContext";
import { ImSad } from "react-icons/im";
import { Link } from "react-router";


const NoTimeline = () => {

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
            <Link to={"/"} className="btn bg-[#244D3F] text-white">Go to Home</Link>
          </div>
        </div>
      </div>
    </div>
  }

};

export default NoTimeline;