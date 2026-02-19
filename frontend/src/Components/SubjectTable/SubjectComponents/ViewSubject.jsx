import React from "react";
import {
//   ViewStudentWrapper,
  ViewSubjectTitle,
  ViewSubjectContent,
  ViewSubjectField,
  ViewSubjectLabel,
  ViewSubjectValue,
  ModulePOPUP,
    ModelOverlay,
    ModuleCloseButton

} from "./ViewSubject.styles";

const ViewSubject = ({ subject, onClose }) => {
  if (!subject) return null;

  return (
    <ModulePOPUP>
        <ModelOverlay>
            <ModuleCloseButton onClick={onClose}>X</ModuleCloseButton>
      <ViewSubjectTitle>View Subject Details</ViewSubjectTitle>

        <ViewSubjectContent>    
        <Field label="Subject ID" value={subject.SubjectId} />
        <Field label="Subject Name" value={subject.SubjectName} />
        <Field label="Subject Code" value={subject.SubjectCode} />
        <Field label="Description" value={subject.Description} />
        <Field label="Class" value={subject.Class} />
        <Field label="Section" value={subject.Section} />
        <Field label="Subject Type" value={subject.SubjectType} />
        <Field label="Subject Fee" value={subject.SubjectFee} />
        
      </ViewSubjectContent>

    </ModelOverlay>
    </ModulePOPUP>
  );
};

const Field = ({ label, value }) => (
  <ViewSubjectField>
    <ViewSubjectLabel>{label}:</ViewSubjectLabel>
    <ViewSubjectValue>{value || "-"}</ViewSubjectValue>
  </ViewSubjectField>
);

export default ViewSubject;

