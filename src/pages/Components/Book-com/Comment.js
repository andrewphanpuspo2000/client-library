import { Form, Table } from "react-bootstrap";
import { UserLayout } from "../layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getComments, updateActivation } from "../comment/commentAction";

export const Comment = () => {
  const { comments } = useSelector((state) => state.commentCollection);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value, checked } = e.target;
    if (window.confirm("Are you sure want to chnage status?")) {
      dispatch(
        updateActivation({
          id: value,
          isActive: checked ? "active" : "inActive",
        })
      );
    }
  };
  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
  return (
    <UserLayout title="Review">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>No</th>
            <th>Star</th>
            <th>Comment</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {comments?.length &&
            comments.map((item, i) => (
              <tr>
                <td>
                  {" "}
                  <Form.Check
                    type="switch"
                    value={item._id}
                    checked={item.isActive === "active"}
                    onChange={handleOnChange}
                  />
                </td>
                <td>{i + 1}</td>
                <td>{item.star}</td>
                <td>{item.comment}</td>
                <td>{item.userName}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </UserLayout>
  );
};
