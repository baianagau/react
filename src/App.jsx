import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";

import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer texto="Productos" />
    </>
  );
}

export default App;
