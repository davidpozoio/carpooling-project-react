import { Route } from "react-router-dom";
import ROUTES from "../../consts/routes";
import RouteList from "./RouteList";

const RouteRouter = (
  <>
    <Route path={ROUTES.ROUTES.ME} element={<RouteList />} />
  </>
);

export default RouteRouter;
