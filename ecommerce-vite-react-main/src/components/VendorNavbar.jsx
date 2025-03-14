import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { Logo } from "../icons";
import { avatar } from "../assets/imagedata";

// Styled Components
const NavigatorWrapper = styled.header`
  position: relative;
  padding: 2.4rem;
  border-bottom: 1px solid hsl(var(--divider));

  img,
  svg {
    display: block;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    .menu-btn {
      display: block;
      background: none;
      border: none;
      cursor: pointer;

      @media only screen and (min-width: 768px) {
        display: none;
      }
    }

    .logo {
      margin-right: 3.2rem;
    }

    .search-bar {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      input {
        padding: 0.5rem;
        border: 1px solid hsl(var(--divider));
        border-radius: 0.5rem;
        font-size: 1rem;
        width: 200px;

        &:focus {
          outline: none;
          border-color: hsl(var(--orange));
        }
      }

      button {
        padding: 0.5rem 1rem;
        background-color: hsl(var(--orange));
        color: hsl(var(--white));
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 1rem;

        &:hover {
          opacity: 0.9;
        }
      }
    }

    .nav-links {
      display: none;

      @media only screen and (min-width: 768px) {
        display: flex;
        gap: 3.2rem;
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          a {
            text-decoration: none;
            font-size: 1.5rem;
            text-transform: capitalize;
            color: hsl(var(--dark-grayish-blue));
            transition: color 0.3s ease;

            &:hover {
              color: hsl(var(--black));
            }
          }
        }
      }
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    .cart-btn {
      position: relative;
      background: none;
      border: none;
      cursor: pointer;

      svg,
      path {
        fill: hsl(var(--black));
      }

      span {
        user-select: none;
        position: absolute;
        top: -1rem;
        right: -1rem;
        background-color: hsl(var(--orange));
        font-weight: 700;
        color: hsl(var(--white));
        border-radius: 50%;
        padding: 0.3rem 0.8rem;
        font-size: 1.1rem;
      }
    }

    .avatar-btn {
      height: 2.4rem;
      width: 2.4rem;
      border-radius: 50%;
      border: 2px solid transparent;
      background: none;
      cursor: pointer;
      transition: border-color 0.3s ease;

      img {
        width: 100%;
        border-radius: 50%;
      }

      &:hover {
        border-color: hsl(var(--orange));
      }
    }
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 4rem;

    .nav-right {
      gap: 2.4rem;

      .avatar-btn {
        height: 3.5rem;
        width: 3.5rem;
      }
    }
  }

  @media only screen and (min-width: 1000px) {
    padding: 4rem 0;
    max-width: 80%;
    margin: 0 auto;

    .nav-right {
      gap: 4.7rem;

      .avatar-btn {
        height: 5rem;
        width: 5rem;
      }
    }
  }
`;

const VendorNavbar = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  // Function to handle avatar button click
  const handleAvatarClick = () => {
    navigate("/vendor/profile"); // Navigate to the VendorProfilePage
  };

  return (
    <NavigatorWrapper>
      <nav>
        <div className="nav-left">
          {/* Logo */}
          <div className="logo">
            <Logo />
          </div>

          {/* Search Bar */}
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </div>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li>
              <Link to="/vendorhome">Home</Link>
            </li>
            <li>
              <Link to="/vendor/add-product">Add Product</Link>
            </li>
            <li>
              <Link to="/vendor/edit-product">Edit Product</Link>
            </li>
            <li>
              <Link to="/vendor/order-list">Order List</Link>
            </li>
            <li>
              <Link to="/vendor/report">Report</Link>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          {/* Avatar Button */}
          <button className="avatar-btn" onClick={handleAvatarClick}>
            <img src={avatar} alt="avatar" />
          </button>
        </div>
      </nav>
    </NavigatorWrapper>
  );
};

export default VendorNavbar;