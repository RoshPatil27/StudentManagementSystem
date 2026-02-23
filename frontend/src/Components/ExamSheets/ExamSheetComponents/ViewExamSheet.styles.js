import styled from "styled-components";

/* ===============================
   Wrapper
================================= */
export const ViewExamWrapper = styled.div`
  min-height: 100vh;
  background-color: #F5F7FF;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* ===============================
   Title
================================= */
export const ViewExamTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 25px;
`;

/* ===============================
   Main Card
================================= */
export const ViewExamCard = styled.div`
  background: #FFFFFF;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`;

export const ViewField = styled.div`
  margin-bottom: 15px;
`;

export const ViewLabel = styled.div`
  font-weight: 500;
  color: #6B7280;
  margin-bottom: 5px;
`;

export const ViewValue = styled.div`
  font-size: 15px;
  color: #1F2937;
`;

/* ===============================
   Questions
================================= */
export const QuestionsWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const QuestionCard = styled.div`
  background: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #E5E7EB;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
`;

export const QuestionTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 10px;
  color: #4F46E5;
`;

export const AnswerText = styled.div`
  margin-top: 12px;
  font-size: 14px;
  color: #059669;
`;

/* ===============================
   Buttons
================================= */
export const BackButton = styled.button`
  align-self: flex-start;
  background-color: #EF4444;
  color: #FFFFFF;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: 0.3s ease;

  &:hover {
    background-color: #DC2626;
  }
`;

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
    background: rgba(0, 0, 0, 0.5);
`;

export const ModelOverlay = styled.div`
  position: relative; /* important */
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  width: 80%;
  max-width: 400px;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 1001; /* above overlay */
`;


export const ModuleCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #e63946;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;