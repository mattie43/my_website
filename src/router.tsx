import {
  createBrowserRouter,
} from "react-router-dom";
import * as Components from "./components"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Components.Sidebar />,
    children: [
      {
        path: "home",
        element: <Components.Home />,
      },
      {
        path: "stream",
        element: <Components.Stream />,
      },
    ]
  },
]);
