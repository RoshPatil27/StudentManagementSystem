import React from "react";
import { Title } from "../Dashboard/Dashboard.styles";
import {
  StudentTableWrapper,
  HeadingsTabs,
  AddStudentButton,
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  ActionCell,
  ViewButton,
  EditButton,
  DeleteButton,
  TabsMenu,
  TabsCards,
  TabCard
} from "./StudentTable.styles";

import { getAllStudents, getStudentById, deleteStudent } from "../../API/StudentApi";
import ViewStudent from "./StudentComponent/ViewStudent";
import UpdateStudent from "./StudentComponent/UpdateStudent";
import DeleteModal from "../DeleteModel/DeleteModel";

const StudentTable = () => {
  const [students, setStudents] = React.useState([]);
  const [viewStudent, setViewStudent] = React.useState(null);
  const [editStudent, setEditStudent] = React.useState(null);

  // 🔹 renamed state (no conflict with API function)
  const [studentToDelete, setStudentToDelete] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  const fetchStudents = async () => {
    const data = await getAllStudents();
    setStudents(data);
  };

  React.useEffect(() => {
    fetchStudents();
  }, []);

  const handleView = async (id) => {
    const data = await getStudentById(id);
    setViewStudent(Array.isArray(data) ? data[0] : data);
  };

  const handleEdit = async (id) => {
    const data = await getStudentById(id);
    setEditStudent(Array.isArray(data) ? data[0] : data);
  };

  const handleAddNewStudent = () => {
    window.location.href = "/add-student";
  };

  // 🔹 Open modal
  const openDeleteModal = (id) => {
    setStudentToDelete(id);
    setShowModal(true);
  };

  // 🔹 Confirm delete
  const confirmDelete = async () => {
    try {
      await deleteStudent(studentToDelete); // API function
      alert("Student deleted successfully!");
      fetchStudents();
      setShowModal(false);
      setStudentToDelete(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StudentTableWrapper>
        <TabsMenu>
          <Title>Students List</Title>
          <TabsCards>
            <TabCard>Dashboard</TabCard>
            <TabCard active>Students</TabCard>
            <TabCard>Subjects</TabCard>
            <TabCard>Results</TabCard>
            <TabCard>Exams</TabCard>
          </TabsCards>
        </TabsMenu>

        <HeadingsTabs>
          <AddStudentButton onClick={handleAddNewStudent}>
            + Add Student
          </AddStudentButton>
        </HeadingsTabs>

        <Table>
          <TableHeader>
            <tr>
              <TableHeaderCell>Id</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Roll No</TableHeaderCell>
              <TableHeaderCell>Class</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </tr>
          </TableHeader>

          <TableBody>
            {students.map((student) => (
              <TableRow key={student.StudentId}>
                <TableCell>{student.StudentId}</TableCell>
                <TableCell>{student.FullName}</TableCell>
                <TableCell>{student.RollNo}</TableCell>
                <TableCell>{student.Class}</TableCell>
                <ActionCell>
                  <ViewButton onClick={() => handleView(student.StudentId)}>View</ViewButton>
                  <EditButton onClick={() => handleEdit(student.StudentId)}>Edit</EditButton>
                  <DeleteButton onClick={() => openDeleteModal(student.StudentId)}>
                    Delete
                  </DeleteButton>
                </ActionCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StudentTableWrapper>

      {viewStudent && (
        <ViewStudent student={viewStudent} onClose={() => setViewStudent(null)} />
      )}

      {editStudent && (
        <UpdateStudent
          student={editStudent}
          onClose={() => setEditStudent(null)}
          onUpdated={fetchStudents}
        />
      )}

      <DeleteModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmDelete}
        itemName="Student Record"
      />
    </>
  );
};

export default StudentTable;
