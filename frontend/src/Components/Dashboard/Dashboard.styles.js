import styled from "styled-components";

/* -------------------- STYLES -------------------- */

export const Wrapper = styled.div`
  padding: 30px;
  background: #f3f4f6;
  min-height: 100vh;
`;

export const Header = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  color: #0b1f3a;
  margin-bottom: 20px;
`;

export const StatsRow = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const StatCard = styled.div`
  flex: 1;
  min-width: 180px;
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, #0b1f3a, #e63946, #ff4d6d);
  color: white;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
`;

export const StatTitle = styled.p`
  font-size: 14px;
  opacity: 0.9;
`;

export const StatValue = styled.h3`
  font-size: 26px;
  margin-top: 8px;
`;

export const Body = styled.div`
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr;
`;

export const ChartCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
`;

export const ChartTitle = styled.h3`
  color: #0b1f3a;
  margin-bottom: 15px;
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

