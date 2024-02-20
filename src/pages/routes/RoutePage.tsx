import { Link, Outlet } from "react-router-dom";
import ROUTES from "../../consts/routes";
import "./styles/route-page-styles.css";
import { Button } from "antd";

const RoutePage = () => {
  return (
    <div>
      <div className="route-layout">
        <div className="header --header"></div>
        <div className="nav-container">
          <Button type="link" className="menu-button">
            <Link to={ROUTES.ROUTES.ME}>Todas Las Rutas</Link>
          </Button>
          <Button type="link" className="menu-button">
            <Link to={ROUTES.ROUTES.MY_ROUTES}>Mis Rutas</Link>
          </Button>
        </div>
        <div className="content-container">
          <div className="--content content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePage;
