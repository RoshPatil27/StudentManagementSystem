import React from "react";
import {
//   ViewStudentWrapper,
  ViewStudentTitle,
  ViewStudentContent,
  ViewStudentField,
  ViewStudentLabel,
  ViewStudentValue,
  ModulePOPUP,
    ModelOverlay,
    ModuleCloseButton

} from "./ViewStudent.styles";

const ViewStudent = ({ student, onClose }) => {
  if (!student) return null;


  return (
    <ModulePOPUP>
        <ModelOverlay>
            <ModuleCloseButton onClick={onClose}>X</ModuleCloseButton>
      <ViewStudentTitle>View Student Details</ViewStudentTitle>

      <ViewStudentContent>
        <Field label="Student ID" value={student.StudentId} />
        <Field label="Full Name" value={student.FullName} />
        <Field label="Roll No" value={student.RollNo} />
        <Field label="Class" value={student.Class} />
        <Field label="Section" value={student.Section} />
        <Field label="Gender" value={student.Gender} />
        <Field label="DOB" value={student.DOB} />
        <Field label="Email" value={student.Email} />
        <Field label="Contact No" value={student.ContactNo} />
        <Field label="Address" value={student.Address} />
        <Field label="Blood Group" value={student.bloodGroup} />
        <Field label="Emergency Name" value={student.emergencyName} />
        <Field label="Emergency Contact" value={student.emergencyContact} />
        <Field label="Emergency Relation" value={student.emergencyRelation} />
      </ViewStudentContent>
    </ModelOverlay>
    </ModulePOPUP>
  );
};

const Field = ({ label, value }) => (
  <ViewStudentField>
    <ViewStudentLabel>{label}:</ViewStudentLabel>
    <ViewStudentValue>{value || "-"}</ViewStudentValue>
  </ViewStudentField>
);

export default ViewStudent;


