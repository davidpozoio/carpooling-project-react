import { Input, Button, Form } from "antd";
import { Link } from "react-router-dom";
import ROUTES from "../../consts/routes";
import { LoginDto } from "../../models/authDto";
import { login } from "../../services/authService";
import useAutomaticLogin from "../../hooks/useAutomaticLogin";
import styles from './Login.module.css';

const Login = () => {
  const { mutate } = useAutomaticLogin({
    fetchFn: (data: LoginDto) => login(data),
    redirectWhenSuccess: ROUTES.ROUTES.ME,
  });

  const onSubmit = (data: LoginDto) => {
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
      > <h2>Iniciar Sesión</h2>
        <Form.Item
          label="E-mail:"
          name="email"
          rules={[{ required: true, message: "Porfavor a de ingresar la direacción de correo electronico" }]}
        >
          <Input className={styles.inputField}  
                 placeholder="dav@gmail.com"/>
        </Form.Item>
        <Form.Item
          label="Contraseña"
          name="password"
          rules={[{ required: true, message: "Porfavor a de ingresar la contraseña" }]}
        >
          <Input.Password className={styles.inputField} type="password" 
                          placeholder="1234"/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button className={styles.button} type="primary" htmlType="submit">
            Confirmar
          </Button>
        </Form.Item>

        <Button type="link" style={{ width: 200, color: '#000', border: 'none', fontSize: '18px', fontFamily: 'Josefin Slab', marginLeft: '20%' }}>
          <Link to={ROUTES.AUTH.SIGNUP}>Registrarse</Link>
        </Button>
      </Form>
    </div>
  );
};

export default Login;