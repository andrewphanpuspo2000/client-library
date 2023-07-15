import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from "../layout/UserLayout";
import { useEffect } from "react";
import { getAllBorrowed } from "../../Borrow-Book/borrowAction";

export const Dashboard = () => {
  const { user } = useSelector((state) => state.userInfo);
  const { borrowed } = useSelector((state) => state.borrowCollection);
  const dispatch = useDispatch();
  const numberBorrowed = borrowed?.filter(
    (item) => item.isReturned === false
  ).length;

  useEffect(() => {
    dispatch(getAllBorrowed());
  }, [dispatch]);
  return (
    <UserLayout title="Dashboard">
      <section className="main d-flex">
        {user?.role === "admin" && (
          <div className="number-book">
            {borrowed?.length > 1 ? (
              <>
                <h4>
                  <span className="text-danger">Users</span> have borrowed
                </h4>
                <h2>{borrowed?.length}Books</h2>
              </>
            ) : (
              <>
                <h4>
                  <span className="text-danger">Users</span> have borrowed
                </h4>
                <h2>{borrowed?.length}Book</h2>
              </>
            )}
          </div>
        )}
        <div className="number-book">
          {numberBorrowed > 1 ? (
            <>
              <h4>You are now borrowing</h4>
              <h2>{numberBorrowed}Books</h2>
            </>
          ) : (
            <>
              <h4>You are now borrowing</h4>
              <h2>{numberBorrowed}Book</h2>
            </>
          )}
        </div>
      </section>
    </UserLayout>
  );
};
