/* import { Component } from "react"; */
import CommentList from "./Commentlist";
import AddComment from "./AddComment";
import { useEffect, useState } from "react";

const CommentArea = (props) => {
  /*   state = {
    reviews: []
  }; */

  const [reviews, setReviews] = useState([]);

  const fetchComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + props.selected,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4N2RlODA2ZmM4YzAwMTU2Yjg3MzEiLCJpYXQiOjE3MzI4MDQwNzMsImV4cCI6MTczNDAxMzY3M30.1H79z_u2sVpY2cGcDlfI_8HzekltCZVso28SH131mI8"
        }
      }
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((reviews) => {
        /* this.setState({ reviews }); */
        setReviews({ reviews });
      });
  };

  /*   componentDidMount() {
    console.log("Mount");
    fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selected !== this.props.selected) {
      console.log("PropsCambiate");
      this.fetchComments();
    } else {
      console.log("props uguali, i commenti restano gli stessi");
    }
  } */

  useEffect(() => {
    console.log("componentDidMount()");

    fetchComments();
  }, []); /* Perche mi da questo errore? */

  return (
    <>
      <CommentList reviews={reviews} />
      <AddComment id={props.selected} />
    </>
  );
};

export default CommentArea;
