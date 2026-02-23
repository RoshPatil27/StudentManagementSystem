import styled from "styled-components";

/* ===============================
   Wrapper
================================= */
export const AddExamListSheetWrapper = styled.div`
  min-height: 100vh;
  background-color: #F5F7FF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

/* ===============================
   Title
================================= */
export const AddExamSheetTitle = styled.h2`
  color: #1F2937;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
`;

/* ===============================
   Form
================================= */
export const ExamListSheetForm = styled.form`
  width: 100%;
  max-width: 800px;
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
`;

/* ===============================
   Fields
================================= */
export const ExamListSheetField = styled.div`
  margin-bottom: 25px;
`;

export const ExamListSheetLabel = styled.label`
  display: block;
  font-weight: 500;
  color: #1F2937;
  margin-bottom: 8px;
`;

/* ===============================
   Select
================================= */
export const ExamListSheetSelect = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #4F46E5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
`;

export const ExamListSheetOption = styled.option``;

/* ===============================
   Inputs
================================= */
export const ExamListSheetInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #4F46E5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
`;

export const ExamListSheetTextarea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  font-size: 14px;
  resize: vertical;
  min-height: 80px;
  outline: none;

  &:focus {
    border-color: #4F46E5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
`;

/* ===============================
   Questions Section
================================= */
export const ExamSheetQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ExamSheetQuestion = styled.div`
  background: #F9FAFB;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #E5E7EB;
`;

export const ExamSheetQuestionLabel = styled.label`
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
  color: #6B7280;
`;

/* ===============================
   Correct Answers Section
================================= */
export const ExamSheetCorrectAnswers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ExamSheetCorrectAnswer = styled.div`
  background: #F9FAFB;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #E5E7EB;
`;

export const ExamSheetCorrectAnswerLabel = styled.label`
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
  color: #6B7280;
`;

/* ===============================
   Buttons
================================= */
export const SubmitButton = styled.button`
  background-color: #4F46E5;
  color: #FFFFFF;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #4338CA;
  }
`;

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
