import { useState, useEffect } from "react";
import getProducts from "../../data/getProducts";
import ItemList from "./ItemList";
import loadingSpinner from "../../hooks/loadingSpinner";
import { useParams } from "react-router-dom";


const ItemListContainer = ( {welcome} ) => { 

  const [products, setProducts] = useState([]);
  const { loading, showLoading, hideLoading, loadingPage} = loadingSpinner()

  const { idCategory } = useParams()
  

  useEffect( () => {
    showLoading();

    getProducts
    .then((respuesta) => {
      if(idCategory){
        const newProducts = respuesta.filter((product) => product.categoria === idCategory )
        setProducts(newProducts)
      }else{
        setProducts(respuesta)
      }
    })
    .catch((error) => console.log(error))
    .finally(() => hideLoading())
   }, [idCategory])

  return (
    <div>

    <div className="pt-5">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col"></div>
          <div className="col">
            <h1>{welcome}</h1>
          </div>
          <div className="col"></div>
        </div>
      </div>      
    </div>

{loading ? loadingPage : <ItemList products= {products}/>}
    </div>
  );
};

export default ItemListContainer;
