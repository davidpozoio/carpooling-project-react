import { Link } from "react-router-dom";
import ROUTES from "../../consts/routes";

const Home = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Link to={ROUTES.AUTH.LOGIN}>login</Link>
      <Link to={ROUTES.AUTH.SIGNUP}>signup</Link>
    </div>
  );
};
export default Home;
