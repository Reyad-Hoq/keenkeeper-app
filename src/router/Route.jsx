
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Timeline from "../timeline/TimelinePage";
import Stats from "../stats/StatsPage";
import Errorpage from "../Errorpage/Errorpage";
import HomePage from "../home/HomePage";
import FriendDetails from "../components/Ui/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "timeline", element: <Timeline /> },
      { path: "stats", element: <Stats /> },
      { path: "friendDetails", element: <FriendDetails /> },
    ],
    errorElement: <Errorpage />
  },
]);