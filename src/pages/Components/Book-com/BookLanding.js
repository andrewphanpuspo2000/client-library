import { useDispatch, useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Button, Col, Container, Row } from "react-bootstrap";
import { addBorrowAction } from "../../Borrow-Book/borrowAction";
import { useEffect } from "react";
import { fetchBook } from "./bookAction";
import { Comment } from "./Comment";
import { CommentList } from "./CommentList";
import { getComments } from "../comment/commentAction";

export const BookLanding = () => {
  const { _id } = useParams();
  const { books } = useSelector((state) => state.booksCol);
  const { borrowed } = useSelector((state) => state.borrowCollection);
  const { thumbnail, title, author, year, summary, isAvailable, dueDate } =
    books.find((item) => item._id === _id) || {};
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const borrowtime = dueDate?.slice(0, 10);
  const { comments } = useSelector((state) => state.commentCollection);

  const borrowHandle = () => {
    if (window.confirm("Do you want to borrow?")) {
      const result = dispatch(
        addBorrowAction({
          bookId: _id,
          bookName: title,
          thumbnail,
          userId: user._id,
          userName: user.fName,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(fetchBook());
    dispatch(getComments());
    console.log(comments);
  }, [dispatch]);
  return (
    <Layout>
      <section className="main mt-4">
        <Container>
          <Row>
            <Col>
              <img src={thumbnail} width="100%" alt="img" />
            </Col>
            <Col>
              <h2>{title}</h2>
              <p>
                {author}-{year}
              </p>
              <p>{summary}</p>
              {user?._id ? (
                <div className="d-grid">
                  {isAvailable ? (
                    <Button variant="dark" onClick={borrowHandle}>
                      Borrow
                    </Button>
                  ) : (
                    <Button variant="dark" disabled>
                      Borrowed until {borrowtime}
                    </Button>
                  )}
                </div>
              ) : (
                <Link to="/signin">
                  <div className="d-grid">
                    <Button variant="dark">Login to Borrow the book</Button>
                  </div>
                </Link>
              )}
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <h3>Review</h3>
              <div className="review-list">
                {comments.map(
                  (item, i) =>
                    item.bookId === _id &&
                    item.isActive === "active" && (
                      <CommentList
                        key={item._id}
                        comment={item.comment}
                        author={item.userName}
                        star={item.star}
                      />
                    )
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};
