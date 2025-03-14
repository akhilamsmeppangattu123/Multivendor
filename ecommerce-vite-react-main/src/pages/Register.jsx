import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationType, setRegistrationType] = useState("user"); // Default to "user"
  const [businessName, setBusinessName] = useState(""); // Additional field for vendors
  const [error, setError] = useState(""); // For displaying validation errors

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (registrationType === "vendor" && !businessName) {
      setError("Please enter your business name.");
      return;
    }

    // Clear errors if validation passes
    setError("");

    // Registration logic
    console.log("Register submitted:", {
      email,
      password,
      confirmPassword,
      registrationType,
      businessName,
    });

    // Redirect or show success message
  };

  return (
    <PageWrapper>
      <RegisterWrapper>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          {/* Registration Type Selector */}
          <div className="form-group">
            <label>Register As</label>
            <select
              value={registrationType}
              onChange={(e) => setRegistrationType(e.target.value)}
            >
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>

          {/* Common Fields */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Additional Fields for Vendor Registration */}
          {registrationType === "vendor" && (
            <div className="form-group">
              <label>Business Name</label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Enter your business name"
                required
              />
            </div>
          )}

          {/* Display Error Message */}
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </RegisterWrapper>
    </PageWrapper>
  );
};

// Styled Components
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/src/assets/login-background.jpg") no-repeat center center fixed;
  background-size: cover;
`;

const RegisterWrapper = styled.div`
  max-width: 400px;
  margin: 2rem;
  padding: 2rem;
  border: 1px solid hsl(var(--divider));
  border-radius: 1rem;
  background: hsla(0, 0%, 100%, 0.9);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  .form-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    input,
    select {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid hsl(var(--divider));
      border-radius: 0.5rem;
      font-size: 1rem;
      outline: none;

      &:focus {
        border-color: hsl(var(--orange));
      }
    }
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background-color: hsl(var(--orange));
    color: hsl(var(--white));
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;

    &:hover {
      opacity: 0.9;
    }
  }

  p {
    text-align: center;
    margin-top: 1.5rem;
    font-size: 1rem;

    a {
      color: hsl(var(--orange));
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export default Register;