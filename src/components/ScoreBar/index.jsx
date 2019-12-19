import React from "react";
import "./styles.css";
import logo from "../../images/game-logo.png";

import { Container, Row, Col, Image } from "../../bootstrap-components";

const ScoreBar = ({ score, maxScore }) => (
  <Container fluid className="score-bar">
    <Row>
      <Col className="d-flex justify-content-center align-items-center">
        <Image className="logo" src={logo} />
        <h1 className="ml-5">Kitty Clickers</h1>
      </Col>
      {score === 0 && maxScore === 0 && (
        <Col className="d-flex justify-content-center align-items-center">
          <h3>Click an image to get started!</h3>
        </Col>
      )}
      {(score > 0 || maxScore > 0) && (
        <Col className="d-flex justify-content-center align-items-center">
          <h1>
            Score: {score} | Max: {maxScore}
          </h1>
        </Col>
      )}
    </Row>
  </Container>
);

export default ScoreBar;
