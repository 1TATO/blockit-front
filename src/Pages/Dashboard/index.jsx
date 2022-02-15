import { FaTrash, FaEdit } from "react-icons/fa";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { GameModal } from "../../components/GameModal";

import { useModal } from "../../context/ModalContext";
import { useGameForm } from "../../context/StoreContext";

import { Container, List, Item, Option } from "./styles";

export function Dashboard() {
  const { handleOpenModal } = useModal();
  const { games, handleDeleteGame, setIsEditingGame, handleEditGame } =
    useGameForm();

  function handleCreate() {
    setIsEditingGame(false);
    handleOpenModal();
  }

  function handleEdit(product) {
    setIsEditingGame(true);
    handleEditGame(product);
  }

  function handleRemoveGame(product) {
    handleDeleteGame(product);
  }

  return (
    <>
      <Header />

      <Container>
        <Button type="button" onClick={handleCreate}>
          Adicionar novo jogo
        </Button>

        <GameModal />

        <List>
          {games.map((product) => (
            <Item key={product.id}>
              <img src={product.imageUrl} alt="Game background" />

              <p>{product.name}</p>

              <Option>
                <span>R${product.price},00</span>
                <div>
                  <FaEdit onClick={() => handleEdit(product)} />
                  <FaTrash onClick={() => handleRemoveGame(product.id)} />
                </div>
              </Option>
            </Item>
          ))}
        </List>
      </Container>
    </>
  );
}
