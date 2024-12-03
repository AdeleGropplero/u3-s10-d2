import { Component } from "react";
import { Alert, Container } from "react-bootstrap";

class Welcome extends Component {
  render() {
    return (
      <Container fluid style={{ paddingTop: "60px" }}>
        <h1 className="text-primary">Welcome</h1>
        <Alert variant="warning">Warning alert</Alert>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nam architecto, quas aliquid distinctio ab? Eum asperiores esse maiores possimus,
          eligendi ad sed, corrupti error illum ducimus delectus alias impedit! Cumque, nesciunt reiciendis! Ullam ducimus voluptatum, nobis labore quia
          reprehenderit.
        </p>
      </Container>
    );
  }
}

export default Welcome;
