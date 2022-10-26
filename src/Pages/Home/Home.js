import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import baner1 from "../../assest/banner/1.avif";
import baner2 from "../../assest/banner/2.avif";
import baner3 from "../../assest/banner/3.avif";
import baner4 from "../../assest/banner/4.jpg";
import Button from "react-bootstrap/Button";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src={baner3} alt="First slide" />
          <Carousel.Caption className="slide-text">
            <h3>Study Buzz</h3>
            <p>
              The authority of those who teach is often an obstacle to those who
              want to learn.
            </p>
            <p>― Marcus Tullius Cicero</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src={baner2} alt="Second slide" />

          <Carousel.Caption className="slide-text">
            <h3>Study Buzz</h3>
            <p>You can't study the darkness by flooding it with light.</p>
            <p>― Edward Abbey,</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src={baner1} alt="Third slide" />

          <Carousel.Caption className="slide-text">
            <h3>Study Buzz</h3>
            <p>
              The ink of the scholar is more holy than the blood of the martyr.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="banner-end">
        <Row>
          <Col lg="5">
            <img src={baner4} alt="" />
          </Col>
          <Col lg="7">
            <div className="banner-text">
              <h2>Welcome to Study Buzz</h2>
              <p>
                One of the world's leading hospitals providing safe &
                compassionate care at its best for everyone. Atque commodi
                molestiae consectetur.
              </p>
              <Link to="/courses">
                <Button variant="info">Go to Courses</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
