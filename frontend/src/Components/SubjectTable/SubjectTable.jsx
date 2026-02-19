import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SubjectTableWrapper,
  HeadingsTabs,
  AddSubjectsButton,
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
  TabCard,
  Title,
} from "./SubjectTable.styles";

import {
  getAllSubjects,
  getSubjectById,
  deleteSubject,
} from "../../API/SubjectApi";

import ViewSubject from "./SubjectComponents/ViewSubject";
import UpdateSubject from "./SubjectComponents/UpdateSubject";
import DeleteModel from "../DeleteModel/DeleteModel";

const SubjectTable = () => {
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState([]);
  const [viewSubject, setViewSubject] = useState(null);
  const [editSubject, setEditSubject] = useState(null);
  const [subjectToDelete, setSubjectToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch all subjects
  const fetchSubjects = async () => {
    try {
      const data = await getAllSubjects();
      setSubjects(data || []);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

    React.useEffect(() => {
        fetchSubjects();
    }, []);

  // View subject
const handleView = async (id) => {
  console.log("Fetching subject with id:", id);
  try {
    const data = await getSubjectById(id);
    setViewSubject(Array.isArray(data) ? data[0] : data);
  } catch (error) {
    console.error("Error fetching subject:", error);
  }
};



  // Edit subject
  const handleEdit =async (id) => {
    try {
      const data = await getSubjectById(id);
      setEditSubject(Array.isArray(data) ? data[0] : data);
    } catch (error) {
      console.error("Error fetching subject:", error);
    }
  };

  // Navigate to add subject
  const handleAddNewSubject = () => {
    navigate("/add-subject");
  };

  // Open delete modal
  const openDeleteModal = (id) => {
    console.log("Deleting subject with id:", id);
    setSubjectToDelete(id);
    setShowModal(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    try {
      await deleteSubject(subjectToDelete);
      fetchSubjects();
      setShowModal(false);
      setSubjectToDelete(null);
    } catch (error) {
      console.error("Error deleting subject:", error);
    }
  };

  return (
    <>
      <SubjectTableWrapper>
        {/* Top Navigation */}
        <TabsMenu>
          <Title>Subjects List</Title>
          <TabsCards>
            <TabCard onClick={() => navigate("/")}  >Dashboard</TabCard>
            <TabCard onClick={() => navigate("/students")}>Students</TabCard>
            <TabCard active onClick={() => navigate("/subjects")}>Subjects</TabCard>
            <TabCard onClick={() => navigate("/results")}>Results</TabCard>
            <TabCard onClick={() => navigate("/exams")}>Exams</TabCard>
          </TabsCards>
        </TabsMenu>

        {/* Add Button */}
        <HeadingsTabs>
          <AddSubjectsButton onClick={handleAddNewSubject}>
            + Add New Subject
          </AddSubjectsButton>
        </HeadingsTabs>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableHeaderCell>Subject Id</TableHeaderCell>
            <TableHeaderCell>Subject Name</TableHeaderCell>
            <TableHeaderCell>Subject Code</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableHeader>

          <TableBody>
            {subjects.length > 0 ? (
              subjects.map((subject) => (
                <TableRow key={subject.SubjectId}>
                  <TableCell>{subject.SubjectId}</TableCell>
                  <TableCell>{subject.SubjectName}</TableCell>
                  <TableCell>{subject.SubjectCode}</TableCell>
                  <ActionCell>
                    <ViewButton onClick={() => handleView(subject.SubjectId || subject.id)}>
                      View
                    </ViewButton>
                    <EditButton onClick={() => handleEdit(subject.SubjectId || subject.id)}>
                      Edit
                    </EditButton>
 <DeleteButton onClick={() => openDeleteModal(subject.SubjectId
)}>
  Delete 
</DeleteButton>
                  </ActionCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="4" style={{ textAlign: "center" }}>
                  No subjects found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </SubjectTableWrapper>

      {/* View Modal */}
      {viewSubject && (
        <ViewSubject
          subject={viewSubject}
          onClose={() => setViewSubject(null)}
        />
      )}

      {/* Edit Modal */}
      {editSubject && (
        <UpdateSubject
          subject={editSubject}
          onClose={() => setEditSubject(null)}
          onUpdated={fetchSubjects}
        />
      )}

      {/* Delete Modal */}
      {showModal && (
        <DeleteModel
            isOpen={showModal}
            onClose ={() => setShowModal(false)}
          onConfirm={confirmDelete}
          itemName="Subject Record"
        />
      )}
    </>
  );
};

export default SubjectTable;
