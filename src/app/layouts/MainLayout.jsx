import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideNav from "../components/sidenav/SideNav";
import { useAuth } from "../hooks/users";
import { StandardMenu, AdminMenu } from "../navigation";
import Loader from "../components/Loader";
import { TopNav } from "../components/topnav/TopNav";
import history from "../history";

const MainLayout = (props) => {
  const [user, loading] = useAuth();

  const menu = [];
  if (!loading) {
    if (user.role === "SuperAdmin") {
      menu.length = 0;
      menu.push(...StandardMenu, ...AdminMenu);
    }

    if (user.role === "Admin") {
      menu.length = 0;
      menu.push(...StandardMenu);
    }

    if (user.role === "Officer") {
      menu.length = 0;
      menu.push(...StandardMenu);
    }

    if (user.role === "ImplementationOfficer") {
      menu.length = 0;
      menu.push(...StandardMenu);
    }
  } else {
    return <Loader />;
  }

  return (
    <>
      {user.role ? (
        <Container fluid className="p-0 m-0">
          <TopNav />
          <div className="d-flex p-0 m-0">
            <SideNav menu={menu} />
            <Col sm={10} style={{ minHeight: "70vh" }} className="p-0 m-0">
              {props.children}
            </Col>
          </div>
        </Container>
      ) : (
        history.push("/auth/login")
      )}
    </>
  );
};

export default MainLayout;
