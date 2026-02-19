import styled from "styled-components";

/* Layout */
export const SubjectTableWrapper = styled.div`
  padding: 30px;
  background: #f3f4f6;
  min-height: 100vh;
`;

export const HeadingsTabs = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 20px;
`;

export const AddSubjectsButton = styled.button`
  background: #e63946;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;

/* Table */
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
`;

export const TableHeader = styled.thead`
  background: #0b1f3a;
`;

export const TableHeaderCell = styled.th`
  padding: 14px;
  color: white;
  text-align: left;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e5e7eb;
`;

export const TableCell = styled.td`
  padding: 14px;
  color: #374151;
`;

export const ActionCell = styled(TableCell)`
  display: flex;
  gap: 10px;
`;

/* Buttons */
export const ViewButton = styled.button`
  background: #0b1f3a;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
`;

export const EditButton = styled.button`
  background: #ff4d6d;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background: #6b7280;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
`;

export const TabsMenu = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const TabsCards = styled.div`
    display: flex;
    gap: 15px;
`;

export const TabCard = styled.div`
    padding: 5px 30px;
    border-radius: 8px;
    background: #f3f4f6;
    border-bottom: ${(props) => (props.active ? "4px solid #0b1f3a" : "none")};
    color: #333;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s, color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    &:hover {
        background: ${(props) => (props.active ? "#0b1f3a" : "#d5d5d5")};
        color: ${(props) => (props.active ? "white" : "#333")};
    }
`;

export const Title = styled.h2`
  color: #0b1f3a;
  margin-bottom: 20px;
`;


