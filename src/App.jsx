
import "./App.css";
import MainLayOut from "./components/layouts/MainLayOut";
import {
  DASHBOARD_SIDEBAR,
  DASHBOARD_SIDEBAR_SEC,
} from "./lib/const/navigation";
import { createHashRouter, RouterProvider } from "react-router-dom";
function App() {
  const routes = DASHBOARD_SIDEBAR.concat(DASHBOARD_SIDEBAR_SEC);
  const routAndElement = routes.map((route) => ({
    path: route.to || "/",
    element: route.element || <div></div>,
  }));
  const router = createHashRouter([
    {
      path: "/",
      element: <MainLayOut />,
      children: routAndElement,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
