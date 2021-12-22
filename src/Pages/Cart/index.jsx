import { FaTrash } from "react-icons/fa";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import gameImg from "../../assets/cs.jpg";

import { Container, Item, Option } from "./styles";

export function Cart() {
  return (
    <>
      <Header />

      <Container>
        <h1>Resumo do pedido</h1>

        <Item>
          <img src={gameImg} alt="Game background" />

          <p>Counter Strike</p>

          <Option>
            <span>R$18,90</span>
            <FaTrash />
          </Option>
        </Item>
        <Item>
          <img src={gameImg} alt="Game background" />

          <p>Counter Strike</p>

          <Option>
            <span>R$18,90</span>
            <FaTrash />
          </Option>
        </Item>

        <Button>Finalizar compra</Button>
      </Container>
    </>
  );
}
