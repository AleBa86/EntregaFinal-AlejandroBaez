import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {
    const condicion = isInCart(newProduct.id);
    if (condicion) {
      const productsMod = cart.map((productCart) => {
        if (productCart.id === newProduct.id) {
          return {
            ...productCart,
            cantidad: productCart.cantidad + newProduct.cantidad,
          };
        } else {
          return productCart;
        }
      });
      setCart(productsMod);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const isInCart = (productId) => {
    const condition = cart.some((product) => product.id === productId);
    return condition;
  };

  const cantidadTotal = () =>
    cart.reduce((total, product) => total + product.cantidad, 0);

  const clearCart = () => {
    setCart([]);
  };

  const delProductById = (productId) => {
    const productsFilter = cart.filter(
      (productCart) => productCart.id !== productId
    );
    setCart(productsFilter);
  };

  const totalPrice = () =>
    cart.reduce(
      (total, product) => total + product.cantidad * product.precio,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        cantidadTotal,
        clearCart,
        delProductById,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
