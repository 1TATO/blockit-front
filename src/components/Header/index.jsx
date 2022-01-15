import { Link } from "react-router-dom";
import logoImg from "../../assets/BlockIT.png";

import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Block IT" />
        <Link to={"/"}>
          <button type="button">LOJA</button>
        </Link>
        <Link to={"/wishlist"}>
          <button type="button">LISTA DE DESEJOS</button>
        </Link>
        <Link to={"/cart"}>
          <button type="button">CARRINHO</button>
        </Link>
      </Content>
    </Container>
  );
}
