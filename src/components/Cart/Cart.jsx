import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import { useState } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, clearCart, delProductById, totalPrice } =
    useContext(CartContext);
  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      {cart.map((product) => (
        <div className="card mb-3 mt-1" key={product.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.img}
                style={{ width: "200px", height: "200px" }}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">Cantidad: {product.cantidad}</p>
                <p className="card-text">Precio unitario: ${product.precio}</p>
                <p className="card-text">
                  Precio total: ${product.precioTotal * product.cantidad}
                </p>

                <div
                  className="btn-group text-align-center"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => delProductById(product.id)}
                  >
                    Quitar producto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="container text-center">
        <h6>Total del carrito: ${totalPrice()}</h6>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={clearCart}
        >
          Vaciar carrito
        </button>
        <Link
          type="button"
          className="btn btn-outline-success ms-2"
          to="/checkout"
        >
          Continuar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
