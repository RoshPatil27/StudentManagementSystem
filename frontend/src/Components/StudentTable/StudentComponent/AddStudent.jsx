import React from 'react'
import {
    AddStudentWrapper,
    AddStudentTitle,
    AddStudentForm,
    AddStudentField,
    AddStudentLabel,
    AddStudentInput,
    AddStudentButton,
    BackButton
} from "./AddStudent.styles";
import {createStudent} from "../../../API/StudentApi";

const AddStudent = () => {
    const [form, setForm] = React.useState({
        StudentId: "",
        FullName: "",
        RollNo: "",
        Class: "",
        Section: "",
        Gender: "",
        DOB: "",
        Email: "",
        ContactNo: "",
        Address: "",
        bloodGroup: "",
        emergencyName: "",
        emergencyContact: "",
        emergencyRelation: ""
    });

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                await createStudent(form);
                alert("Student added successfully!");
                setForm({
                    StudentId: "",
                    FullName: "",
                    RollNo: "",
                    Class: "",
                    Section: "",
                    Gender: "",
                    DOB: "",
                    Email: "",
                    ContactNo: "",
                    Address: "",
                    bloodGroup: "",
                    emergencyName: "",
                    emergencyContact: "",
                    emergencyRelation: ""
                });
            } catch (error) {
                console.log(error);
            }
        };


  return (
    <AddStudentWrapper>
        <BackButton onClick={() => window.history.back()}>Back</BackButton>
        <AddStudentTitle>Add New Student</AddStudentTitle>  
        <AddStudentForm onSubmit={handleSubmit}>
            <AddStudentField>
                <AddStudentLabel>Student ID</AddStudentLabel>
                <AddStudentInput name="StudentId" value={form.StudentId} onChange={(e) => setForm({...form, StudentId: e.target.value})} />
            </AddStudentField>
            <AddStudentField>
                <AddStudentLabel>Full Name</AddStudentLabel>
                <AddStudentInput name="FullName" value={form.FullName} onChange={(e) => setForm({...form, FullName: e.target.value})} />
            </AddStudentField>
            <AddStudentField>
                <AddStudentLabel>Roll No</AddStudentLabel>
                <AddStudentInput name="RollNo" value={form.RollNo} onChange={(e) => setForm({...form, RollNo: e.target.value})} />
            </AddStudentField>
            <AddStudentField>
                <AddStudentLabel>Class</AddStudentLabel>
                <AddStudentInput name="Class" value={form.Class} onChange={(e) => setForm({...form, Class: e.target.value})} />
            </AddStudentField>
            <AddStudentField>
                <AddStudentLabel>Section</AddStudentLabel>
                <AddStudentInput name="Section" value={form.Section} onChange={(e) => setForm({...form, Section: e.target.value})} />
            </AddStudentField>
            <AddStudentField>
                <AddStudentLabel>Gender</AddStudentLabel>
                <AddStudentInput name   ="Gender" value={form.Gender} onChange={(e) => setForm({...form, Gender: e.target.value})} />
            </AddStudentField>
            <AddStudentField>    
                <AddStudentLabel>DOB</AddStudentLabel>
                <AddStudentInput name="DOB" value={form.DOB} onChange={(e) => setForm({...form, DOB: e.target.value})} />
            </AddStudentField>
            <AddStudentField>
                <AddStudentLabel>Email</AddStudentLabel>
                <AddStudentInput name="Email" value={form.Email} onChange={(e) => setForm({...form, Email: e.target.value})} />
            </AddStudentField>
            <AddStudentField>
                <AddStudentLabel>Contact No</AddStudentLabel>
                <AddStudentInput name="ContactNo" value={form.ContactNo} onChange={(e) => setForm({...form, ContactNo: e.target.value})} />
            </AddStudentField>
            <AddStudentField>
                <AddStudentLabel>Address</AddStudentLabel>
                <AddStudentInput name="Address" value={form.Address} onChange={(e) => setForm({...form, Address: e.target.value})} />
            </AddStudentField>
            <AddStudentField>
                <AddStudentLabel>Blood Group</AddStudentLabel>
                <AddStudentInput name="bloodGroup" value={form.bloodGroup} onChange={(e) => setForm({...form, bloodGroup: e.target.value})} />
            </AddStudentField>
            <AddStudentField>
                <AddStudentLabel>Emergency Name</AddStudentLabel>
                <AddStudentInput name="emergencyName" value={form.emergencyName} onChange={(e) => setForm({...form, emergencyName: e.target.value})} />
            </AddStudentField>
            <AddStudentField>
                <AddStudentLabel>Emergency Contact</AddStudentLabel>
                <AddStudentInput name="emergencyContact" value={form.emergencyContact} onChange={(e) => setForm({...form, emergencyContact: e.target.value})} />
            </AddStudentField>
            <AddStudentField>
                <AddStudentLabel>Emergency Relation</AddStudentLabel>
                <AddStudentInput name="emergencyRelation" value={form.emergencyRelation} onChange={(e) => setForm({...form, emergencyRelation: e.target.value})} />
            </AddStudentField>
            <AddStudentButton type="submit">Add Student</AddStudentButton>
        </AddStudentForm>
    </AddStudentWrapper>
  )
}

export default AddStudent
