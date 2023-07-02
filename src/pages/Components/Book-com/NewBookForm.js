import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../custom-input/Custominput";
import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from "../layout/UserLayout";
import { useState } from "react";
import { addBook, fetchBook } from "./bookAction";
import { useNavigate } from "react-router-dom";

export const NewBookForm = () => {
  const { user } = useSelector((state) => state.userInfo);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const result = await dispatch(addBook(form));
    if (result === "success") navigate("/book");
    dispatch(fetchBook());
  };

  const inputs = [
    {
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "How to be Happy",
      required: true,
    },
    {
      label: "Author",
      name: "author",
      type: "text",
      placeholder: "Bryan",
      required: true,
    },
    {
      label: "Year",
      name: "year",
      type: "number",
      required: true,
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      type: "url",
      placeholder: "http://......",
      required: true,
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      placeholder: "",
      required: true,
    },
  ];
  return (
    <UserLayout title="Add New Book ">
      {user?.role === "admin" ? (
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((item, i) => (
            <CustomInput key={i} handleChange={handleOnChange} {...item} />
          ))}
          <Button type="submit" className="width-100">
            Add Book
          </Button>
        </Form>
      ) : (
        <h1>Unauthorised Access</h1>
      )}
    </UserLayout>
  );
};
