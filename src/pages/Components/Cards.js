import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Cards = ({ thumbnail, title, author, year }) => {
  return (
    <Card style={{ width: "10rem", flexGrow: 1 }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author} - {year}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
