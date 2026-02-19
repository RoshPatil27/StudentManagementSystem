import React from 'react'
import {createSubject} from "../../../API/SubjectApi";
import {
    AddSubjectWrapper,
    AddSubjectTitle,
    AddSubjectForm,
    AddSubjectField,
    AddSubjectLabel,
    AddSubjectInput,
    AddSubjectButton,
    BackButton
} from "./AddSubject.styles";


const AddSubject = () => {
    const [form, setForm] = React.useState({
        SubjectId: "",
        SubjectName: "",
        SubjectCode: "",
        Description: "",
        Class: "",
        Section: "",
        SubjectType: "",
        SubjectFee: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createSubject(form);
            alert("Subject added successfully!");
            setForm({
                SubjectId: "",
                SubjectName: "",
                SubjectCode: "",
                Description: "",
                Class: "",
                Section: "",
                SubjectType: "",
                SubjectFee: "",
            });
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <AddSubjectWrapper>
        <BackButton onClick={() => window.history.back()}>Back</BackButton>
        <AddSubjectTitle>Add New Subject</AddSubjectTitle>
        <AddSubjectForm onSubmit={handleSubmit}>
            <AddSubjectField>
                <AddSubjectLabel>Subject ID</AddSubjectLabel>
                <AddSubjectInput 
                    type="text"
                    name="SubjectId"
                    value={form.SubjectId}
                    onChange={(e) => setForm({ ...form, SubjectId: e.target.value })}
                />
            </AddSubjectField>
            <AddSubjectField>
                <AddSubjectLabel>Subject Name</AddSubjectLabel>
                <AddSubjectInput 
                    type="text"
                    name="SubjectName"
                    value={form.SubjectName}
                    onChange={(e) => setForm({ ...form, SubjectName: e.target.value })} 
                />
            </AddSubjectField>
            <AddSubjectField>
                <AddSubjectLabel>Subject Code</AddSubjectLabel>
                <AddSubjectInput 
                    type="text"
                    name="SubjectCode"
                    value={form.SubjectCode}
                    onChange={(e) => setForm({ ...form, SubjectCode: e.target.value })}
                />
            </AddSubjectField>
            <AddSubjectField>
                <AddSubjectLabel>Description</AddSubjectLabel>
                <AddSubjectInput
                    type="text"
                    name="Description"
                    value={form.Description}
                    onChange={(e) => setForm({ ...form, Description: e.target.value })}
                />
            </AddSubjectField>
            <AddSubjectField>
                <AddSubjectLabel>Class</AddSubjectLabel>
                <AddSubjectInput
                    type="text"
                    name="Class"
                    value={form.Class}
                    onChange={(e) => setForm({ ...form, Class: e.target.value })}
                />
            </AddSubjectField>
            <AddSubjectField>
                <AddSubjectLabel>Section</AddSubjectLabel>
                <AddSubjectInput
                    type="text"
                    name="Section"
                    value={form.Section}
                    onChange={(e) => setForm({ ...form, Section: e.target.value })}
                />
            </AddSubjectField>
            <AddSubjectField>
                <AddSubjectLabel>Subject Type</AddSubjectLabel>
                <AddSubjectInput
                    type="text"
                    name="SubjectType"
                    value={form.SubjectType}
                    onChange={(e) => setForm({ ...form, SubjectType: e.target.value })}
                />
            </AddSubjectField>
            <AddSubjectField>
                <AddSubjectLabel>Subject Fee</AddSubjectLabel>
                <AddSubjectInput
                    type="text"
                    name="SubjectFee"
                    value={form.SubjectFee}
                    onChange={(e) => setForm({ ...form, SubjectFee: e.target.value })}  
                />
            </AddSubjectField>
            <AddSubjectButton type="submit">Add Subject</AddSubjectButton>
        </AddSubjectForm>
    </AddSubjectWrapper>


  )
}

export default AddSubject
