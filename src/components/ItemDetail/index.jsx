import "./itemDetail.css";

import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {
const [goToCart, setGoToCart] = useState(false);
const {addProduct} = useCartContext();
 
const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct( data, quantity);
  }

  return (
    <div className="container">
      <div className="detail">
        <img className="detail_image" src={data.image} alt="" />
        <h1>{data.title}</h1>
     {
      goToCart
      ? <Link to='/cart'>Finalizar compra</Link>
      :   <ItemCount className="itemList" initial={1} stock={10} onAdd={onAdd} />
     }
      </div>
    </div>
  );
};
export default ItemDetail;
