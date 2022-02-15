import { useCallback, useRef } from "react";
import { Form } from "@unform/web";

import Input from "../Input";
import { Button } from "../Button";

import { useModal } from "../../context/ModalContext";
import { useGameForm } from "../../context/StoreContext";

export function GameForm() {
  const formRef = useRef(null);

  const { handleCloseModal } = useModal();
  const { handleCreateGame, handleEditGame, isEditingGame, editingGameData } =
    useGameForm();

  const handleEdit = useCallback(
    async (editedGame) => {
      const data = {
        ...editedGame,
        id: editingGameData.id,
      };

      await handleEditGame(data);
      handleCloseModal();
    },

    [editingGameData.id, handleCloseModal, handleEditGame]
  );

  return isEditingGame ? (
    <Form
      onSubmit={handleEdit}
      initialData={{
        name: editingGameData.name,
        description: editingGameData.description,
        price: editingGameData.price,
        imageUrl: editingGameData.imageUrl,
        launchDate: editingGameData.launchDate,
        developer: editingGameData.developer,
        distributor: editingGameData.distributor,
      }}
    >
      <h2 className="react-modal-title">Editar jogo</h2>

      <Input name="name" type="text" placeholder="Nome" />
      <Input name="description" type="text" placeholder="Descrição" />
      <Input name="price" type="number" placeholder="Preço" />
      <Input name="imageUrl" type="text" placeholder="Capa" />
      <Input name="launchDate" type="date" placeholder="Data de lançamento" />
      <Input name="developer" type="text" placeholder="Desenvolvedor" />
      <Input name="distributor" type="text" placeholder="Distribuidora" />

      <Button type="submit" onClick={() => {}}>
        Editar
      </Button>
    </Form>
  ) : (
    <Form ref={formRef} onSubmit={handleCreateGame}>
      <h2 className="react-modal-title">Cadastrar novo jogo</h2>

      <Input name="name" type="text" placeholder="Nome" />
      <Input name="description" type="text" placeholder="Descrição" />
      <Input name="price" type="number" placeholder="Preço" />
      <Input name="imageUrl" type="text" placeholder="Capa" />
      <Input name="launchDate" type="date" placeholder="Data de lançamento" />
      <Input name="developer" type="text" placeholder="Desenvolvedor" />
      <Input name="distributor" type="text" placeholder="Distribuidora" />

      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}
