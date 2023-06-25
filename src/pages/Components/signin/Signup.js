import { Footer } from "../Footer";
import { Header } from "../Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../custom-input/Custominput";
import { useState } from "react";
import { toast } from "react-toastify";
import { postUser } from "../../../helper/axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const inputs = [
    {
      label: "First name",
      name: "fName",
      required: true,
      placeholder: "first name",
      type: "text",
    },
    {
      label: "Last name",
      name: "lName",
      required: true,
      placeholder: "Last name",
      type: "text",
    },
    {
      label: "Phone",
      name: "phone",
      required: true,
      placeholder: "Phone",
      type: "text",
    },
    {
      label: "Address",
      name: "address",
      required: true,
      placeholder: "Address",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "first name",
      type: "text",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "password",
      type: "password",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      placeholder: "confirm password",
      type: "password",
    },
  ];
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return toast.error("passwords are not match");
    }
    const resp = await postUser(form);
    if (resp.status === "success") {
      toast.success("data has been inputted");
      navigate("/signin");
    }
    console.log(resp);
  };
  return (
    <div>
      <Header />
      <section className="main">
        <Form className="m-5 p-5 border shadow-lg" onSubmit={handleSubmit}>
          {inputs.map((item, i) => (
            <CustomInput key={i} handleChange={handleOnChange} {...item} />
          ))}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
      <Footer />
    </div>
  );
};
