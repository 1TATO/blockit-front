import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem("@BlockItCart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  async function handleAddProductOnCart(product) {
    const productInCart = cart.find((prod) => prod.id === product.id);

    if (!productInCart) {
      setCart([...cart, product]);
      localStorage.setItem("@BlockItCart", JSON.stringify([...cart, product]));
    } else {
      alert("Produto ja adicionado");
    }
  }

  async function handleRemoveProductOnCart(id) {
    const productInCart = cart.find((prod) => prod.id === id);

    if (productInCart) {
      const filteringProducts = cart.filter((product) => product.id !== id);

      setCart(filteringProducts);
      localStorage.setItem("@BlockItCart", JSON.stringify(filteringProducts));
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddProductOnCart,
        handleRemoveProductOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCartContext must be used within an CartContextProvider"
    );
  }

  return context;
}

export { CartContextProvider, useCartContext };
