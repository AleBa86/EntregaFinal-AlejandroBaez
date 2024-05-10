import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="pt-5">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col"></div>
          <div className="col">
            <img
              className="card-img-top"
              src="https://htmlstream.com/front/assets/svg/illustrations/oc-empty-cart.svg"
              style={{
                height: "400px",
                width: "300px",
                alignContent: "center",
              }}
            />
            <h5>Tu carrito esta vacío, no te rindas!</h5>
            <Link to="/">
              <button type="button" className="btn btn-outline-dark mt-2 align">
                Ir a la tienda
              </button>
            </Link>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
