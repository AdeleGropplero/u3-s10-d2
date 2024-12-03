import { Component } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    inputText: "",
    formSubmitted: false,
    selected: ""
  };
  handleChange = (propertyName, propertyValue) => {
    this.setState({ ...this.state, [propertyName]: propertyValue });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ formSubmitted: true });
  };

  handleReset = () => {
    this.setState({ inputText: "", formSubmitted: false });
  };

  changeSelected = (par) => {
    this.setState({ selected: par });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col className="col-6">
            <Form onSubmit={this.handleSubmit} className="mb-3">
              <Form.Label
                htmlFor="bookTitle"
                className="d-flex justify-justify-content-start fw-bold fs-5"
              >
                Title
              </Form.Label>
              <Form.Control
                type="text"
                id="bookTitle"
                placeholder="Inserisci il titolo del libro"
                autoComplete="off"
                value={this.state.inputText}
                onChange={(e) => this.handleChange("inputText", e.target.value)}
              />
              <Button
                type="reset"
                variant="danger"
                onClick={this.handleReset}
                className="m-3 d-flex justify-content-start"
              >
                Reset
              </Button>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col className="col-8">
            {this.state.selected ? (
              <CommentArea
                /* asin={this.state.book.asin} */
                selected={this.state.selected}
              />
            ) : (
              <Alert variant="warning">
                Seleziona un libro per vedere i commenti!
              </Alert>
            )}
          </Col>
        </Row>

        <Row sm={2} lg={3}>
          {!this.state.formSubmitted &&
            this.props.books.map((book) => (
              <SingleBook
                key={book.asin}
                book={book}
                selected={this.state.selected}
                changeSelected={this.changeSelected}
              />
            ))}
          {this.state.formSubmitted &&
            this.props.books
              .filter((book) =>
                book.title
                  .toLowerCase()
                  .includes(this.state.inputText.toLowerCase())
              )
              .map((book) => (
                <SingleBook
                  key={book.asin}
                  book={book}
                  selected={this.state.selected}
                  changeSelected={this.changeSelected}
                />
              ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
