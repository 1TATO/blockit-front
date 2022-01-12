import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Moment from "moment";

import api from "../../services/api";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Container, Content, Information } from "./styles";

export function Details() {
  const [product, setProduct] = useState({});
  const slug = useParams();

  const launchDate = Moment(product.launchDate).format("DD/MM/YYYY");

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
                <Button>Adicionar ao carrinho</Button>
              </Link>
              <Link to={"/wishlist"}>
                <Button>Adicionar à lista de desejos</Button>
              </Link>
            </Information>
          )}
        </Content>
      </Container>
    </>
  );
}
