import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sendComment } from "../comment/commentAction";

export const Comment = ({ bookId }) => {
  const { user } = useSelector((state) => state.userInfo);

  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { value } = e.target;
    setComment(value);
  };
  const handleOnComment = async (e) => {
    e.preventDefault();
    const obj = {
      bookId: bookId,
      userId: user._id,
      userName: user.fName,
      comment: comment,
    };
    const addRes = await dispatch(sendComment(obj));
    if (addRes === "success") {
      setComment("");
    }
  };

  useEffect(() => {
    console.log(comment);
  }, [comment]);
  return (
    <Form className="d-flex comment-form mb-3" onSubmit={handleOnComment}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comments</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={handleOnChange}
          value={comment}
          required
        />
      </Form.Group>
      {user?._id ? (
        <Button type="submit">Add Comment</Button>
      ) : (
        <Link to="/signin">
          <Button> Please login before comment</Button>
        </Link>
      )}
    </Form>
  );
};
