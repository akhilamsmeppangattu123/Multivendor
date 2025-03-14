import React from "react";
import styled from "styled-components";

const Report = () => {
  return (
    <ReportContainer>
      <h1>Reports</h1>

      {/* Project Section */}
      <Section>
        <h2>Project</h2>
        <ProjectDetails>
          <p>App_extra</p>
          <p>Team Member</p>
          <ul>
            <li>Jhon</li>
            <li>Smith</li>
          </ul>
          <Button>Apply Filter</Button>
        </ProjectDetails>
      </Section>

      {/* Date Section */}
      <Section>
        <h2>Start Date</h2>
        <DateDetails>
          <p>Fri, 12 July, 2019</p>
          <p>End Date</p>
          <p>Tues, 16 July, 2019</p>
        </DateDetails>
      </Section>

      {/* App_extra Section */}
      <Section>
        <h2>App_extra</h2>
        <p>Team Helsinki</p>

        {/* Table */}
        <Table>
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Time Worked</th>
              <th>Average Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jhon</td>
              <td>07:20:00</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>Smith</td>
              <td>06:10:00</td>
              <td>62%</td>
            </tr>
            <tr>
              <td>Mike</td>
              <td>03:12:00</td>
              <td>48%</td>
            </tr>
            <tr>
              <td>Doe</td>
              <td>02:28:00</td>
              <td>38%</td>
            </tr>
          </tbody>
        </Table>

        <DateLabel>12 July, 2019</DateLabel>
      </Section>

      {/* Show Graph Section */}
      <Section>
        <h2>Show Graph</h2>

        {/* Table */}
        <Table>
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Time Worked</th>
              <th>Average Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jhon</td>
              <td>07:20:00</td>
              <td>37%</td>
            </tr>
          </tbody>
        </Table>

        <DateLabel>16 July, 2019</DateLabel>
      </Section>
    </ReportContainer>
  );
};

export default Report;

// Styled Components
const ReportContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 0.5rem;
  }
`;

const ProjectDetails = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 1rem;
      color: #555;
      margin-bottom: 0.5rem;
    }
  }
`;

const DateDetails = styled.div`
  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 0.5rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;

  th,
  td {
    padding: 1rem;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f8f9fa;
    font-weight: bold;
  }

  td {
    color: #333;
  }
`;

const DateLabel = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.5rem;
`;