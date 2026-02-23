import styled from "styled-components";

/* Popup Background */
export const ModulePOPUP = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

/* Modal Card */
export const ModelOverlay = styled.div`
  background: white;
  width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  position: relative;
`;

/* Close Button */
export const ModuleCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  border: none;
  background: #e63946;
  color: white;
  font-size: 18px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`;

/* Title */
export const UpdateExamSheetTitle = styled.h2`
  margin-bottom: 20px;
  color: #0b1f3a;
`;

/* Form */
export const UpdateExamSheetForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

/* Field */
export const UpdateExamSheetField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* Label */
export const UpdateExamSheetLabel = styled.label`
  font-weight: 600;
  color: #374151;
`;

/* Input */
export const UpdateExamSheetInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #0b1f3a;
  }
`;

/* Textarea */
export const UpdateExamSheetTextarea = styled.textarea`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  resize: vertical;
  min-height: 80px;

  &:focus {
    outline: none;
    border-color: #0b1f3a;
  }
`;

/* Button */
export const UpdateExamSheetButton = styled.button`
  margin-top: 10px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #0b1f3a;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #132f57;
  }
`;
