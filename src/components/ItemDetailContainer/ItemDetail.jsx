import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col">
            <div className="col-4 mt-4"> <img className="img-thumbnail" src={product.img} alt="" /></div>
            <div className="col-4 mt-1"> <img className="img-thumbnail" src={product.img} alt="" /></div>
            <div className="col-4 mt-1"> <img className="img-thumbnail" src={product.img} alt="" /></div>          
        </div>
        <div className="col card mt-5">
          <img src={product.img} className="card-img-top" alt="..." />
        </div>
        <div className="col">
          <div className="card-body mt-5">
            <h5 className="card-title mt-2">{product.nombre}</h5>
            <h5 className="card-title mt-2">Precio: ${product.precio}</h5>
            <p className="card-text mt-2">{product.descripcion}</p>
          </div>
          <ItemCount />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
