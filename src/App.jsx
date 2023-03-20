import {  Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart/cart";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

import "./App.css";

function App() {
  return (
    <>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        </Routes>
    </>
  );
}

export default App;
