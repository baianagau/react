import ItemDetail from "../ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const films = [
  {
    id: 1,
    image:
      "https://i0.wp.com/www.onasaez.com/wp-content/uploads/2023/03/SEB_9811.jpg?fit=946%2C1417&ssl=1",
    category:'pantalones',title: "Jean Oslo",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5sKoqeXmItDZQVk3gsLZnL5AGBvFBONH_g&usqp=CAU ",
      category:'pantalones',title: "Jean Merlín",
  },
  {
    id: 3,
    image:
      "https://i0.wp.com/www.onasaez.com/wp-content/uploads/2023/03/SEB_1522-copy.jpg?fit=1262%2C1890&ssl=1 ",
      category:'remeras',title: "Remera Georgia",
  },
  {
    id: 4,
    image:
      " https://i0.wp.com/www.onasaez.com/wp-content/uploads/2023/03/DSC_6804-copia-scaled-e1678917613504.jpg?fit=621%2C929&ssl=1",
      category:'remeras',title: "Remera Dubai",
  },
  {
    id: 5,
    image:
      "https://i0.wp.com/www.onasaez.com/wp-content/uploads/2022/08/SEB_0138.jpg?fit=946%2C1417&ssl=1 ",
      category:'pantalones',title: "Jean París",
  },
];
export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {detalleId} = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(films);
      }, 2000);
    });


    getData.then(res =>setData(res.find(pantalones=>pantalones.id === parseInt(detalleId))));
  },[])

  return <ItemDetail data={data} />;
};
export default ItemDetailContainer;
