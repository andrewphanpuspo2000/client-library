import { useEffect, useState } from "react";
import { UserLayout } from "../Components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getAllBorrowed } from "./borrowAction";
export const BorrowBook = () => {
  const dispatch = useDispatch();
  const { borrowed } = useSelector((state) => state.borrowCollection);
  const { _id } = useParams();
  const filterBorrow = borrowed.filter((item) => item.userId === _id);
  useEffect(() => {
    dispatch(getAllBorrowed());
  }, [dispatch]);
  return (
    <UserLayout title="Borrow History">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Thumbnail</th>
          </tr>
        </thead>
        <tbody>
          {filterBorrow.length &&
            filterBorrow.map((item, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{item.bookName}</td>
                <td>
                  <img src={item.thumbnail} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </UserLayout>
  );
};
