import React from "react";
import Modal from "react-modal";
import "./ImageModal.css";

interface ImageModalProps {
  modalData: string;
  onRequestClose: () => void;
  isOpen: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  modalData,
  onRequestClose,
  isOpen,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <img className="modal-image" src={modalData} alt="Picture-description" />
    </Modal>
  );
};

export default ImageModal;
