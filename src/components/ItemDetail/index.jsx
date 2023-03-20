import "./itemDetail.css";
import ItemCount from "../ItemCount";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {
const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
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
