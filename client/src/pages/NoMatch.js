import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron fluid>
            <h1 className="text-white">404 Page Not Found</h1>

            <h1><span role="img" aria-label= " em em-open_mouth">
                </span>
            </h1>
            </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
