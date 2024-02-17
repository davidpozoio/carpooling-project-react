import { useQuery } from "react-query";
import { getAllRoutes } from "../../services/routeService";
import { Card, FloatButton, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useToggle from "../../hooks/useToggle";
import ModalMenuRoute from "./components/ModalMenuRoute";
import CACHE_KEYS from "../../consts/cache-keys";
import RouteListSkeleton from "./components/RouteListSkeleton";

const RouteList = () => {
  const { data: routes, isLoading } = useQuery([CACHE_KEYS.ROUTE.LIST], () =>
    getAllRoutes().then((res) => res.data)
  );
  const { toggle, setTrue, setFalse } = useToggle(false);

  return (
    <Row gutter={[10, 10]} style={{ gap: "10px" }}>
      {isLoading && <RouteListSkeleton />}
      {<ModalMenuRoute show={toggle} onClose={() => setFalse()} />}
      {routes?.length === 0 && <span>there is no routes</span>}
      {routes?.map((route) => {
        return (
          <Card key={route.id} hoverable title={route.name}>
            <span>{new Date(route.startDate).toDateString()}</span>
            <p>{route.description}</p>
            {route.routeStop.map((routeStop) => {
              return <Card.Grid>{routeStop.arriveHour}</Card.Grid>;
            })}
          </Card>
        );
      })}
      <FloatButton
        icon={<PlusOutlined />}
        onClick={() => {
          setTrue();
        }}
      />
    </Row>
  );
};
export default RouteList;
