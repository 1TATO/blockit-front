import { createContext, useContext, useState } from "react";

import { useCartContext } from "./CartContext";

const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const { cart } = useCartContext();
  const [wishlist, setWishlist] = useState(() => {
    const storagedWishlist = localStorage.getItem("@BlockItWishlist");

    if (storagedWishlist) {
      return JSON.parse(storagedWishlist);
    }

    return [];
  });

  async function handleAddProductOnWishlist(product) {
    const productInWishlist = wishlist.find((prod) => prod.id === product.id);
    const productInCart = cart.find((prod) => prod.id === product.id);

    if (productInCart) {
      alert("Seu produto ja esta em seu carrinho");

      return;
    }

    if (!productInWishlist) {
      setWishlist([...wishlist, product]);
      localStorage.setItem(
        "@BlockItWishlist",
        JSON.stringify([...wishlist, product])
      );

      alert("Produto adicionado na lista de desejos");
    } else {
      alert("Produto ja adicionado na lista de desejos");
    }
  }

  async function handleRemoveProductOnWishlist(id) {
    const productInWishlist = wishlist.find((prod) => prod.id === id);

    if (productInWishlist) {
      const filteringProducts = wishlist.filter((product) => product.id !== id);

      setWishlist(filteringProducts);

      localStorage.setItem(
        "@BlockItWishlist",
        JSON.stringify(filteringProducts)
      );
    }
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        handleAddProductOnWishlist,
        handleRemoveProductOnWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

function useWishlistContext() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlistContext must be used within an WishlistContextProvider"
    );
  }

  return context;
}

export { WishlistContextProvider, useWishlistContext };
