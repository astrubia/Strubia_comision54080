import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => (
    <Card style={{ width: '16rem', margin: "0.18rem"}}>
        <Card.Img variant="top" height="216rem" src={product.imageId} />
        <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.categoryId}</Card.Text>
        <Link to={`/item/${product.id}`}>
            <Button variant="success">Comprar</Button>
        </Link>
        </Card.Body>
    </Card>
);