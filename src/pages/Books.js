import { useSelector } from "react-redux";
import { UserLayout } from "./Components/layout/UserLayout";
import { Button } from "react-bootstrap";
import { BookTable } from "./Components/Book-com/BookTable";
import { Link } from "react-router-dom";
export const Books = () => {
  const { user } = useSelector((state) => state.userInfo);

  return user?.role !== "admin" ? (
    <h1>Unauthorized Access</h1>
  ) : (
    <UserLayout title="Books">
      <div className="text-end">
        <Link to="/book/newbook">
          <Button>Add New Book</Button>
        </Link>
      </div>
      <div className="mt-3">
        <BookTable />
      </div>
    </UserLayout>
  );
};
