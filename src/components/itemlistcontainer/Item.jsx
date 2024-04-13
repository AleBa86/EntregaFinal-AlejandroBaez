import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div key={product.id} className="col">        
      <div className="card h-100">
        <img src={product.img} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <h5 className="card-title">${product.precio}</h5>
        <p className="card-text">{product.descripcion}</p>
        <Link to={`/detalles/${product.id}`}><button className="btn btn-info">Mas información</button></Link>
      </div>
      </div>
    </div>
  );
};

export default Item;