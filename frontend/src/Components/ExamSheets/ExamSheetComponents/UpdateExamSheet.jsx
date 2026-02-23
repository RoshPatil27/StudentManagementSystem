import React, {  useState } from "react";
import { updateExamSheet } from "../../../API/ExamSheetApi";
import {
  UpdateExamSheetTitle,
  UpdateExamSheetForm,
  UpdateExamSheetField,
  UpdateExamSheetLabel,
  UpdateExamSheetInput,
  UpdateExamSheetTextarea,
  UpdateExamSheetButton,
  ModulePOPUP,
  ModelOverlay,
  ModuleCloseButton
} from "./UpdateExamSheet.styles";

const UpdateExamSheet = ({ examsheet, onClose, onUpdated }) => {
const [form, setForm] = useState(() => ({
  subject_id: examsheet?.subject_id || "",
  exam_date: examsheet?.exam_date || "",
  questions: examsheet?.questions || [],
  correct_answers: examsheet?.correct_answers || []
}));


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuestionChange = (index, value) => {
    const updated = [...form.questions];
    updated[index] = value;
    setForm({ ...form, questions: updated });
  };

  const handleAnswerChange = (index, value) => {
    const updated = [...form.correct_answers];
    updated[index] = value;
    setForm({ ...form, correct_answers: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateExamSheet(form.subject_id, form);
      onUpdated();
      onClose();
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <ModulePOPUP>
      <ModelOverlay>
        <ModuleCloseButton onClick={onClose}>×</ModuleCloseButton>

        <UpdateExamSheetTitle>
          Update Exam Sheet
        </UpdateExamSheetTitle>

        <UpdateExamSheetForm onSubmit={handleSubmit}>

          <UpdateExamSheetField>
            <UpdateExamSheetLabel>Subject ID</UpdateExamSheetLabel>
            <UpdateExamSheetInput
              name="subject_id"
              value={form.subject_id}
              disabled
            />
          </UpdateExamSheetField>

          <UpdateExamSheetField>
            <UpdateExamSheetLabel>Exam Date</UpdateExamSheetLabel>
            <UpdateExamSheetInput
              type="date"
              name="exam_date"
              value={form.exam_date}
              onChange={handleChange}
              required
            />
          </UpdateExamSheetField>

          {form.questions.map((q, index) => (
            <UpdateExamSheetField key={index}>
              <UpdateExamSheetLabel>
                Question {index + 1}
              </UpdateExamSheetLabel>

              <UpdateExamSheetTextarea
                value={q}
                onChange={(e) =>
                  handleQuestionChange(index, e.target.value)
                }
              />

              <UpdateExamSheetLabel>
                Correct Answer {index + 1}
              </UpdateExamSheetLabel>

              <UpdateExamSheetInput
                value={form.correct_answers[index]}
                onChange={(e) =>
                  handleAnswerChange(index, e.target.value)
                }
              />
            </UpdateExamSheetField>
          ))}

          <UpdateExamSheetButton type="submit">
            Update Sheet
          </UpdateExamSheetButton>

        </UpdateExamSheetForm>
      </ModelOverlay>
    </ModulePOPUP>
  );
};

export default UpdateExamSheet;
