import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaCartPlus } from "react-icons/fa";

import api from "../../services/api";

import { Container, Content, GameContent, Details, Icons } from "./styles";

export function Game() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => setProducts(response.data));
  }, []);

  return (
    <Container>
      <Content>
        {products.map((product) => (
          <Link key={product.id} to={`/details/${product.id}`}>
            <GameContent>
              <img src={product.imageUrl} alt={product.name} />
              <Details>
                <span>{product.name}</span>
                <span>R$ {product.price},00</span>
              </Details>
            </GameContent>
          </Link>
          //   <Icons>
          //   <FaHeart />
          //   <FaCartPlus />
          // </Icons>
        ))}
      </Content>
    </Container>
  );
}
