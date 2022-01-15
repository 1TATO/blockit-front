import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Moment from "moment";

import api from "../../services/api";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { useCartContext } from "../../context/CartContext";

import { Container, Content, Information } from "./styles";

export function Details() {
  const { handleAddProductOnCart, handleRemoveProductOnCart } =
    useCartContext();

  const [product, setProduct] = useState({});
  const slug = useParams();

  const launchDate = Moment(product.launchDate).format("DD/MM/YYYY");

  function handleAddProduct(product) {
    handleAddProductOnCart(product);
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

              <Link to={"/cart"}>
                <button type="button" onClick={() => handleAddProduct(product)}>
                  Adicionar ao carrinho
                </button>
              </Link>
              <Link to={"/wishlist"}>
                <button>Adicionar à lista de desejos</button>
              </Link>
            </Information>
          )}
        </Content>
      </Container>
    </>
  );
}
