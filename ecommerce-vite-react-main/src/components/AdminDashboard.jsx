import React, { useState } from "react";
import styled from "styled-components";

// Styled Components (No changes here)
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.aside`
  width: 16rem;
  background-color: #1f2937; /* bg-gray-900 */
  color: white;
  padding: 1.25rem;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const SidebarTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const SidebarNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    width: 100%;
    text-align: left;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem 0;

    &:hover {
      color: #60a5fa; /* hover:text-blue-400 */
    }

    &.active {
      color: #60a5fa; /* text-blue-400 */
    }
  }

  ul ul {
    margin-left: 1rem;
    margin-top: 0.5rem;

    button {
      color: #d1d5db; /* text-gray-300 */
    }
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 1.5rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 1.875rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  div {
    display: flex;
    gap: 1rem;

    button {
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      cursor: pointer;

      &:first-child {
        background-color: #d1d5db; /* bg-gray-300 */
      }

      &:last-child {
        background-color: #ef4444; /* bg-red-500 */
        color: white;
      }
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StatCard = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 2.25rem;
  }

  div {
    h2 {
      font-size: 1.125rem;
      font-weight: 600;
    }

    p {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`;

const UserManagementContainer = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

const UserTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #e5e7eb; /* border-gray-200 */
  }

  th {
    background-color: #f3f4f6; /* bg-gray-100 */
    font-weight: 600;
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
    margin-right: 0.5rem;

    &:first-child {
      background-color: #60a5fa; /* bg-blue-400 */
      color: white;
    }

    &:last-child {
      background-color: #ef4444; /* bg-red-500 */
      color: white;
    }
  }
`;

const AdminDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [openDropdown, setOpenDropdown] = useState(null);

  const dashboardStats = [
    { title: "Total Revenue", count: 350, icon: "💳" },
    { title: "Active Users", count: 45, icon: "👥" },
    { title: "Total Transactions", count: 120, icon: "📈" },
    { title: "System Uptime", count: 28, icon: "⚙" },
  ];

  const menuItems = [
    { title: "Dashboard" },
    { title: "Users Management" },
    { title: "Feedback & Support", subItems: ["Feedback", "Support"] },
    { title: "Report" },
    { title: "Settings" },
  ];

  const users = [
    { name: "John Doe", email: "john@example.com", verified: true, subscribed: true, address: "123 Main St" },
    { name: "Jane Smith", email: "jane@example.com", verified: false, subscribed: true, address: "456 Elm St" },
    // Add more users as needed
  ];

  // Function to handle verification
  const handleVerify = (email) => {
    console.log(`Verify user with email: ${email}`);
    // Add your verification logic here
  };

  // Function to handle rejection
  const handleReject = (email) => {
    console.log(`Reject user with email: ${email}`);
    // Add your rejection logic here
  };

  return (
    <Container>
      {/* Sidebar */}
      <Sidebar>
        <SidebarTitle>E-mart</SidebarTitle>
        <SidebarNav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  className={selectedMenu === item.title ? "active" : ""}
                  onClick={() => {
                    if (item.subItems) {
                      setOpenDropdown(openDropdown === index ? null : index);
                    } else {
                      setSelectedMenu(item.title);
                      setOpenDropdown(null);
                    }
                  }}
                >
                  {item.title}
                </button>
                {item.subItems && openDropdown === index && (
                  <ul>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <button onClick={() => setSelectedMenu(subItem)}>{subItem}</button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </SidebarNav>
      </Sidebar>

      {/* Main Content */}
      <MainContent>
        {/* Header */}
        <Header>
          <h1>{selectedMenu}</h1>
          <div>
            <button>🔍 Search Reports</button>
            <button>Logout</button>
          </div>
        </Header>

        {/* Stats Cards */}
        {selectedMenu === "Dashboard" && (
          <StatsGrid>
            {dashboardStats.map((stat, index) => (
              <StatCard key={index}>
                <span>{stat.icon}</span>
                <div>
                  <h2>{stat.title}</h2>
                  <p>{stat.count}</p>
                </div>
              </StatCard>
            ))}
          </StatsGrid>
        )}

        {/* User Management */}
        {selectedMenu === "Users Management" && (
          <UserManagementContainer>
            <h2>User Management</h2>
            <UserTable>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Verified</th>
                  <th>Subscribed</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.verified ? "Yes" : "No"}</td>
                    <td>{user.subscribed ? "Yes" : "No"}</td>
                    <td>
                      <button onClick={() => handleVerify(user.email)}>Verify</button>
                      <button onClick={() => handleReject(user.email)}>Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </UserTable>
          </UserManagementContainer>
        )}
      </MainContent>
    </Container>
  );
};

export default AdminDashboard;