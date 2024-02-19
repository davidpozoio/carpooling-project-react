import { useQuery } from "react-query";
import { getAllMyRoutes } from "../../services/routeService";
import { Card, FloatButton, Row, Typography } from "antd";
import RouteListSkeleton from "./components/RouteListSkeleton";
import ModalMenuRoute from "./components/ModalMenuRoute";
import { PlusOutlined } from "@ant-design/icons";
import useToggle from "../../hooks/useToggle";
import CACHE_KEYS from "../../consts/cache-keys";

const MyRouteList = () => {
  const { data: routes, isLoading } = useQuery(
    [CACHE_KEYS.ROUTE.MY_ROUTES],
    () => getAllMyRoutes().then((res) => res.data.data)
  );

  const { toggle, setTrue, setFalse } = useToggle(false);

  return (
    <>
      <Typography.Title level={2}>My routes</Typography.Title>
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
    </>
  );
};
export default MyRouteList;
