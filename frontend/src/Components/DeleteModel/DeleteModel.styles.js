import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  background: #ffffff;
  padding: 28px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  animation: popIn 0.2s ease-in-out;

  @keyframes popIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const Title = styled.h3`
  margin-bottom: 12px;
  color: #2c3e50;
  text-align: center;
`;

export const Message = styled.p`
  font-size: 14px;
  color: #555;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.5;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CancelBtn = styled.button`
  flex: 1;
  margin-right: 8px;
  padding: 10px;
  border-radius: 6px;
  border: none;
  background: #bdc3c7;
  color: white;
  cursor: pointer;

  &:hover {
    background: #95a5a6;
  }
`;

export const DeleteBtn = styled.button`
  flex: 1;
  margin-left: 8px;
  padding: 10px;
  border-radius: 6px;
  border: none;
  background: #e74c3c;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }
`;
