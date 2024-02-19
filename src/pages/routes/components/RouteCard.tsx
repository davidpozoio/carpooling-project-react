import { Button, Card, Spin, Typography } from "antd";
import { RouteGetResponse } from "../../../models/routeModel";
import { useMutation, useQueryClient } from "react-query";
import { deleteRoute } from "../../../services/routeService";
import CACHE_KEYS from "../../../consts/cache-keys";
import "../styles/route-card-styles.css";

interface RouteCardProps {
  route: RouteGetResponse;
}

const RouteCard = ({ route }: RouteCardProps) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: deleteRoute,
    onSuccess: () => {
      queryClient.setQueriesData(
        [CACHE_KEYS.ROUTE.MY_ROUTES],
        (oldData?: RouteGetResponse[]) => {
          if (!oldData) return [];
          return oldData.filter((oldRoute) => oldRoute.id !== route.id);
        }
      );
    },
    onError: (data: { response: { status: number } }) => {
      const statusResponse = data.response.status;
      if (statusResponse === 404) {
        queryClient.setQueryData([CACHE_KEYS.ROUTE.MY_ROUTES], () => []);
      }
    },
  });

  const handleDelete = (id: number) => {
    mutate(id);
  };
  return (
    <Card
      hoverable
      title={
        <span>
          <Typography.Title level={3}>{route.name}</Typography.Title>
          <Button onClick={() => handleDelete(route.id)}>Delete</Button>
        </span>
      }
    >
      {isDeleting && (
        <span className="deleting-overlay">
          <span>Deleting...</span>
          <Spin />
        </span>
      )}

      <span>{new Date(route.startDate).toDateString()}</span>
      <p>{route.description}</p>
      <div>
        {route.routeStop.map((routeStop) => {
          return (
            <Card.Grid key={routeStop.id}>{routeStop.arriveHour}</Card.Grid>
          );
        })}
      </div>
    </Card>
  );
};
export default RouteCard;
