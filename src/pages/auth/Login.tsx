import { Input, Button, Form } from "antd";
import { Link } from "react-router-dom";
import ROUTES from "../../consts/routes";
import { LoginDto } from "../../models/authDto";
import { login } from "../../services/authService";
import useAutomaticLogin from "../../hooks/useAutomaticLogin";

const Login = () => {
  const { mutate } = useAutomaticLogin({
    fetchFn: (data: LoginDto) => login(data),
    redirectWhenSuccess: ROUTES.ROUTES.ME,
  });

  const onSubmit = (data: LoginDto) => {
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
        label="Email:"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password type="password" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      <Button type="link" style={{ width: 200 }}>
        <Link to={ROUTES.AUTH.SIGNUP}>create an account here!</Link>
      </Button>
    </Form>
  );
};
export default Login;
