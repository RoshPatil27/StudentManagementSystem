import React, { useEffect, useState } from "react";
import {
  AddExamListSheetWrapper,
  AddExamSheetTitle,
  ExamListSheetForm,
  ExamListSheetField,
  ExamListSheetLabel,
  ExamListSheetSelect,
  ExamListSheetOption,
  ExamListSheetInput,
  ExamListSheetTextarea,
  ExamSheetQuestions,
  ExamSheetQuestion,
  ExamSheetQuestionLabel,
  ExamSheetCorrectAnswers,
  ExamSheetCorrectAnswer,
  ExamSheetCorrectAnswerLabel,
  SubmitButton,
  BackButton
} from "./AddExamSheet.styles";

import { createExamSheet } from "../../../API/ExamSheetApi";
import { getAllSubjects } from "../../../API/SubjectApi";

const AddExamSheet = () => {
  const [form, setForm] = useState({
    subject_id: "",
    exam_date: "",
    questions: [""],
    correct_answers: [""]
  });

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const data = await getAllSubjects();
        setSubjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubjects();
  }, []);

  // -----------------------------
  // Handle basic field change
  // -----------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // -----------------------------
  // Handle question change
  // -----------------------------
  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...form.questions];
    updatedQuestions[index] = value;
    setForm({ ...form, questions: updatedQuestions });
  };

  // -----------------------------
  // Handle correct answer change
  // -----------------------------
  const handleCorrectAnswerChange = (index, value) => {
    const updatedAnswers = [...form.correct_answers];
    updatedAnswers[index] = value;
    setForm({ ...form, correct_answers: updatedAnswers });
  };

  // -----------------------------
  // Add new question
  // -----------------------------
  const addQuestion = () => {
    setForm({
      ...form,
      questions: [...form.questions, ""],
      correct_answers: [...form.correct_answers, ""]
    });
  };

  // -----------------------------
  // Submit
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createExamSheet(form);
      alert("Exam created successfully!");

      setForm({
        subject_id: "",
        exam_date: "",
        questions: [""],
        correct_answers: [""]
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AddExamListSheetWrapper>
      <BackButton onClick={() => window.history.back()}>
        Back
      </BackButton>

      <AddExamSheetTitle>Exam List Sheet</AddExamSheetTitle>

      <ExamListSheetForm onSubmit={handleSubmit}>
        
        {/* SUBJECT */}
        <ExamListSheetField>
          <ExamListSheetLabel>Subject</ExamListSheetLabel>
          <ExamListSheetSelect
            name="subject_id"
            value={form.subject_id}
            onChange={handleChange}
            required
          >
            <ExamListSheetOption value="">
              Select Subject
            </ExamListSheetOption>

            {subjects.map((subject) => (
              <ExamListSheetOption
                key={subject.SubjectId}
                value={subject.SubjectId}
              >
                {subject.SubjectName}
              </ExamListSheetOption>
            ))}
          </ExamListSheetSelect>
        </ExamListSheetField>

        {/* EXAM DATE */}
        <ExamListSheetField>
          <ExamListSheetLabel>Exam Date</ExamListSheetLabel>
          <ExamListSheetInput
            type="date"
            name="exam_date"
            value={form.exam_date}
            onChange={handleChange}
            required
          />
        </ExamListSheetField>

        {/* QUESTIONS */}
        <ExamListSheetField>
          <ExamListSheetLabel>Questions</ExamListSheetLabel>

          <ExamSheetQuestions>
            {form.questions.map((question, index) => (
              <ExamSheetQuestion key={index}>
                <ExamSheetQuestionLabel>
                  Question {index + 1}
                </ExamSheetQuestionLabel>

                <ExamListSheetTextarea
                  value={question}
                  onChange={(e) =>
                    handleQuestionChange(index, e.target.value)
                  }
                  required
                />
              </ExamSheetQuestion>
            ))}
          </ExamSheetQuestions>

          <SubmitButton type="button" onClick={addQuestion}>
            Add Question
          </SubmitButton>
        </ExamListSheetField>

        {/* CORRECT ANSWERS */}
        <ExamListSheetField>
          <ExamListSheetLabel>Correct Answers</ExamListSheetLabel>

          <ExamSheetCorrectAnswers>
            {form.correct_answers.map((answer, index) => (
              <ExamSheetCorrectAnswer key={index}>
                <ExamSheetCorrectAnswerLabel>
                  Answer {index + 1}
                </ExamSheetCorrectAnswerLabel>

                <ExamListSheetInput
                  type="text"
                  value={answer}
                  onChange={(e) =>
                    handleCorrectAnswerChange(index, e.target.value)
                  }
                  required
                />
              </ExamSheetCorrectAnswer>
            ))}
          </ExamSheetCorrectAnswers>
        </ExamListSheetField>

        <SubmitButton type="submit">
          Create Exam
        </SubmitButton>
      </ExamListSheetForm>
    </AddExamListSheetWrapper>
  );
};

export default AddExamSheet;
