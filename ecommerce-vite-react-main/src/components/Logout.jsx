import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logoutUser } = useGlobalContext(); // Access logout function from context
  const navigate = useNavigate(); // For navigation

  const handleLogout = () => {
    logoutUser(); // Call the logout function
    navigate("/login"); // Redirect to the login page
  };

  return (
    <LogoutWrapper>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </LogoutWrapper>
  );
};

// Styled Components for Logout
const LogoutWrapper = styled.div`
  .logout-btn {
    background-color: hsl(var(--orange));
    color: hsl(var(--white));
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: hsl(var(--orange) / 0.9);
    }
  }
`;

export default Logout;