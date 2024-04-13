import { useState } from "react"

const ItemCount = ({ addToCart }) => {
    
    const [ count, setCount] = useState(1)

    const sumar = () => {
        setCount(count + 1);
    };

    const restar = () => {
        if(count > 1){
            setCount(count - 1);
        }
    };

  return (
    <div className="d-grid gap-2 col-6 mx-auto">
        <div className="btn-toolbar mt-5" role="toolbar">
            <div className="btn-group mt-4" role="group">
                <button type="button" className="btn btn-outline-primary"  onClick={restar}>-</button>
                <input type="text" className="form-control text-center" value={count} aria-label="Input group example" aria-describedby="btnGroupAddon" readOnly />
                <button type="button" className="btn btn-outline-primary" onClick={sumar}>+</button>
            </div>
        <div className="d-grid gap-2 col-6 mx-auto">
            <button type="button" className="btn btn-outline-success mt-2 align" onClick={ () => addToCart(count)}>Agregar al carrito</button>
        </div>
        </div>
    </div>
  )
}

export default ItemCount