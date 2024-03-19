const ItemListContainer = ( {welcome} ) => {
  return (
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
  );
};

export default ItemListContainer;
