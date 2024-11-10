import { createBrowserRouter } from "react-router-dom";
import Overview from "./pages/Overview";
import ErrorPage from "./ErrorPage";
const routes = createBrowserRouter([
  {
    path: "/overview",
    element: <Overview />,
    errorElement: <ErrorPage />,
  },
]);

export { routes };
