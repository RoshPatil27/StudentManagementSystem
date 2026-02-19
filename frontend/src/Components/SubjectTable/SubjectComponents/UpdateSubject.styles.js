import styled from "styled-components";

/* ===== POPUP LAYOUT ===== */

export const ModulePOPUP = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModelOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

/* ===== MODAL BOX ===== */

export const UpdateSubjectWrapper  = styled.div`
  position: relative;
  background: #ffffff;
  padding: 30px 40px;
  border-radius: 12px;
  width: 85%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  z-index: 1001;
`;

/* ===== TITLE ===== */

export const UpdateSubjectTitle = styled.h2`
  margin-bottom: 25px;
  color: #0b1f3a;
  font-weight: 600;
`;

/* ===== FORM GRID ===== */

export const UpdateSubjectForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

/* ===== FIELD GROUP ===== */

export const UpdateSubjectField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UpdateSubjectLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #374151;
`;

export const UpdateSubjectInput = styled.input`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  transition: 0.2s;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
  }
`;

/* ===== BUTTON ===== */

export const UpdateSubjectButton = styled.button`
  grid-column: span 2;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #2563eb;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.2s;

  &:hover {
    background: #1d4ed8;
  }
`;

/* ===== CLOSE BUTTON ===== */

export const ModuleCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #e63946;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #c82333;
  }
`;
