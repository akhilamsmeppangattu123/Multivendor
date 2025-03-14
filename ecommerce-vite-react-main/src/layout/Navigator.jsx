import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo, Menu, Cart } from "../icons/index";
import { avatar } from "../assets/imagedata";
import FloatingCart from "../components/FloatingCart";
import { useGlobalContext } from "../context/context";

// Bell Icon Component
const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

// Notification Tab Component
const NotificationTab = ({ notifications }) => (
  <NotificationTabWrapper>
    <div className="notification-header">
      <h4>Notifications</h4>
      <button>Mark all as read</button>
    </div>
    <ul className="notification-list">
      {notifications.map((notification, idx) => (
        <li key={idx} className={notification.read ? "read" : "unread"}>
          <p>{notification.message}</p>
          <small>{notification.time}</small>
        </li>
      ))}
    </ul>
  </NotificationTabWrapper>
);

const navLinks = [
  { name: "home", path: "/" },
  { name: "collections", path: "/collections" },
  { name: "contact", path: "/contact" },
  { name: "login", path: "/login" },
  { name: "register", path: "/register", subItems: [
    { name: "Vendor Register", path: "/vendor-register" },
    { name: "User Register", path: "/user-register" },
  ] },
];

const Navigator = () => {
  const { showSidebar, showCart, hideCart, state } = useGlobalContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false); // State for register dropdown

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  // Dummy notifications data
  const notifications = [
    { message: "Your order has been shipped.", time: "2 hours ago", read: false },
    { message: "New product available in collections.", time: "5 hours ago", read: true },
    { message: "Flash sale starts in 1 hour.", time: "1 day ago", read: false },
  ];

  return (
    <NavigatorWrapper>
      <nav>
        <div className="nav-left">
          <button onClick={showSidebar} className="menu-btn">
            <Menu />
          </button>
          <div className="logo">
            <Logo />
          </div>
          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
          <ul className="nav-links">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                {link.subItems ? (
                  <div
                    className="dropdown"
                    onMouseEnter={() => setShowRegisterDropdown(true)}
                    onMouseLeave={() => setShowRegisterDropdown(false)}
                  >
                    <Link to={link.path}>{link.name}</Link>
                    {showRegisterDropdown && (
                      <ul className="dropdown-menu">
                        {link.subItems.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <Link to={subItem.path}>{subItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link to={link.path}>{link.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-right">
          {/* Notification Button */}
          <div className="notification-container">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="notification-btn"
            >
              <BellIcon />
              {state.unreadNotifications > 0 && (
                <span className="notification-badge">
                  {state.unreadNotifications}
                </span>
              )}
            </button>
            {showNotifications && <NotificationTab notifications={notifications} />}
          </div>

          {/* Cart Button */}
          <button
            onClick={() => (state.showingCart ? hideCart() : showCart())}
            className="cart-btn"
          >
            <Cart />
            {state.totalCartSize > 0 && <span>{state.totalCartSize}</span>}
          </button>

          {/* Avatar */}
          <button className="avatar-btn">
            <img src={avatar} alt="avatar" />
          </button>

          {/* Floating Cart */}
          <FloatingCart className={`${state.showingCart ? "active" : ""}`} />
        </div>
      </nav>
    </NavigatorWrapper>
  );
};

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
          position: relative;

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

          .dropdown {
            position: relative;

            .dropdown-menu {
              position: absolute;
              top: 100%;
              left: 0;
              background-color: hsl(var(--white));
              border: 1px solid hsl(var(--divider));
              border-radius: 0.5rem;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              z-index: 10;
              list-style: none;
              margin: 0;
              padding: 0;
              width: 200px;

              li {
                padding: 0.5rem 1rem;

                a {
                  font-size: 1rem;
                  color: hsl(var(--dark-grayish-blue));
                  text-decoration: none;

                  &:hover {
                    color: hsl(var(--orange));
                  }
                }
              }
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

    .notification-container {
      position: relative;
    }

    .notification-btn {
      position: relative;
      background: none;
      border: none;
      cursor: pointer;

      svg {
        width: 24px;
        height: 24px;
        fill: none;
        stroke: hsl(var(--black));
      }

      .notification-badge {
        user-select: none;
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        background-color: hsl(var(--orange));
        font-weight: 700;
        color: hsl(var(--white));
        border-radius: 50%;
        padding: 0.2rem 0.6rem;
        font-size: 0.8rem;
      }
    }

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

const NotificationTabWrapper = styled.div`
  position: absolute;
  top: 3rem;
  right: 0;
  width: 300px;
  background-color: hsl(var(--white));
  border: 1px solid hsl(var(--divider));
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;

  .notification-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid hsl(var(--divider));

    h4 {
      margin: 0;
      font-size: 1.2rem;
    }

    button {
      background: none;
      border: none;
      color: hsl(var(--orange));
      cursor: pointer;
      font-size: 0.9rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .notification-list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 1rem;
      border-bottom: 1px solid hsl(var(--divider));

      &.unread {
        background-color: hsl(var(--light-gray));
      }

      p {
        margin: 0;
        font-size: 1rem;
      }

      small {
        color: hsl(var(--dark-grayish-blue));
        font-size: 0.8rem;
      }
    }
  }
`;

export default Navigator;