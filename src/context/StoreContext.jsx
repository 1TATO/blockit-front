import { createContext, useContext, useState, useEffect } from "react";

import api from "../services/api";

import { useModal } from "./ModalContext";

const GameFormContext = createContext();

const GameFormProvider = ({ children }) => {
  const { handleOpenModal, handleCloseModal } = useModal();

  const [games, setGames] = useState([]);
  const [isEditingGame, setIsEditingGame] = useState(false);
  const [editingGameData, setEditingGameData] = useState({});

  useEffect(() => {
    api.get("/products").then((response) => setGames(response.data));
  }, []);

  async function handleCreateGame(game) {
    const { data } = await api.post("/products", game);

    setGames([...games, data]);

    handleCloseModal();
  }

  async function handleEditGame(game) {
    setIsEditingGame(true);
    setEditingGameData(game);
    handleOpenModal();

    await api.put(`/products/${game.id}`, game).then(() => {
      setGames(games.map((ex) => (ex.id === game.id ? game : ex)));
    });
  }

  async function handleDeleteGame(id) {
    await api.delete(`/products/${id}`);

    setGames((exs) => exs.filter((ex) => ex.id !== id));
  }

  return (
    <GameFormContext.Provider
      value={{
        games,
        handleCreateGame,
        handleEditGame,
        handleDeleteGame,
        isEditingGame,
        setIsEditingGame,
        editingGameData,
      }}
    >
      {children}
    </GameFormContext.Provider>
  );
};

function useGameForm() {
  const context = useContext(GameFormContext);

  if (!context) {
    throw new Error("useGameForm must be used within an GameFormProvider");
  }

  return context;
}

export { GameFormProvider, useGameForm };
