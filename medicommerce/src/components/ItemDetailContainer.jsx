import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { useparams } from "react-router-dom";

import data from "../data/products.json";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {id} = useparams();

    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });

        get.then((data) => {
            const filter = data.find((product) => product.id === Number(id));
            setProduct(filter);
        });
        }, [id]);
    
    if (!product) return <div>Cargando...</div>;
    
        return (
    <Container className="mt-4">
        <h1>{product.name}</h1>
        <img src={product.img} alt="s" />
    </Container>
    );
};
        