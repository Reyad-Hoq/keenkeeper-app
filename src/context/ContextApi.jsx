import { createContext, useState } from "react";

export const InteractionContext = createContext();

const InteractionProvider = ({ children }) => {
  const [call, setCall] = useState([])
  const handleCall = () => {
    // stored friend id
    // stored localstorage
    // array of object 
    // 
  }
  const data = { test: "demo" }
  return (
    <InteractionContext.Provider value={data}>
      {children}
    </InteractionContext.Provider>
  );
};

export default InteractionProvider;