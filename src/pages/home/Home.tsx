import { useState } from 'react';
import { Link } from "react-router-dom";
import ROUTES from "../../consts/routes";
import styles from './Home.module.css';
import ImgComponent from '../img/img';

const Home = () => {
  const [backgroundVisible, setBackgroundVisible] = useState(true);

  const handleButtonClick = () => {
    setBackgroundVisible(false);
    console.log("Background visibility changed:", backgroundVisible);
  };
  
  return (
    <div className={`${styles.container} ${backgroundVisible ? '' : styles.hideBackground}`}>
      <ImgComponent src="https://cdn-icons-png.flaticon.com/512/3774/3774270.png" alt="" description="" />
      <Link to={ROUTES.AUTH.LOGIN} className={`${styles.link} ${styles.black}`} onClick={handleButtonClick}>Iniciar Sesión</Link>
      <Link to={ROUTES.AUTH.SIGNUP} className={`${styles.link} ${styles.white}`} onClick={handleButtonClick}>Registrarse</Link>
    </div>
  );
};

export default Home;
