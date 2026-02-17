import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import StudentTable from './Components/StudentTable/StudentTable';
import AddStudent from './Components/StudentTable/StudentComponent/AddStudent';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<StudentTable />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </Router>

  )
}

export default App



