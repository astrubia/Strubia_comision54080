import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) => {
    const [items, setItems] = useState([{ title: "muletas", price: 15000, quantity: 4 }, 
    { title: "estetoscopio", price: 30000, quantity: 2 },
    ]);

    const clear = () => setItems([]);

    const removeItem = (id) => {
        const filtered = items.filter((item) => item.id !== id);
        setItems(filtered);
    };

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <CartContext.Provider
            value={{ items, clear, removeItem, addItem }}
        >
            {children}
        </CartContext.Provider>
    );
}