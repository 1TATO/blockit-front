import { FaTrash } from "react-icons/fa";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { useCartContext } from "../../context/CartContext";

import { Container, Item, Option, Footer } from "./styles";

export function Cart() {
  const { cart, handleRemoveProductOnCart } = useCartContext();

  function handleRemoveProduct(product) {
    handleRemoveProductOnCart(product);
  }

  return (
    <>
      <Header />

      <Container>
        <h1>Resumo do pedido</h1>

        {cart.map((product) => (
          <Item key={product.id}>
            <img src={product.imageUrl} alt="Game background" />

            <p>{product.name}</p>

            <Option>
              <span>R${product.price},00</span>
              <FaTrash onClick={() => handleRemoveProduct(product.id)} />
            </Option>
          </Item>
        ))}
      </Container>

      <Footer>
        <Button>Finalizar compra</Button>
      </Footer>
    </>
  );
}
