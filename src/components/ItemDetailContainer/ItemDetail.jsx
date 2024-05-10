import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

const ItemDetail = ({ product }) => {
  const { cart, addToCart } = useContext(CartContext);

  const notify = () =>
    toast.success(`Agregaste al carrito ${product.nombre}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  const [addBtnToCart, setAddBtnToCart] = useState(false);

  const handleAddToCart = (count) => {
    const productCart = {
      ...product,
      cantidad: count,
      precioTotal: product.precio * count,
    };
    addToCart(productCart);
    notify();
    setAddBtnToCart(true);
  };

  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col">
          <div className="col-4 mt-4">
            {" "}
            <img className="img-thumbnail" src={product.img} alt="" />
          </div>
          <div className="col-4 mt-1">
            {" "}
            <img className="img-thumbnail" src={product.img} alt="" />
          </div>
          <div className="col-4 mt-1">
            {" "}
            <img className="img-thumbnail" src={product.img} alt="" />
          </div>
        </div>
        <div className="col card mt-5">
          <img src={product.img} className="card-img-top" alt="..." />
        </div>
        <div className="col">
          <div className="card-body mt-5">
            <h5 className="card-title mt-2">{product.nombre}</h5>
            <p className="card-text mt-2">{product.descripcion}</p>
            <h5 className="card-title mt-2">Precio: ${product.precio}</h5>
          </div>
          {addBtnToCart ? (
            <Link to="/cart">
              <button type="button" className="btn btn-outline-dark mt-2 align">
                Ir al carrito
              </button>
            </Link>
          ) : (
            <ItemCount
              handleAddToCart={handleAddToCart}
              stock={product.stock}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
