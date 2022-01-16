import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "moment";

import api from "../../services/api";

import { Header } from "../../components/Header";

import { useCartContext } from "../../context/CartContext";
import { useWishlistContext } from "../../context/WishlistContext";

import { Container, Content, Information } from "./styles";

export function Details() {
  const { handleAddProductOnCart } = useCartContext();
  const { handleAddProductOnWishlist } = useWishlistContext();

  const [product, setProduct] = useState({});
  const slug = useParams();

  const launchDate = Moment(product.launchDate).format("DD/MM/YYYY");

  function handleCartAddProduct(product) {
    handleAddProductOnCart(product);
  }

  function handleWishlistAddProduct(product) {
    handleAddProductOnWishlist(product);
  }

  useEffect(() => {
    api.get(`/products/${slug.id}`).then((response) => {
      setProduct(response.data);
    });
  }, [slug.id]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <img src={product.imageUrl} alt="Game background" />

          {product && (
            <Information>
              <p>
                {product.description}
                <span>Data de lançamento: {launchDate}</span>
                <span>Desenvolvedor: {product.developer}</span>
                <span>Distribuidora: {product.distributor}</span>
              </p>

              <button
                type="button"
                onClick={() => handleCartAddProduct(product)}
              >
                Adicionar ao carrinho
              </button>
              <button
                type="button"
                onClick={() => handleWishlistAddProduct(product)}
              >
                Adicionar à lista de desejos
              </button>
            </Information>
          )}
        </Content>
      </Container>
    </>
  );
}
