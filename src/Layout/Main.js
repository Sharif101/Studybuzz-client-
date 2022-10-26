import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        {/* <Row>
          <Col lg="4"></Col>
          <Col lg="8">
            <Outlet></Outlet>
          </Col>
        </Row> */}
        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default Main;
