import { Col, Container, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer>
      <Container fluid className="bg-success">
        <Row>
          <Col>footer</Col>
          <Col>della</Col>
          <Col>pagina</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
