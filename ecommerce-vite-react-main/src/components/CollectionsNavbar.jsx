import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Logo, Cart } from "../icons/index";
import { avatar } from "../assets/imagedata";
import FloatingCart from "./FloatingCart";
import { useGlobalContext } from "../context/context";
import Logout from "./Logout";

const CollectionsNavbar = () => {
  const { showCart, hideCart, state } = useGlobalContext();
  const navigate = useNavigate();

  // Function to handle user logo click
  const handleUserLogoClick = () => {
    navigate("/profile"); // Navigate to the UserProfile page
  };

  return (
    <CollectionsNavbarWrapper>
      <nav>
        <div className="nav-left">
          <div className="logo">
            <Logo />
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/collections/collectionshome">Home</Link>
            </li>
            <li>
              <Link to="/collections/fashion">Fashion</Link>
            </li>
            <li>
              <Link to="/collections/accessories">Accessories</Link>
            </li>
            <li>
              <Link to="/collections/beauty">Beauty</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <button
            onClick={() => (state.showingCart ? hideCart() : showCart())}
            className="cart-btn"
          >
            <Cart />
            {state.totalCartSize > 0 && <span>{state.totalCartSize}</span>}
          </button>
          <button className="avatar-btn" onClick={handleUserLogoClick}>
            <img src={avatar} alt="avatar" />
          </button>
          <Logout />
          <FloatingCart className={`${state.showingCart ? "active" : ""}`} />
        </div>
      </nav>
    </CollectionsNavbarWrapper>
  );
};

// Styled Components (unchanged)
const CollectionsNavbarWrapper = styled.header`
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

    .logo {
      margin-right: 3.2rem;
    }

    .nav-links {
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

export default CollectionsNavbar;