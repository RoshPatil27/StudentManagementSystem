import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { RadarChart } from "@mui/x-charts/RadarChart";
import {
  StatCard,
  StatTitle,
  StatValue,
  StatsRow,
  Header,
  Title,
  Body,
  ChartCard,
  ChartTitle,
  Wrapper,
  TabsMenu,
  TabsCards,
  TabCard,
} from "./Dashboard.styles";

/* -------------------- DATA -------------------- */

const slices = [
  { id: 1, title: "Total Students", value: 320 },
  { id: 2, title: "Active Courses", value: 12 },
  { id: 3, title: "Results Published", value: 8 },
];

const desktopOS = [
  { label: "Windows", value: 55 },
  { label: "Mac", value: 25 },
  { label: "Linux", value: 20 },
];

const size = { width: 320, height: 260 };

function valueFormatter(v) {
  if (v === null) {
    return "NaN";
  }
  return `${v.toLocaleString()}t CO2eq/pers`;
}

/* -------------------- COMPONENT -------------------- */

const Dashboard = () => {
  return (
    <Wrapper>
      <Header>
        <TabsMenu>
          <Title>Student Performance Dashboard</Title>
          <TabsCards>
            <TabCard active>Dashboard</TabCard>
            <TabCard>Students</TabCard>
            <TabCard>Subjects</TabCard>
            <TabCard>Results</TabCard>
            <TabCard>Exams</TabCard>
          </TabsCards>
        </TabsMenu>
        <StatsRow>
          {slices.map((slice) => (
            <StatCard key={slice.id}>
              <StatTitle>{slice.title}</StatTitle>
              <StatValue>{slice.value}</StatValue>
            </StatCard>
          ))}
        </StatsRow>
      </Header>

      <Body>
        {/* LINE CHART */}
        <ChartCard>
          <ChartTitle>Performance Trend</ChartTitle>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
            series={[
              { data: [2, 5.5, 2, 8.5, 1.5, 5] },
              { data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5] },
              { data: [7, 8, 5, 4, null, null, 2, 5.5, 1] },
            ]}
            height={260}
            width={450}
          />
        </ChartCard>

        {/* PIE CHART */}
        <ChartCard>
          <ChartTitle>Student Device Usage</ChartTitle>
          <PieChart
            series={[
              {
                data: desktopOS,
                arcLabel: (item) => `${item.value}%`,
                arcLabelMinAngle: 35,
                arcLabelRadius: "60%",
                valueFormatter,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fontWeight: "bold",
                fill: "#0b1f3a",
              },
            }}
            {...size}
          />
        </ChartCard>

        {/* BAR CHART */}
        <ChartCard>
          <ChartTitle>Marks Comparison</ChartTitle>
          <BarChart
            xAxis={[{ data: ["Group A", "Group B", "Group C"] }]}
            series={[
              { data: [4, 3, 5] },
              { data: [1, 6, 3] },
              { data: [2, 5, 6] },
            ]}
            height={260}
            width={450}
          />
        </ChartCard>
        <ChartCard>
          <ChartTitle>Attendance Rate</ChartTitle>

          <RadarChart
            height={300}
            series={[
              {
                label: "USA",
                data: [6.65, 2.76, 5.15, 0.19, 0.07, 0.12],
                valueFormatter,
              },
              {
                label: "Australia",
                data: [5.52, 5.5, 3.19, 0.51, 0.15, 0.11],
                valueFormatter,
              },
              {
                label: "United Kingdom",
                data: [2.26, 0.29, 2.03, 0.05, 0.04, 0.06],
                valueFormatter,
              },
            ]}
            radar={{
              metrics: [
                "Oil",
                "Coal",
                "Gas",
                "Flaring",
                "Other\nindustry",
                "Cement",
              ],
            }}
          />
        </ChartCard>
      </Body>
    </Wrapper>
  );
};

export default Dashboard;
