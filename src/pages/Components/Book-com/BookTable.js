import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const BookTable = ({ book }) => {
  const { books } = useSelector((state) => state.booksCol);
  console.log(books);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Thumbnail</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {books.map((item, i) => (
          <tr key={i}>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.year}</td>
            <td>
              <img src={item.thumbnail} />
            </td>
            <td>{item.summary}</td>
            <td>
              <Link to={`/book/newbook/editbook/${item._id}`}>
                <Button variant="warning">edit</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
