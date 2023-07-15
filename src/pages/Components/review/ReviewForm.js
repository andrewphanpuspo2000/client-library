import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../custom-input/Custominput";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { sendComment } from "../comment/commentAction";
import { useDispatch } from "react-redux";

export const ReviewForm = ({ bookitem }) => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const handleOnChange = (item) => {
    const { name, value } = item.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { _id, bookId, bookName, userName, userId } = bookitem;
    // const {}= form;

    const obj = {
      ...form,
      burrowId: _id,
      bookId,
      bookName,
      userName,
      userId,
    };
    console.log(obj);
    const result = dispatch(sendComment(obj));
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <CustomInput label="Title" name="title" placeholder="Best Book" />
        <Form.Group>
          <Form.Label>Rate the Book</Form.Label>
          <div className="fs-3">
            <input
              type="radio"
              onChange={handleOnChange}
              name="star"
              id="s1"
              value="1"
            />
            <label htmlFor="s1">
              {" "}
              <AiFillStar />
            </label>

            <input
              type="radio"
              onChange={handleOnChange}
              name="star"
              id="s2"
              value="2"
            />
            <label htmlFor="s2">
              {" "}
              <AiFillStar />
            </label>

            <input
              type="radio"
              onChange={handleOnChange}
              name="star"
              id="s3"
              value="3"
            />
            <label htmlFor="s3">
              {" "}
              <AiFillStar />
            </label>

            <input
              type="radio"
              onChange={handleOnChange}
              name="star"
              id="s4"
              value="4"
            />
            <label htmlFor="s4">
              {" "}
              <AiFillStar />
            </label>

            <input
              type="radio"
              onChange={handleOnChange}
              name="star"
              id="s5"
              value="5"
            />
            <label htmlFor="s5">
              {" "}
              <AiFillStar />
            </label>
          </div>
          <CustomInput
            label="Review Message"
            name="comment"
            as="textarea"
            rows="5"
            placeholder="Leave message"
            handleChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button type="submit">Submit Review</Button>
      </Form>
    </div>
  );
};
