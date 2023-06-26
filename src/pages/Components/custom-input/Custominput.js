import Form from "react-bootstrap/Form";

export const CustomInput = ({ label, handleChange, ...rest }) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} onChange={handleChange} />
      </Form.Group>
    </>
  );
};
