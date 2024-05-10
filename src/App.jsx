import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <ToastContainer />

        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer welcome="¡Bienvenidos a nuestro E-commerce!" />
            }
          />
          <Route
            path="/category/:idCategory"
            element={
              <ItemListContainer welcome="¡Bienvenidos a nuestro E-commerce!" />
            }
          />
          <Route
            path="/detalles/:idProduct"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<Cart />}></Route>

          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
