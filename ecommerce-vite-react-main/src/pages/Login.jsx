import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
  };

  return (
    <LoginWrapper>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("/src/assets/login-background.jpg"); // Add background image
  background-size: cover;
  background-position: center;

  .login-container {
    background: rgba(255, 255, 255, 0.77);
    padding: 2rem;
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;

    h1 {
      font-size: 2rem;
      color: hsl(var(--black));
      margin-bottom: 1.5rem;
    }

    .form-group {
      margin-bottom: 1rem;
      text-align: left;

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        color: hsl(var(--dark-grayish-blue));
      }

      input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid hsl(var(--divider));
        border-radius: 0.5rem;
        font-size: 1rem;

        &:focus {
          outline: none;
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
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.9;
      }
    }

    p {
      margin-top: 1rem;
      font-size: 1rem;
      color: hsl(var(--dark-grayish-blue));

      a {
        color: hsl(var(--orange));
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default Login;