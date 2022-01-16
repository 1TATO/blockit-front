import { Link } from "react-router-dom";

import { FaTrash, FaCartPlus } from "react-icons/fa";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { useCartContext } from "../../context/CartContext";
import { useWishlistContext } from "../../context/WishlistContext";

import { Container, Item, Option, Buttons } from "./styles";

export function Wishlist() {
  const { handleAddProductOnCart } = useCartContext();
  const { wishlist, handleRemoveProductOnWishlist } = useWishlistContext();

  function handleCartAddProduct(product) {
    handleAddProductOnCart(product);
  }

  function handleWishlistRemoveProduct(id) {
    handleRemoveProductOnWishlist(id);
  }

  return (
    <>
      <Header />

      <Container>
        <h1>Lista de desejos</h1>

        {wishlist.map((product) => (
          <Item key={product.id}>
            <img src={product.imageUrl} alt="Game background" />

            <p>{product.name}</p>

            <Option>
              <span>R${product.price},00</span>
              <Buttons>
                <FaCartPlus onClick={() => handleCartAddProduct(product)} />
                <FaTrash
                  onClick={() => handleWishlistRemoveProduct(product.id)}
                />
              </Buttons>
            </Option>
          </Item>
        ))}

        <Link to={"/cart"}>
          <Button>Ir para o carrinho</Button>
        </Link>
      </Container>
    </>
  );
}
