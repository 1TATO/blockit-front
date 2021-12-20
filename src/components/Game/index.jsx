import { FaHeart, FaCartPlus } from "react-icons/fa";

import gameImg from "../../assets/cs.jpg";

import { Container, Content, GameContent, Details, Icons } from "./styles";

export function Game() {
  return (
    <Container>
      <Content>
        <GameContent>
          <img src={gameImg} alt="Game background" />
          <Details>
            <span>Counter Strike: Global Offensive</span>
            <span>R$ 18,90</span>
          </Details>
          <Icons>
            <FaHeart />
            <FaCartPlus />
          </Icons>
        </GameContent>
        <GameContent>
          <img src={gameImg} alt="Game background" />
          <Details>
            <span>Counter Strike: Global Offensive</span>
            <span>R$ 18,90</span>
          </Details>
          <Icons>
            <FaHeart />
            <FaCartPlus />
          </Icons>
        </GameContent>
        <GameContent>
          <img src={gameImg} alt="Game background" />
          <Details>
            <span>Counter Strike: Global Offensive</span>
            <span>R$ 18,90</span>
          </Details>
          <Icons>
            <FaHeart />
            <FaCartPlus />
          </Icons>
        </GameContent>
      </Content>
    </Container>
  );
}
