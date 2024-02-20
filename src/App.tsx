import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import NotFound from "./pages/error/NotFound";
import ROUTES from "./consts/routes";
import AuthRouter from "./pages/auth/AuthRouter";
import RoutePage from "./pages/routes/RoutePage";
import RouteRouter from "./pages/routes/RouteRouter";
import AuthRoute from "./guards/AuthRoute";

function App() {
  return (
    <>
      <h1>Aven</h1><h1>Tón</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path={ROUTES.HOME.ME} element={<Home />} />
        <Route
          path={ROUTES.AUTH.ME}
          element={
            <AuthRoute
              redirectWhenSuccess={ROUTES.ROUTES.ME}
              defaultRedirectWhenError={false}
              showContent
              persistant={true}
            >
              <Outlet />
            </AuthRoute>
          }
        >
          {AuthRouter}
        </Route>
        <Route
          path={ROUTES.ROUTES.ME}
          element={
            <AuthRoute showContent>
              <RoutePage />
            </AuthRoute>
          }
        >
          {RouteRouter}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
