import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getExamSubjectById,
  attendExamSheet,
  correctExamSheet,
} from "../../API/ExamSheetApi";
import { getAllStudents } from "../../API/StudentApi";

import {
  AttendExamWrapper,
  AttendExamContainer,
  AttendExamTitle,
  AttendExamInfo,
  QuestionCard,
  QuestionTitle,
  QuestionText,
  AnswerInput,
  SubmitButton,
  ResultBox,
  StudentSelect
} from "./AttendExam.styles";

const AttendExam = () => {
  const { subjectId } = useParams();

  const [exam, setExam] = useState(null);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  // =========================
  // Fetch Exam
  // =========================
  useEffect(() => {
    const fetchExam = async () => {
      try {
        const data = await getExamSubjectById(subjectId);
        setExam(data);

        if (data?.questions) {
          setAnswers(new Array(data.questions.length).fill(""));
        }
      } catch (error) {
        console.error("Error fetching exam:", error);
      } finally {
        setLoading(false);
      }
    };

    if (subjectId) {
      fetchExam();
    }
  }, [subjectId]);

  // =========================
  // Fetch Students
  // =========================
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getAllStudents();
        console.log("All students retrieved successfully:", data);
        setStudents(data || []);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  // =========================
  // Handle Answer Change
  // =========================
  const handleAnswerChange = (index, value) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  // =========================
  // Submit Exam
  // =========================
  const handleSubmit = async () => {
    if (!selectedStudent) {
      alert("Please select a student");
      return;
    }

    if (!exam) return;

    try {
      const examData = {
        student_id: selectedStudent,
        subject_id: exam.subject_id,
        student_answers: answers,
      };

      await attendExamSheet(examData);

      const marks = await correctExamSheet({
        student_id: selectedStudent,
        subject_id: exam.subject_id,
      });

      setResult(marks);
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  // =========================
  // Loading State
  // =========================
  if (loading) {
    return (
      <AttendExamWrapper>
        <AttendExamContainer>
          <AttendExamTitle>Loading Exam...</AttendExamTitle>
        </AttendExamContainer>
      </AttendExamWrapper>
    );
  }

  // =========================
  // If Exam Not Found
  // =========================
  if (!exam) {
    return (
      <AttendExamWrapper>
        <AttendExamContainer>
          <AttendExamTitle>No Exam Found</AttendExamTitle>
        </AttendExamContainer>
      </AttendExamWrapper>
    );
  }

  // =========================
  // Main Render
  // =========================
  return (
    <AttendExamWrapper>
      <AttendExamContainer>
        <AttendExamTitle>Attend Exam</AttendExamTitle>

        {/* Student Select */}
        <AttendExamInfo>
<StudentSelect
  value={selectedStudent}
  onChange={(e) => setSelectedStudent(e.target.value)}
>
  <option value="">-- Select Student --</option>
  {students.map((student) => (
    <option key={student._id} value={student._id}>
      {student.FullName}
    </option>
  ))}
</StudentSelect>
        </AttendExamInfo>

        {/* Exam Info */}
        <AttendExamInfo>
          <strong>Subject:</strong> {exam.subject_id}
        </AttendExamInfo>

        <AttendExamInfo>
          <strong>Date:</strong> {exam.exam_date}
        </AttendExamInfo>

        {/* Questions */}
        {exam.questions?.map((q, index) => (
          <QuestionCard key={index}>
            <QuestionTitle>Question {index + 1}</QuestionTitle>

            <QuestionText>{q}</QuestionText>

            <AnswerInput
              type="text"
              value={answers[index] || ""}
              onChange={(e) =>
                handleAnswerChange(index, e.target.value)
              }
              placeholder="Type your answer"
            />
          </QuestionCard>
        ))}

        <SubmitButton onClick={handleSubmit}>
          Submit Exam
        </SubmitButton>

        {/* Result */}
        {result && (
          <ResultBox>
            Marks: {result.marks} / {result.total}
          </ResultBox>
        )}
      </AttendExamContainer>
    </AttendExamWrapper>
  );
};

export default AttendExam;
