import Item from "./Item";
import "./item.css";

const ItemList = ({ products }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {products.map((product) => {
        return <Item key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ItemList;
