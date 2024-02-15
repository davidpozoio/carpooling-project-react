import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import ROUTES from "../../consts/routes";
import { SignupDto } from "../../models/authDto";
import { useMutation } from "react-query";
import { signup } from "../../services/authService";

const Signup = () => {
  const { mutate } = useMutation({
    mutationFn: (data: SignupDto) => signup(data),
  });

  const onSubmit = (data: SignupDto) => {
    console.log("hello", data);
    mutate(data);
  };

  return (
    <Form
      onFinish={onSubmit}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      autoComplete="off"
    >
      <Form.Item
        label="First name:"
        name="firstName"
        rules={[{ required: true, message: "Please input your first name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last name:"
        name="lastName"
        rules={[{ required: true, message: "Please input your last name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Cell number:"
        name="cellNumber"
        rules={[{ required: true, message: "Please input your cell number!" }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="Identification:"
        name="identification"
        rules={[
          { required: true, message: "Please input your identification!" },
        ]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="Email:"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password:"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password type="password" />
      </Form.Item>

      <Form.Item
        label="Confirm password:"
        name="confirmPassword"
        rules={[
          { required: true, message: "Please input your confirm password!" },
        ]}
      >
        <Input.Password type="password" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      <Button type="link" style={{ width: 200 }}>
        <Link to={ROUTES.AUTH.LOGIN}>login here!</Link>
      </Button>
    </Form>
  );
};
export default Signup;
