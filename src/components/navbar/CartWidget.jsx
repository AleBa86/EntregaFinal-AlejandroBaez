import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./navbar.css";
const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);
  const cantidad = cantidadTotal();

  return (
    <Link className="d-flex" to="/cart" id="cartWidget">
      <img id="cartIcon" src="./icons/cart.png" alt="" />
      <p className="d-flex" id="number">
        {cantidad > 0 && cantidad}
      </p>
    </Link>
  );
};

export default CartWidget;
