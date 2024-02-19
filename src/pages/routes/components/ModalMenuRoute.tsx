import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  SelectProps,
} from "antd";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { RoutePostRequest } from "../../../models/routeModel";
import CACHE_KEYS from "../../../consts/cache-keys";
import { getAllStops } from "../../../services/stopService";
import { createRouteAndAddStops } from "../../../services/routeService";

interface ModalMenuRouteProps {
  onClose: () => void;
  show: boolean;
}

const ModalMenuRoute = ({ onClose, show = false }: ModalMenuRouteProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createRouteAndAddStops,
    onSuccess: () => {
      queryClient.clear();
      queryClient.refetchQueries();
      onClose();
    },
  });

  const { data: stops, isLoading } = useQuery([CACHE_KEYS.STOPS.LIST], () =>
    getAllStops().then((res) => {
      const options: SelectProps["options"] = res.data.map((option) => ({
        label: option.name,
        value: option.id,
      }));

      return options;
    })
  );

  const onSubmit = (route: RoutePostRequest & { stops: number[] }) => {
    console.log(route);
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
        <Form.Item
          label="stops:"
          name="stops"
          rules={[{ required: true, message: "Select an stop!" }]}
        >
          <Select mode="multiple" options={stops} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" disabled={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalMenuRoute;
