import React from "react";

import Title from "../Title";
import ItemCount from "../ItemCount";

import itemList from './itemList.css'

export const ItemListContainer = ({texto}) => {
const onAdd = (quantity) => {
    console.log (`compraste ${quantity} unidades`)
}

    return(
        <div className="container">
            <Title className="title" greeting= {texto} />
            <ItemCount className="itemList" initial ={1} stock={10} onAdd={onAdd}/>
        </div>
    );
}
export default ItemListContainer;