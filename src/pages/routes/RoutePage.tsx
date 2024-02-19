import { Button, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { Link, Outlet } from "react-router-dom";
import ROUTES from "../../consts/routes";
import "./styles/route-page-styles.css";

const RoutePage = () => {
  return (
    <div>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Layout
          style={{
            padding: "24px 0",
          }}
        >
          <Sider
            className="nav"
            width={200}
            style={{
              backgroundColor: "white",
            }}
          >
            <Button>
              <Link to={ROUTES.ROUTES.ME}>All routes</Link>
            </Button>
            <Button>
              <Link to={ROUTES.ROUTES.MY_ROUTES}>My routes</Link>
            </Button>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default RoutePage;
