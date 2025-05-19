import Login from "@Components/Login";
import Home from "@Components/Home";
import { ROUTES } from "./constant";

const publicRoutes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.LOGIN, element: <Login /> },
];

export default publicRoutes;
