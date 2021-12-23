import { FaTrash, FaCartPlus } from "react-icons/fa";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import gameImg from "../../assets/cs.jpg";

import { Container, Item, Option, Buttons } from "./styles";

export function Wishlist() {
  return (
    <>
      <Header />

      <Container>
        <h1>Lista de desejos</h1>

        <Item>
          <img src={gameImg} alt="Game background" />

          <p>Counter Strike</p>

          <Option>
            <span>R$18,90</span>
            <Buttons>
              <FaCartPlus />
              <FaTrash />
            </Buttons>
          </Option>
        </Item>
        <Item>
          <img src={gameImg} alt="Game background" />

          <p>Counter Strike</p>

          <Option>
            <span>R$18,90</span>
            <Buttons>
              <FaCartPlus />
              <FaTrash />
            </Buttons>
          </Option>
        </Item>

        <Button>Finalizar compra</Button>
      </Container>
    </>
  );
}
