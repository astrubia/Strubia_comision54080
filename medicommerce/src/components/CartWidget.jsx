import React from 'react';
import cart from '../assets/cart1.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const CartWidget = () => {

  const { items } = useContext(CartContext);

  const total = items.reduce((acc, elem) => acc + elem.quantity, 0);


    return (
        <link to="/cart">
        <img src={cart} alt="carrito" width={40}/>
        <span>{total}</span>
        </link>
      )
    };