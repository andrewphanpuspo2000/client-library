import { useEffect, useState } from "react";
import { CustomInput } from "../custom-input/Custominput";
import { Layout } from "../layout/Layout";
import { Button, Form } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInAdminAction } from "./userAction";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const status = dispatch(signInAdminAction(form));

    // console.log(result);
  };

  return (
    <Layout>
      <Form className="m-5 p-5 border shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-center"> Welcome User to Login</h2>
        {input.map((item, i) => (
          <CustomInput key={i} handleChange={handleChange} {...item} />
        ))}
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Layout>
  );
};
