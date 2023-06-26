import { useState } from "react";
import { CustomInput } from "../custom-input/Custominput";
import { Layout } from "../layout/Layout";
import { Button, Form } from "react-bootstrap";
import { checkAuth } from "../../../helper/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Signin = () => {
  const input = [
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "Email",
      type: "email",
    },

    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "Password",
      type: "password",
    },
  ];

  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status } = await checkAuth(form);

    if (status === "success") {
      toast.success("success to login");
      navigate("/");
    }
    // console.log(result);
  };

  return (
    <Layout>
      <Form className="m-5 p-5 border shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-center">Login</h2>
        {input.map((item, i) => (
          <CustomInput key={i} handleChange={handleChange} {...item} />
        ))}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Layout>
  );
};
