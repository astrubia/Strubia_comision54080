import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";
import { useparams } from "react-router-dom";

import data from "../data/products.json";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const {id} = useparams();

    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });

        get.then((data) => {
            if (!id) {
                setProducts(data);
            } else {
                const filtered = data.filter((product) => product.category === id);
                setProducts(filtered);
            }
        });
    }, [id]);
    
    return (
    <Container className="mt-4">
        <ItemList products={products} />
    </Container>
    );
};
        