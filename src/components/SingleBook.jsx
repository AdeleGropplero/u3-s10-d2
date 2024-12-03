import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  /*  state = {
    selected: false
  }; */

  checkSelected = () => {
    this.props.selected ? console.log("VEROOO") : console.log("FALSOOO");
  };

  render() {
    const { book } = this.props;
    return (
      <Col className="mb-3">
        <Card
          className={
            this.props.selected === book.asin ? "border border-danger" : ""
          }
        >
          <Card.Img
            variant="top"
            src={book.img}
            onClick={() => {
              this.checkSelected();
              this.props.changeSelected(
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
  }
}

export default SingleBook;
