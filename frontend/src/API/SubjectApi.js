import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/subjects";

export const createSubject = async (subjectData) => {
  try {
    const response = await axios.post(`${API_URL}/create`, subjectData);
    console.log("Subject created successfully:", response.data);
    return response.data;
    } catch (error) {
    console.error("Error creating subject:", error);
    throw error;
  }
};

export const getAllSubjects = async () => {
    try {
        const response = await axios.get(`${API_URL}/getall`);
        console.log("Subjects fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching subjects:', error);
        throw error;
    }
};

export const getSubjectById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/get/${id}`);
        console.log(`Subject with id ${id} fetched successfully:`, response.data);
        return response.data;
    }
    catch (error) {
        console.error(`Error fetching subject with id ${id}:`, error);
        throw error;
    }
};

export const updateSubject = async (id, subjectData) => {
    try {
        const response = await axios.put(`${API_URL}/update/${id}`, subjectData);
        return response.data;
    } catch (error) {
        console.error(`Error updating subject with id ${id}:`, error);
        throw error;
    }
};

export const deleteSubject = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting subject with id ${id}:`, error);
        throw error;
    }
};

export const searchSubjectById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/search/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error searching subject with id ${id}:`, error);
        throw error;
    }
};

export const searchSubjectByName = async (name) => {
    try {
        const response = await axios.get(`${API_URL}/search/${name}`);
        return response.data;
    } catch (error) {
        console.error(`Error searching subject with name ${name}:`, error);
        throw error;
    }
};

