import React, { useEffect, useState } from "react";
import {
  ExamListSheetWrapper,
  TabsMenu,
  TabsCards,
  TabCard,
  Title,
  HeadingsTabs,
  Heading,
  AddButton,
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  ActionCell,
  ViewButton,
  EditButton,
  DeleteButton,
  AttendButton
} from "./ExamListSheet.styles";

import {
  getAllExamSheets,
  deleteExamSheet,
  getExamById 
} from "../../API/ExamSheetApi";

import ViewExamSheet from "./ExamSheetComponents/ViewExamSheet";
import UpdateExamSheet from "./ExamSheetComponents/UpdateExamSheet";
import DeleteModel from "../DeleteModel/DeleteModel";

const ExamListSheet = () => {
  const [examSheets, setExamSheets] = useState([]);
  const [viewExam, setViewExam] = useState(null);
  const [editExam, setEditExam] = useState(null);

  // 🔹 renamed state (no conflict with API function)
  const [examToDelete, setExamToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch all exam sheets
useEffect(() => {
    const fetchExamSheets = async () => {
      try {
        const data = await getAllExamSheets();
        setExamSheets(data);
      } catch (error) {
        console.error("Error fetching exam sheets:", error);
      }
    };



  fetchExamSheets();
}, []);


    const fetchExamSheets = async () => {
      try {
        const data = await getAllExamSheets();
        setExamSheets(data);
      } catch (error) {
        console.error("Error fetching exam sheets:", error);
      }
    };




  // View
const handleView = async (id) => {
  try {
    const data = await getExamById(id);
    setViewExam(data);
  } catch (error) {
    console.error(error);
  }
};

  // Edit
const handleEdit = async (id) => {
  try {
    const data = await getExamById(id);
    setEditExam(data);
  } catch (error) {
    console.error(error);
  }
};
  // Delete
const openDeleteModal = (id) => {
    setExamToDelete(id);
    setShowModal(true);
  };

  // 🔹 Confirm delete
  const confirmDelete = async () => {
    try {
      await deleteExamSheet(examToDelete); // API function
      alert("Student deleted successfully!");
      fetchExamSheets();
      setShowModal(false);
      setExamToDelete(null);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <ExamListSheetWrapper>
        {/* Navigation */}
        <TabsMenu>
          <Title>Exam Sheets</Title>
          <TabsCards>
            <TabCard onClick={() => (window.location.href = "/")}>
              Dashboard
            </TabCard>
            <TabCard onClick={() => (window.location.href = "/students")}>
              Students
            </TabCard>
            <TabCard onClick={() => (window.location.href = "/subjects")}>
              Subjects
            </TabCard>
            <TabCard onClick={() => (window.location.href = "/results")}>
              Results
            </TabCard>
            <TabCard active onClick={() => (window.location.href = "/exams")}>
              Exams
            </TabCard>
          </TabsCards>
        </TabsMenu>

        {/* Header */}
        <HeadingsTabs>
          <Heading>Exam Sheets</Heading>
          <AddButton onClick={() => (window.location.href = "/add-exam")}>
            Add New Exam Sheet
          </AddButton>
        </HeadingsTabs>

        {/* Table */}
        <Table>
          <TableHead>
            <tr>
              <TableHeaderCell>Subject ID</TableHeaderCell>
              <TableHeaderCell>Exam Date</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
              <TableHeaderCell>Attend Exam</TableHeaderCell>
            </tr>
          </TableHead>

          <TableBody>
            {examSheets.length > 0 ? (
              examSheets.map((exam) => (
                <TableRow key={exam._id}>
                  <TableCell>{exam.subject_id}</TableCell>
                  <TableCell>{exam.exam_date}</TableCell>
                  <TableCell>
                    <ActionCell>
                      <ViewButton onClick={() => handleView(exam._id)}>
                        View
                      </ViewButton>
                      <EditButton onClick={() => handleEdit(exam._id)}>
                        Edit
                      </EditButton>
                      <DeleteButton
                        onClick={() => openDeleteModal(exam._id)}
                      >
                        Delete
                      </DeleteButton>
                    </ActionCell>
                  </TableCell>
                  <TableCell>
                    <AttendButton onClick={() => (window.location.href = `/attend-exam/${exam.subject_id}`)}>
                      Attend Exam
                    </AttendButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="3" style={{ textAlign: "center" }}>
                  No exam sheets found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ExamListSheetWrapper>

      {/* View Modal */}
      {viewExam && (
        <ViewExamSheet exam={viewExam} onClose={() => setViewExam(null)} />
      )}
      {editExam && (
        <UpdateExamSheet
          key={editExam?._id}
          examsheet={editExam}
          onClose={() => setEditExam(null)}
          onUpdated={() => fetchExamSheets()}
        />
      )}
        <DeleteModel
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={confirmDelete}
          itemName="exam sheet record"
        />
      
    </>
  );
};

export default ExamListSheet;
