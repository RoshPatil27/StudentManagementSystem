import styled from "styled-components";

export const AttendExamWrapper = styled.div`
  min-height: 100vh;
  background: #f4f6f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

/* ============================= */
/* STUDENT SELECT DROPDOWN */
/* ============================= */
export const StudentSelect = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  font-size: 14px;
  outline: none;
  transition: 0.2s ease;
  width: 100%;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
`;

export const AttendExamContainer = styled.div`
  width: 100%;
  max-width: 700px;
  background: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
`;

export const AttendExamTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;
`;

export const AttendExamInfo = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  color: #555;
`;

export const QuestionCard = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background: #f9fafc;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`;

export const QuestionTitle = styled.h4`
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
`;

export const QuestionText = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  color: #444;
`;

export const AnswerInput = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  box-sizing: border-box;
  resize: none;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 15px;

  &:hover {
    background: #4338ca;
  }
`;

export const ResultBox = styled.div`
  margin-top: 20px;
  padding: 15px;
  text-align: center;
  background: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 8px;
  color: #065f46;
  font-weight: 600;
`;
