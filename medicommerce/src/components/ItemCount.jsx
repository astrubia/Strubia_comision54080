import { useState } from "react";

export const ItemCount = ({onAdd, stock}) => {
    const [count, setCount] = useState(1)

    const handleDecrease = () => {
        if (count > 1) setCount((prev) => prev - 1);
    }

    const handleIncrease = () => {
        if (stock > count) setCount((prev) => prev + 1);
    }

    const handleAdd = () => {
        onAdd(count);
        setCount(1);
    }

    return (
        <div className="d-flex">
        <div style={{padding: "10px", color: "black", fontWeight: 900 }} onClick={handleDecrease}>-</div>
        <input type="number" value={count} readOnly/>
        <div style={{padding: "10px", color: "black", fontWeight: 900 }} onClick={handleIncrease}>+</div>
        <button type="button" onClick={handleAdd}>agregar al carrito</button>
        </div>
    )
}