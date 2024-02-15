import { Button, DatePicker, Form, Input, Modal } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { createRoute } from "../../../services/routeService";
import { RoutePostRequest } from "../../../models/routeModel";
import CACHE_KEYS from "../../../consts/cache-keys";
import { addStopsInRoute } from "../../../services/stopService";
import { useState } from "react";
import { RouteStop } from "../../../models/stopModel";
import StopSelector from "./StopSelector";

interface ModalMenuRouteProps {
  onClose: () => void;
  show: boolean;
}

const ModalMenuRoute = ({ onClose, show = false }: ModalMenuRouteProps) => {
  const queryClient = useQueryClient();
  const [selectedStops, setSelectedStops] = useState<RouteStop[]>([]);
  const { mutate: addStopToRoute } = useMutation({
    mutationFn: addStopsInRoute,
  });
  const { mutate } = useMutation({
    mutationFn: (route: RoutePostRequest) =>
      createRoute(route).then((res) => res.data),
    onSuccess: (route) => {
      addStopToRoute({
        routeId: route.id,
        routeStops: [...selectedStops],
      });
      onClose();
    },
  });
  const onSubmit = (route: RoutePostRequest) => {
    console.log(route);
    queryClient.invalidateQueries([CACHE_KEYS.ROUTE.LIST]);
    mutate(route);
  };

  return (
    <Modal
      title="Create route"
      open={show}
      onCancel={onClose}
      okButtonProps={{}}
      footer={<></>}
    >
      <Form
        onFinish={onSubmit}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      >
        <Form.Item
          label="Name:"
          name="name"
          rules={[{ required: true, message: "Please input a name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description:"
          name="description"
          rules={[{ required: true, message: "Please input a description" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Start date:"
          name="startDate"
          rules={[{ required: true, message: "Please input a start date!" }]}
        >
          <DatePicker format={"YYYY-MM-DD"} />
        </Form.Item>
        <StopSelector
          onChange={(data) => {
            console.log(data);
            setSelectedStops(data);
          }}
        />
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalMenuRoute;
