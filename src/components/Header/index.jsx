import logoImg from "../../assets/BlockIT.png";

import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Block IT" />
        <button type="button">LOJA</button>
        <button type="button">PERFIL</button>
        <button type="button">CARRINHO</button>
        <button type="button">PERFIL</button>
      </Content>
    </Container>
  );
}
