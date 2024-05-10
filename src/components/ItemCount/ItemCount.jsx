import { useState } from "react";

const ItemCount = ({ handleAddToCart, stock }) => {
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubstract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <div className="btn-toolbar mt-5" role="toolbar">
        <div className="btn-group mt-4" role="group">
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={handleSubstract}
          >
            -
          </button>
          <input
            type="text"
            className="form-control text-center"
            value={count}
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
            readOnly
          />
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            type="button"
            className="btn btn-outline-dark mt-2 align"
            onClick={() => handleAddToCart(count)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
