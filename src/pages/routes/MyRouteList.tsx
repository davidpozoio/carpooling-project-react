import { useQuery } from "react-query";
import { getAllMyRoutes } from "../../services/routeService";
import { FloatButton, Row, Spin, Typography } from "antd";
import ModalMenuRoute from "./components/ModalMenuRoute";
import { PlusOutlined } from "@ant-design/icons";
import useToggle from "../../hooks/useToggle";
import CACHE_KEYS from "../../consts/cache-keys";
import "./styles/my-route-list-style.css";
import RouteCard from "./components/RouteCard";

const MyRouteList = () => {
  const { data: routes, isLoading } = useQuery(
    [CACHE_KEYS.ROUTE.MY_ROUTES],
    () => getAllMyRoutes().then((res) => res.data.data)
  );

  const { toggle, setTrue, setFalse } = useToggle(false);

  return (
    <div className="my-route-list-container">
      <>
        <Typography.Title level={2}>Mis rutas</Typography.Title>
        <Row gutter={[10, 10]} style={{ gap: "10px" }}>
          {isLoading && <Spin />}
          {<ModalMenuRoute show={toggle} onClose={() => setFalse()} />}
          {routes?.length === 0 && <span className="no-routes-message">There are no routes</span>}
          {routes?.map((route) => {
            return <RouteCard key={route.id} route={route} />;
          })}
          <FloatButton
            className="float-button" 
            icon={<PlusOutlined />}
            onClick={() => {
              setTrue();
            }}
          />
        </Row>
      </>
    </div>
  );
};
export default MyRouteList;