import styled from "styled-components";

export const AddStudentWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #eef2f7, #dbe6f6);
  padding: 40px 20px;
`;

export const AddStudentTitle = styled.h2`
  text-align: center;
  margin-bottom: 25px;
  color: #2c3e50;
  font-weight: 600;
`;

export const AddStudentForm = styled.form`
  background: #ffffff;
  padding: 35px;
  border-radius: 12px;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
`;

export const AddStudentField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const AddStudentLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  color: #34495e;
`;

export const AddStudentInput = styled.input`
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #ccd6dd;
  font-size: 14px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.15);
  }
`;

export const AddStudentButton = styled.button`
  margin-top: 15px;
  padding: 12px;
  border-radius: 6px;
  border: none;
  background-color: #4a90e2;
  color: #ffffff;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #357abd;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const BackButton = styled.button`
  position: absolute;
    top: 20px;
    left: 20px;
    background: #e63946;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
`;
