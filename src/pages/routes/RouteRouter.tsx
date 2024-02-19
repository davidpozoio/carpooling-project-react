import { Route } from "react-router-dom";
import ROUTES from "../../consts/routes";
import RouteList from "./RouteList";
import MyRouteList from "./MyRouteList";

const RouteRouter = (
  <>
    <Route path={ROUTES.ROUTES.ME} element={<RouteList />} />
    <Route path={ROUTES.ROUTES.MY_ROUTES} element={<MyRouteList />} />
  </>
);

export default RouteRouter;
