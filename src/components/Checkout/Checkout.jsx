import { useState, useContext } from "react";
import FormularioCheckout from "./FormularioCheckout";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import { Link } from "react-router-dom";
import validateForm from "../../utils/validationForm";
import { toast, Bounce } from "react-toastify";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    repEmail: "",
  });

  const [idOrder, setIdOrder] = useState(null);

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const handleChangeInpunt = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });

    console.log(dataForm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const order = {
      user: { ...dataForm },
      products: [...cart],
      total: totalPrice(),
    };

    const response = await validateForm(dataForm);
    if (response.status === "Success") {
      if (dataForm.email === dataForm.repEmail) {
        uploadOrder(order);
      } else {
        toast.error("Los emails no coinciden", {
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
      }
    } else {
      toast(response.error);
    }
  };

  const uploadOrder = async (order) => {
    const ordersRef = collection(db, "ordenes");
    const response = await addDoc(ordersRef, order);
    setIdOrder(response.id);
    clearCart();
  };
  return (
    <div>
      {idOrder ? (
        <div>
          <div className="pt-5">
            <div className="container text-center">
              <div className="row align-items-center">
                <div className="col"></div>
                <div className="col">
                  <h2>Compra exitosa! Muchas gracias por elegirnos!</h2>
                  <p>Por favor guarda tu numero de compra: {idOrder}</p>
                  <Link to="/">
                    <button className="btn btn-outline-dark">
                      Volver al inicio
                    </button>
                  </Link>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <FormularioCheckout
          dataForm={dataForm}
          handleChangeInpunt={handleChangeInpunt}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Checkout;
