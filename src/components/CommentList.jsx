import { ListGroup } from "react-bootstrap";

const CommentList = (props) => (
  <ListGroup>
    {props.reviews.map((review) => (
      <ListGroup.Item key={review._id}>{review.comment}</ListGroup.Item>
    ))}
  </ListGroup>
);

export default CommentList;
