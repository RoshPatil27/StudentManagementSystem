import React from "react";
import {
  ViewExamTitle,
  ViewExamCard,
  ViewField,
  ViewLabel,
  ViewValue,
  QuestionsWrapper,
  QuestionCard,
  QuestionTitle,
  AnswerText,
  ModulePOPUP,
  ModelOverlay,
  ModuleCloseButton
} from "./ViewExamSheet.styles";

const ViewExamSheet = ({ exam, onClose }) => {
  if (!exam) return null;

  return (
    <ModulePOPUP>
      <ModelOverlay>
        <ModuleCloseButton onClick={onClose}>X</ModuleCloseButton>

        <ViewExamTitle>View Exam Sheet</ViewExamTitle>

        <ViewExamCard>
          <ViewField>
            <ViewLabel>Subject</ViewLabel>
            <ViewValue>
              {exam.subject_name || exam.subject_id}
            </ViewValue>
          </ViewField>

          <ViewField>
            <ViewLabel>Exam Date</ViewLabel>
            <ViewValue>{exam.exam_date}</ViewValue>
          </ViewField>
        </ViewExamCard>

        <QuestionsWrapper>
          {exam.questions?.map((question, index) => (
            <QuestionCard key={index}>
              <QuestionTitle>
                Question {index + 1}
              </QuestionTitle>

              <ViewValue>{question}</ViewValue>

              <AnswerText>
                <strong>Correct Answer:</strong>{" "}
                {exam.correct_answers?.[index] || "Not Provided"}
              </AnswerText>
            </QuestionCard>
          ))}
        </QuestionsWrapper>
      </ModelOverlay>
    </ModulePOPUP>
  );
};

export default ViewExamSheet;
