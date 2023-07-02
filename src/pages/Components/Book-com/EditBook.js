import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../custom-input/Custominput";
import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from "../layout/UserLayout";
import { useEffect, useState } from "react";
import { deleteOneBook, editingBook } from "./bookAction";
import { Link, useNavigate, useParams } from "react-router-dom";

export const EditBook = () => {
  const { books } = useSelector((state) => state.booksCol);
  const { user } = useSelector((state) => state.userInfo);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (_id !== form._id) {
      const findOne = books.find((item) => item._id === _id);
      findOne?._id && setForm(findOne);
      console.log(form);
    }
  }, [books, _id, form._id]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(form);
    setForm({ ...form, [name]: value });
  };

  const handleOnUpdate = async (e) => {
    e.preventDefault();
    dispatch(editingBook(form));
    console.log(form);
  };
  const deleteOnHandle = async () => {
    if (window.confirm("Are you sure to delete this book?")) {
      const result = await dispatch(deleteOneBook(_id));

      result === "success" && navigate("/book");
    }
  };

  const inputs = [
    {
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "How to be Happy",
      required: true,
      value: form.title,
    },
    {
      label: "Author",
      name: "author",
      type: "text",
      placeholder: "Bryan",
      required: true,
      value: form.author,
    },
    {
      label: "Year",
      name: "year",
      type: "number",
      required: true,
      value: form.year,
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      type: "url",
      placeholder: "http://......",
      required: true,
      value: form.thumbnail,
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      placeholder: "",
      required: true,
      value: form.summary,
    },
  ];
  return (
    <UserLayout title="Edit Book ">
      {user?.role === "admin" ? (
        <>
          <Link to="/book">
            <Button>Back</Button>
          </Link>
          <Form onSubmit={handleOnUpdate}>
            {inputs.map((item, i) => (
              <CustomInput key={i} handleChange={handleOnChange} {...item} />
            ))}
            <Button type="submit" className="btn-delete">
              Update Book
            </Button>
          </Form>
          <Button
            className="btn-delete mt-3 mb-5"
            variant="danger"
            onClick={deleteOnHandle}
          >
            Delete Book
          </Button>
        </>
      ) : (
        <h1>Unauthorised Access</h1>
      )}
    </UserLayout>
  );
};
