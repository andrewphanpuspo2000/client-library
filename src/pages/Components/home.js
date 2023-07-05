import { Layout } from "./layout/Layout";
import { Slides } from "./Carousel";
import { Col, Row, Form, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Cards } from "./Cards";
import { useEffect, useState } from "react";
import { retrieveBook } from "./Book-com/bookAction";

export const Home = () => {
  const { books } = useSelector((state) => state.booksCol);
  const [search, setSearch] = useState("");
  // const [searchCol, setSearchCol] = useState([]);
  const { searchBooks } = useSelector((state) => state.searchBook);
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  useEffect(() => {
    dispatch(retrieveBook(search));
  }, [search]);
  return (
    <Layout>
      <Slides />
      <Container className="my-5">
        <Row>
          <Col>
            <div className="d-flex justify-content-around">
              {books.length > 1 ? (
                <div className="left">{books.length} books</div>
              ) : (
                <div className="left">{books.length} book</div>
              )}
              <div className="right">
                <Form.Control
                  placeholder="serach book by name"
                  onChange={handleSearch}
                />
              </div>
            </div>
            <hr />
            <div className="book-list d-flex justify-content-between flex-wrap gap-3 mt-5">
              {Array.isArray(searchBooks) && searchBooks.length > 0
                ? searchBooks.map((item, i) => (
                    <Cards key={item._id} {...item} />
                  ))
                : books.map((item) => <Cards key={item._id} {...item} />)}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
