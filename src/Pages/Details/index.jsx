import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import gameImg from "../../assets/cs.jpg";

import { Container, Content, Information } from "./styles";

export function Details() {
  return (
    <>
      <Header />

      <Container>
        <Content>
          <img src={gameImg} alt="Game background" />

          <Information>
            <p>
              O Counter-Strike: Global Offensive (CS:GO) melhora a jogabilidade
              de ação baseada em equipes na qual foi pioneiro quando lançado há
              19 anos. O CS:GO contém novos mapas, personagens e armas, além de
              contar com versões atualizadas de conteúdos do CS clássico (como
              de_dust2).
              <span>Data de lançamento: 21/ago/2012</span>
              <span>Desenvolvedor: Valve, Hidden Path Entertainment</span>
              <span>Distribuidora: Valve</span>
            </p>

            <Button>Adicionar ao carrinho</Button>
            <Button>Adicionar à lista de desejos</Button>
          </Information>
        </Content>
      </Container>
    </>
  );
}
