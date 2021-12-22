import { Link } from "react-router-dom";
import { FaHeart, FaCartPlus } from "react-icons/fa";

import gameImg from "../../assets/cs.jpg";

import { Container, Content, GameContent, Details, Icons } from "./styles";

export function Game() {
  return (
    <Container>
      <Content>
        <Link to={"/details"}>
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
        </Link>
        <Link to={"/details"}>
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
        </Link>
        <Link to={"/details"}>
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
        </Link>
      </Content>
    </Container>
  );
}
