import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = (props) => {
  /*   state = {
    inputText: "",
    formSubmitted: false,
    selected: ""
  }; */

  const [inputText, setInputText] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selected, setSelected] = useState("");

  /*   const handleChange = (propertyName, propertyValue) => {
    /*     this.setState({ ...this.state, [propertyName]: propertyValue }); */ /* Chiedere a stefano perchè così non funzionava */
  /*     setInputText({ ...inputText, [propertyName]: propertyValue });
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*     this.setState({ formSubmitted: true }); */
    setFormSubmitted(true);
  };

  const handleReset = () => {
    /* this.setState({ inputText: "", formSubmitted: false }); */
    setFormSubmitted(false);
    setInputText("");
  };

  const changeSelected = (par) => {
    /* this.setState({ selected: par }); */
    setSelected(par);
  };

  return (
    <Container>
      <Row>
        <Col className="col-6">
          <Form onSubmit={handleSubmit} className="mb-3">
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
              value={inputText}
              onChange={(e) =>
                /* handleChange("inputText", e.target.value) */ setInputText(
                  e.target.value
                )
              }
            />
            <Button
              type="reset"
              variant="danger"
              onClick={handleReset}
              className="m-3 d-flex justify-content-start"
            >
              Reset
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col className="col-8">
          {selected ? (
            <CommentArea
              /* asin={this.state.book.asin} */
              selected={selected}
            />
          ) : (
            <Alert variant="warning">
              Seleziona un libro per vedere i commenti!
            </Alert>
          )}
        </Col>
      </Row>

      <Row sm={2} lg={3}>
        {!formSubmitted &&
          props.books.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              selected={selected}
              changeSelected={changeSelected}
            />
          ))}
        {formSubmitted &&
          props.books
            .filter((book) =>
              book.title.toLowerCase().includes(inputText.toLowerCase())
            )
            .map((book) => (
              <SingleBook
                key={book.asin}
                book={book}
                selected={selected}
                changeSelected={changeSelected}
              />
            ))}
      </Row>
    </Container>
  );
};

export default BookList;
