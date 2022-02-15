import { Link } from "react-router-dom";
import logoImg from "../../assets/BlockIT.png";

import { useAuth } from "../../context/AuthContext";

import { Container, Content } from "./styles";

export function Header() {
  const { admin, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

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

        {admin ? (
          <Link to={"/"}>
            <button type="button" onClick={handleSignOut}>
              SAIR
            </button>
          </Link>
        ) : (
          <Link to={"/login"}>
            <button type="button">ENTRAR</button>
          </Link>
        )}
      </Content>
    </Container>
  );
}
