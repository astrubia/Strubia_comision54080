import Container from "react-bootstrap/Container";
import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
    const { items } = useContext(CartContext);
    return (
        <Container className="mt-4">
            <h1>Productos</h1>
        </Container>
    );
};