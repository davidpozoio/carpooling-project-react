import { Link, Outlet } from "react-router-dom";
import ROUTES from "../../consts/routes";
import "./styles/route-page-styles.css";
import { Button } from "antd";

const RoutePage = () => {
  return (
    <div>
      <div className="route-layout">
        <div className="header --header"></div>
        <div className="--nav">
          <Button type="link" style={{ width: 200 }}>
            <Link to={ROUTES.ROUTES.ME}>All routes</Link>
          </Button>
          <Button type="link" style={{ width: 200 }}>
            <Link to={ROUTES.ROUTES.MY_ROUTES}>My routes</Link>
          </Button>
        </div>
        <div className="--content content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default RoutePage;
