import { Card, Skeleton } from "antd";

const RouteListSkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton />
      </Card>
      <Card>
        <Skeleton />
      </Card>
      <Card>
        <Skeleton />
      </Card>
      <Card>
        <Skeleton />
      </Card>
    </>
  );
};
export default RouteListSkeleton;
