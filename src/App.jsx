import NavBar from "./components/navbar/NavBar"
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>        
        <Route path="/" element={<ItemListContainer welcome = "¡Bienvenidos a nuestro E-commerce!"/>} />
        <Route path="/category/:idCategory" element={<ItemListContainer welcome = "¡Bienvenidos a nuestro E-commerce!"/>} />
        <Route path="/detalles/:idProduct" element={<ItemDetailContainer />} />
        
      </Routes>
        
        
    </BrowserRouter>
  )
}

export default App