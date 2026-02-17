import React from 'react'
import {
    UpdateStudentWrapper,
    UpdateStudentTitle,
    UpdateStudentForm,
    UpdateStudentField,
    UpdateStudentLabel,
    UpdateStudentInput,
    UpdateStudentButton,
    ModulePOPUP,
    ModelOverlay,
    ModuleCloseButton
} from './UpdateStudent.styles'
import { updateStudent } from "../../../API/StudentApi";


const UpdateStudent = ({ student, onClose, onUpdated }) => {
  const [form, setForm] = React.useState({ ...student });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(student.StudentId, form);
    onUpdated();
    onClose();
  };

  return (
    <ModulePOPUP>
      <ModelOverlay onClick={onClose} />

      <UpdateStudentWrapper>
        <ModuleCloseButton onClick={onClose}>X</ModuleCloseButton>
        <UpdateStudentTitle>Update Student Details</UpdateStudentTitle>

        <UpdateStudentForm onSubmit={handleSubmit}>
          {Object.keys(form).map((key) => (
            key !== "StudentId" && (
              <UpdateStudentField key={key}>
                <UpdateStudentLabel>{key}</UpdateStudentLabel>
                <UpdateStudentInput
                  name={key}
                  value={form[key]}
                  onChange={handleChange}
                />
              </UpdateStudentField>
            )
          ))}

          <UpdateStudentButton type="submit">
            Save Changes
          </UpdateStudentButton>
        </UpdateStudentForm>
      </UpdateStudentWrapper>
    </ModulePOPUP>
  );
};


export default UpdateStudent
