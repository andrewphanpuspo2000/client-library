import { useEffect, useState } from "react";
import { UserLayout } from "../Components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getAllBorrowed, returnBookAction } from "./borrowAction";
import { ReviewForm } from "../Components/review/ReviewForm";
import { CustomModal } from "./CustomModal";
import { setSystem } from "./systemSlice";
export const BorrowBook = () => {
  const dispatch = useDispatch();
  const { borrowed } = useSelector((state) => state.borrowCollection);
  const { _id } = useParams();
  const [selectedReview, setSelectedReview] = useState({});
  const filterBorrow = borrowed.filter((item) => item.userId === _id);
  const handleOnReview = (borrowBook) => {
    setSelectedReview(borrowBook);
    dispatch(setSystem(true));
  };
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
      {selectedReview?._id && (
        <CustomModal modalTitle="Review">
          <ReviewForm bookitem={selectedReview} />
        </CustomModal>
      )}
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
          {borrowed.length &&
            borrowed.map((item, i) => (
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
                <td>
                  <Button onClick={() => handleOnReview(item)}>Review</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </UserLayout>
  );
};
