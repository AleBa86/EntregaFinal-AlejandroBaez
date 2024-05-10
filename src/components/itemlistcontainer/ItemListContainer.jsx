import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";
import ItemList from "./ItemList";
import loadingSpinner from "../../hooks/loadingSpinner";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ welcome }) => {
  const [products, setProducts] = useState([]);
  const { loading, showLoading, hideLoading, loadingPage } = loadingSpinner();

  const { idCategory } = useParams();

  const getProducts = async () => {
    const dataDb = await getDocs(collection(db, "productos"));
    const data = dataDb.docs.map((productDb) => {
      return { id: productDb.id, ...productDb.data() };
    });
    setProducts(data);
  };
  const getProductsByCategory = async () => {
    const q = query(
      collection(db, "productos"),
      where("categoria", "==", idCategory)
    );

    const dataDb = await getDocs(q);
    const data = dataDb.docs.map((productDb) => {
      return { id: productDb.id, ...productDb.data() };
    });
    setProducts(data);
  };
  useEffect(() => {
    if (idCategory) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategory]);

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

      {loading ? loadingPage : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
