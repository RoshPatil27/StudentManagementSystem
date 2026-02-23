import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import StudentTable from './Components/StudentTable/StudentTable';
import AddStudent from './Components/StudentTable/StudentComponent/AddStudent';
import SubjectTable from './Components/SubjectTable/SubjectTable';
import AddSubject from './Components/SubjectTable/SubjectComponents/AddSubject';
import ExamListSheet from './Components/ExamSheets/ExamListSheet';
import AddExamSheet from './Components/ExamSheets/ExamSheetComponents/AddExamSheet';
import AttendExam from './Components/ExtraComponents/AttendExam';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<StudentTable />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/subjects" element={<SubjectTable />} />
        <Route path="/add-subject" element={<AddSubject />} />
        <Route path="/exams" element={<ExamListSheet />} />
        <Route path='/add-exam' element={<AddExamSheet />} />
        <Route path="/attend-exam/:subjectId" element={<AttendExam />} />
      </Routes>
    </Router>

  )
}

export default App



