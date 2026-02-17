import React from "react";
import {
  Overlay,
  ModalBox,
  Title,
  Message,
  ButtonRow,
  CancelBtn,
  DeleteBtn,
} from "./DeleteModel.styles";

const DeleteModel = ({
  isOpen,
  onClose,
  onConfirm,
  itemName = "this item",
}) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalBox>
        <Title>Confirm Deletion</Title>
        <Message>
          Are you sure you want to delete <strong>{itemName}</strong>?  
          This action cannot be undone.
        </Message>

        <ButtonRow>
          <CancelBtn onClick={onClose}>Cancel</CancelBtn>
          <DeleteBtn onClick={onConfirm}>Delete</DeleteBtn>
        </ButtonRow>
      </ModalBox>
    </Overlay>
  );
};

export default DeleteModel;
