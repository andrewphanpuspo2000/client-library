import { Table } from "react-bootstrap";
import { UserLayout } from "./Components/layout/UserLayout";
import { useSelector } from "react-redux";
export const Profile = () => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <UserLayout title="Profile">
      <Table className="table-striped table-bordered">
        <tbody>
          <tr>
            <td>Role</td>

            <td>{user.role}</td>
          </tr>

          <tr>
            <td>First Name</td>
            <td>{user.fName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{user.lName}</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{user.address}</td>
          </tr>
        </tbody>
      </Table>
    </UserLayout>
  );
};
