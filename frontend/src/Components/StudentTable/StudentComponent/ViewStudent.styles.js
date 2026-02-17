import styled from "styled-components";



export const ViewStudentTitle = styled.h2`
  color: #0b1f3a;
    margin-bottom: 30px;
`;
export const ViewStudentContent = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const ViewStudentField = styled.div`
    display: flex;
    gap: 10px;
`;

export const ViewStudentLabel = styled.span`
    font-weight: 600;
    color: #374151;
`;

export const ViewStudentValue = styled.span`
    color: #6b7280;
`;
export const ModulePOPUP = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
`;

export const ModelOverlay = styled.div`
  position: relative; /* important */
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  width: 80%;
  max-width: 400px;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 1001; /* above overlay */
`;

// export const ViewStudentWrapper = styled.div`

// `;

export const ModuleCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #e63946;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;
