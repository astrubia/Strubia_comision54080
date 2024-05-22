import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { CartContext } from "../contexts/CartContext";

const initialValues = {
    name: "",
    phone: "",
    email: "",
}
export const Cart = () => {
    const [values, setValues] = useState(initialValues);
    const { clear, items, removeItem } = useContext(CartContext);

    const total = () => {
        items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    };

    const handlechange = (ev) => {
        setValues((prev) => { 
            return {
                ...values, 
                [ev.target.name]: ev.target.value, 
            };
    });
    };
    
    const handleSubmit = () => {
        const order = {
            buyer: values,
            items: items,
            total: total()
        }
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => {
        if (id) {
            alert("su orden: " + id + " fue exitosa");
        }
    }).finally(() => {clear(); setValues(initialValues);});
};
    
    const handleClear = () => clear();
    const handleRemove = (id) => removeItem(id);

    return (
        <Container className="mt-4">
            <h1>Productos</h1>{items.map(i => {
            return (
            <ul key={i.title}>
                <li>Prod: {i.title}</li>
                <li>Cant: {i.quantity}</li>
                <li>$ {i.price}</li>
                <li onClick={() => handleRemove(i.id)}>x</li>
            </ul>
            ); 
            })}
            <h3>Total: ${total()}</h3>
            <button onClick={handleClear}>Vaciar carrito</button>
        {items?.length > 0 && <form>
            <label>Nombre</label>
            <input type="text" value={values.name} name="name" onChange={handlechange} />
            <label>Telefono</label>
            <input type="text" value={values.phone} name="phone" onChange={handlechange} />
            <label>Email</label>
            <input type="email" value={values.email} name="email" onChange={handlechange} />
            <button type="button" onClick={handleSubmit}>Enviar</button>
        </form>}   
        </Container>
    );
};