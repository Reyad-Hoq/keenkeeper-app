import { useState } from "react";
import { InteractionContext } from "./InteractionContext";
import { toast } from "react-toastify";


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
    if (type === "call") {
      toast.success(`📞 Calling ${friend.name}...`);
    }

    if (type === "text") {
      toast.success(`💬 Texting ${friend.name}...`);
    }

    if (type === "video") {
      toast.success(`🎥 Video calling ${friend.name}...`);
    }
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
