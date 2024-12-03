import { Button } from "react-bootstrap";
import { Component } from "react";
import { Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    review: { comment: "", rate: "1", elementId: this.props.id }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.review),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGVmZThhZDEyOTAwMTU4NzZiY2MiLCJpYXQiOjE3MzI4MDU0MDEsImV4cCI6MTczNDAxNTAwMX0.2twewSFvDE-W-xMJm5eskZP3vVV_ix-G-1ld8yY8cNk",
        "Content-Type": "application/json"
      }
    }).then((resp) => {
      if (resp.ok) {
        alert("commento inviato");
      } else {
        throw new Error("errore nella chiamata");
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="review-text">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci un commento per questo libro"
            value={this.state.review.comment}
            onChange={(e) => this.setState({ review: { ...this.state.review, comment: e.target.value } })}
            required
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          value={this.state.review.rate}
          onChange={(e) => this.setState({ review: { ...this.state.review, rate: e.target.value } })}
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </Form.Select>
        <Button type="submit" variant="warning">
          Invia recensione
        </Button>
      </Form>
    );
  }
}

export default AddComment;
