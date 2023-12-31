import { Layout } from "./layout/Layout";
import { Slides } from "./Carousel";
import { Col, Row, Form, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Cards } from "./Cards";
import { useEffect, useState } from "react";
import { fetchBook, retrieveBook } from "./Book-com/bookAction";
import { Link } from "react-router-dom";

export const Home = () => {
  const { books } = useSelector((state) => state.booksCol);
  const [search, setSearch] = useState([]);

  const handleSearch = (e) => {
    const { value } = e.target;
    const filter = books.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearch(filter);
  };
  useEffect(() => {
    setSearch(books);
  }, [books]);
  return (
    <Layout>
      <Slides />
      <Container className="my-5">
        <Row>
          <Col>
            <div className="d-flex justify-content-around">
              {search.length > 1 ? (
                <div className="left">{search.length} books</div>
              ) : (
                <div className="left">{search.length} book</div>
              )}
              <div className="right">
                <Form.Control
                  placeholder="serach book by name"
                  onChange={handleSearch}
                />
              </div>
            </div>
            <hr />
            <div className="book-list d-flex  flex-wrap gap-3 mt-5">
              {Array.isArray(search) &&
                search.length > 0 &&
                search.map((item, i) => (
                  <Link to={`/book/landing/${item._id}`}>
                    <Cards key={item._id} {...item} />
                  </Link>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
