import { useState, useEffect } from "react";
import getProducts from "../../data/getProducts";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setproduct] = useState({});

  const { idProduct } = useParams();

  useEffect(() => {
    getProducts
      .then((respuesta) => {
        const newProduct = respuesta.find(
          (product) => product.id === idProduct
        );
        setproduct(newProduct);
      })
      .catch((error) => console.log(error));
  }, []);
  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
