import { useState } from "react";
import { InteractionContext } from "./InteractionContext";


const InteractionProvider = ({ children }) => {
  const [timelines, setTimelines] = useState([]);

  const handleTimeline = (friend, type) => {
    const newEntry = {
      id: Date.now(),
      friendId: friend.id,
      name: friend.name,
      action: type,
      time: new Date()
    };

    setTimelines(prev => [...prev, newEntry]);
  };

  const data = {
    timelines,
    setTimelines,
    handleTimeline
  }
  return (
    <InteractionContext.Provider value={data}>
      {children}
    </InteractionContext.Provider>
  );
};

export default InteractionProvider;
