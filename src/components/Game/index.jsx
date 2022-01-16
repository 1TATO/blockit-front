import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaCartPlus } from "react-icons/fa";

import api from "../../services/api";

import { useCartContext } from "../../context/CartContext";
import { useWishlistContext } from "../../context/WishlistContext";

import { Container, Content, GameContent, Details, Icons } from "./styles";

export function Game() {
  const { handleAddProductOnCart } = useCartContext();
  const { handleAddProductOnWishlist } = useWishlistContext();

  function handleCartAddProduct(product) {
    handleAddProductOnCart(product);
  }

  function handleWishlistAddProduct(product) {
    handleAddProductOnWishlist(product);
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => setProducts(response.data));
  }, []);

  return (
    <Container>
      <Content>
        {products.map((product) => (
          <GameContent key={product.id}>
            <Link to={`/details/${product.id}`}>
              <Details>
                <img src={product.imageUrl} alt={product.name} />

                <span>{product.name}</span>
                <span>R$ {product.price},00</span>
              </Details>
            </Link>
            <Icons>
              <FaHeart onClick={() => handleWishlistAddProduct(product)} />
              <FaCartPlus onClick={() => handleCartAddProduct(product)} />
            </Icons>
          </GameContent>
        ))}
      </Content>
    </Container>
  );
}
