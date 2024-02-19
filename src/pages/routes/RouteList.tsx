import { useQuery } from "react-query";
import { getAllRoutes } from "../../services/routeService";
import { Card, Row, Spin, Typography } from "antd";

import CACHE_KEYS from "../../consts/cache-keys";

const RouteList = () => {
  const { data: routes, isLoading } = useQuery(
    [CACHE_KEYS.ROUTE.LIST],
    async () => {
      return getAllRoutes().then((res) => res.data);
    }
  );

  return (
    <>
      <Typography.Title level={2}>All routes</Typography.Title>
      <Row gutter={[10, 10]} style={{ gap: "10px" }}>
        {isLoading && <Spin />}

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
      </Row>
    </>
  );
};
export default RouteList;
