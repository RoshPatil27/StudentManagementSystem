import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/examsheet";

export const createExamSheet = async (examSheetData) => {
    try {
        const response = await axios.post(`${API_URL}/exams`, examSheetData);
        console.log("Exam sheet created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error creating exam sheet:", error);
        throw error;
    }
};

export const getExamById = async (id) => {
    try {

  const response = await axios.get(`${API_URL}/exams/${id}`);
  return response.data;

    } catch (error) {
        console.error("Error retrieving exam sheet:", error);
        throw error;
    }
};

export const getExamSheetByStudentId = async (studentId) => {
    try {
        const response = await axios.get(`${API_URL}/exams/student/${studentId}`);
        console.log("Exam sheet retrieved successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error retrieving exam sheet:", error);
        throw error;
    }
};

export const getExamSubjectById = async (subjectId) => {
  try {
    const response = await axios.get(
      `${API_URL}/exams/subject/${subjectId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error retrieving exam sheet:", error);
    throw error;
  }
};


export const attendExamSheet = async (examData) => {
    try {
        const response = await axios.post(
            `${API_URL}/exams/attend`,
            examData
        );
        return response.data;
    } catch (error) {
        console.error("Error attending exam sheet:", error);
        throw error;
    }
};


export const correctExamSheet = async (correctionData) => {
    try {
        const response = await axios.put(`${API_URL}/exams/correct`, correctionData);
        console.log("Exam sheet corrected successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error correcting exam sheet:", error);
        throw error;
    };
};

export const updateExamSheet = async (id, examSheetData) => {
    try {
        const response = await axios.put(`${API_URL}/exams/${id}`, examSheetData);
        console.log("Exam sheet updated successfully:", response.data);
        return response.data;
    }
    catch (error) {
        console.error("Error updating exam sheet:", error);
        throw error;
    }
};

export const deleteExamSheet = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${id}`);
        console.log("Exam sheet deleted successfully:", response.data);
        return response.data;
    }
    catch (error) {
        console.error("Error deleting exam sheet:", error);
        throw error;
    }
};

export const getAllExamSheets = async () => {
    try {
        const response = await axios.get(`${API_URL}/exams`);
        console.log("All exam sheets retrieved successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error retrieving all exam sheets:", error);
        throw error;
    }
};