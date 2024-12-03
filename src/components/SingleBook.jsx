import { Button, Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  /*  state = {
    selected: false
  }; */

  const checkSelected = () => {
    props.selected ? console.log("VEROOO") : console.log("FALSOOO");
  };

  const { book } = props;
  return (
    <Col className="mb-3">
      <Card
        className={props.selected === book.asin ? "border border-danger" : ""}
      >
        <Card.Img
          variant="top"
          src={book.img}
          onClick={() => {
            checkSelected();
            props.changeSelected(
              book.asin
            ); /*  this.props.changeSelected(!this.state.selected); */
          }}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          <Button variant="success" className="pb-2">
            Buy it!
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
