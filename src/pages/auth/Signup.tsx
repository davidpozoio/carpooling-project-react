import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import ROUTES from "../../consts/routes";
import { SignupDto } from "../../models/authDto";
import { useMutation } from "react-query";
import { signup } from "../../services/authService";
import styles from "./Signup.module.css";

const Signup = () => {
  const { mutate } = useMutation({
    mutationFn: (data: SignupDto) => signup(data),
  });

  const onSubmit = (data: SignupDto) => {
    console.log("hello", data);
    mutate(data);
  };

  return (
    <div className={styles.container}>
      <Form
        onFinish={onSubmit}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      > <h2>Registrase</h2>
        <Form.Item
          label="Nombres:"
          name="firstName"
          rules={[{ required: true, message: "Porfavor a de ingresar sus nombres" }]}
        >
          <Input className={styles.inputField} 
                 placeholder="David"/>
        </Form.Item>
        <Form.Item
          label="Apellidos:"
          name="lastName"
          rules={[{ required: true, message: "Porfavor a de ingresar sus apellidos" }]}
        >
          <Input className={styles.inputField} 
                 placeholder="Pozo"/>
        </Form.Item>

        <Form.Item
          label="Número Celular:"
          name="cellNumber"
          rules={[{ required: true, message: "Porfavor a de ingresar su número celular" }]}
        >
          <Input className={styles.inputField} type="number" 
                 placeholder="0987365724"/>
        </Form.Item>

        <Form.Item
          label="Identificación:"
          name="identification"
          rules={[
            { required: true, message: "Porfavor a de ingresar su identificación" },
          ]}
        >
          <Input className={styles.inputField} type="number" 
                 placeholder="0105869468"/>
        </Form.Item>

        <Form.Item
          label="E-mail:"
          name="email"
          rules={[{ required: true, message: "Porfavor a de ingresar la direacción de correo electronico" }]}
        >
          <Input className={styles.inputField} 
                 placeholder="dav@gmail.com"/>
        </Form.Item>
        <Form.Item
          label="Contraseña:"
          name="password"
          rules={[{ required: true, message: "Porfavor a de ingresar la contraseña" }]}
        >
          <Input.Password className={styles.inputField} type="password" 
                          placeholder="1234"/>
        </Form.Item>

        <Form.Item
          label="Confirmar:"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Porfavor a de confirmar la contraseña",
            },
          ]}
        >
          <Input.Password className={styles.inputField} type="password" 
                          placeholder="1234"/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button className={styles.button} type="primary" htmlType="submit">
            Confirmar
          </Button>
        </Form.Item>

        <Button className={styles.linkButton} type="link">
          <Link to={ROUTES.AUTH.LOGIN}>Iniciar Sesión</Link>
        </Button>
      </Form>
    </div>
  );
};
export default Signup;
