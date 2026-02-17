import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/students';

export const createStudent = async (studentData) => {
    try {
        const response = await axios.post(`${API_URL}/create`, studentData);
        console.log('Student created successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating student:', error);
        throw error;
    }
};

export const getAllStudents = async () => {
    try {
        const response = await axios.get(`${API_URL}/getall`);
        return response.data;
    } catch (error) {
        console.error('Error fetching students:', error);
        throw error;
    }
};


export const getStudentById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/get/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching student with id ${id}:`, error);
        throw error;
    }
};


export const updateStudent = async (id, studentData) => {
    try {
        const response = await axios.put(`${API_URL}/update/${id}`, studentData);
        return response.data;
    } catch (error) {
        console.error(`Error updating student with id ${id}:`, error);
        throw error;
    }
};


export const deleteStudent = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(`Error deleting student with id ${id}:`, error);
        throw error;
    }
};


export const searchStudentById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/search/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(`Error searching student with id ${id}:`, error);
        throw error;
    }
};


export const searchStudentByName = async (name) => {
    try {
        const response = await axios.get(`${API_URL}/search/${name}`);
        return response.data;
    }
    catch (error) {
        console.error(`Error searching student with name ${name}:`, error);
        throw error;
    }
};
