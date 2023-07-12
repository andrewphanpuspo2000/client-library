import { useEffect, useState } from "react";
import { UserLayout } from "../Components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getAllBorrowed, returnBookAction } from "./borrowAction";
export const BorrowBook = () => {
  const dispatch = useDispatch();
  const { borrowed } = useSelector((state) => state.borrowCollection);
  const { _id } = useParams();

  const filterBorrow = borrowed.filter((item) => item.userId === _id);

  const returnBook = ({ bookId, _id }) => {
    console.log(bookId, _id);
    dispatch(returnBookAction({ bookId, _id }));
  };

  useEffect(() => {
    dispatch(getAllBorrowed());
    // console.log(borrowed);
  }, [dispatch]);
  return (
    <UserLayout title="Borrow History">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Thumbnail</th>
            <th>Due Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {filterBorrow.length &&
            filterBorrow.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.bookName}</td>
                <td>
                  <img src={item.thumbnail} />
                </td>
                <td>{item.dueDate?.slice(0, 10)}</td>
                <td>{item.returnDate?.slice(0, 10)}</td>
                {!item.isReturned ? (
                  <td>
                    <Button onClick={() => returnBook(item)}>Return</Button>
                  </td>
                ) : (
                  <td>
                    <Button disabled="true" variant="secondary">
                      Returned
                    </Button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </Table>
    </UserLayout>
  );
};
