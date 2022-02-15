import Modal from "react-modal";
import { FiX } from "react-icons/fi";

import { useModal } from "../../context/ModalContext";

import { GameForm } from "../GameForm";

Modal.setAppElement("#root");

export function GameModal() {
  const { isModalOpen, handleCloseModal } = useModal();

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleCloseModal}
        className="react-modal-close"
      >
        <FiX />
      </button>

      <GameForm />
    </Modal>
  );
}
