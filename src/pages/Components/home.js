import { Layout } from "./layout/Layout";
import { Slides } from "./Carousel";
import { Col, Row, Form, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Cards } from "./Cards";

export const Home = () => {
  const { books } = useSelector((state) => state.booksCol);
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
                <Form.Control placeholder="serach book by name" />
              </div>
            </div>
            <hr />
            <div className="book-list d-flex justify-content-between flex-wrap gap-3 mt-5">
              {books.map((item) => (
                <Cards key={item._id} {...item} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
