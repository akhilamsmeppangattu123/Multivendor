import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa"; // Import the heart icon

// Import images from src/assets
import shirt1 from "../assets/shirt1.jpg";
import dress1 from "../assets/dress1.jpg";
import jacket1 from "../assets/jacket1.jpg";
import jeans1 from "../assets/jeans1.jpg";
import shoes1 from "../assets/shoes1.jpg";

const Fashion = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]); // State to track wishlist items
  const [selectedCategory, setSelectedCategory] = useState("All"); // State to track selected category

  // Mock data for fashion items
  const fashionItems = [
    {
      id: 1,
      brand: "Zara",
      name: "Men's Casual Shirt",
      price: 1499,
      originalPrice: 2499,
      discount: "40% OFF",
      rating: 4.5,
      reviews: 1200,
      image: shirt1,
      category: "Men's Clothing",
    },
    {
      id: 2,
      brand: "H&M",
      name: "Women's Summer Dress",
      price: 1999,
      originalPrice: 2999,
      discount: "33% OFF",
      rating: 4.7,
      reviews: 2500,
      image: dress1,
      category: "Women's Clothing",
    },
    {
      id: 3,
      brand: "Levi's",
      name: "Men's Denim Jacket",
      price: 3499,
      originalPrice: 4999,
      discount: "30% OFF",
      rating: 4.6,
      reviews: 1800,
      image: jacket1,
      category: "Men's Clothing",
    },
    {
      id: 4,
      brand: "Wrangler",
      name: "Men's Slim Fit Jeans",
      price: 1999,
      originalPrice: 2999,
      discount: "33% OFF",
      rating: 4.4,
      reviews: 3200,
      image: jeans1,
      category: "Men's Clothing",
    },
    {
      id: 5,
      brand: "Nike",
      name: "Men's Running Shoes",
      price: 4999,
      originalPrice: 6999,
      discount: "28% OFF",
      rating: 4.8,
      reviews: 4500,
      image: shoes1,
      category: "Footwear",
    },
  ];

  // Function to handle item click
  const handleItemClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Function to toggle wishlist
  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId)); // Remove from wishlist
    } else {
      setWishlist([...wishlist, productId]); // Add to wishlist
    }
  };

  // Function to filter items by category
  const filteredItems =
    selectedCategory === "All"
      ? fashionItems
      : fashionItems.filter((item) => item.category === selectedCategory);

  return (
    <FashionWrapper>
      <h1>Fashion Collection</h1>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={selectedCategory === "Men's Clothing" ? "active" : ""}
          onClick={() => setSelectedCategory("Men's Clothing")}
        >
          Men's Clothing
        </button>
        <button
          className={selectedCategory === "Women's Clothing" ? "active" : ""}
          onClick={() => setSelectedCategory("Women's Clothing")}
        >
          Women's Clothing
        </button>
        <button
          className={selectedCategory === "Kids' Fashion" ? "active" : ""}
          onClick={() => setSelectedCategory("Kids' Fashion")}
        >
          Kids' Fashion
        </button>
        <button
          className={selectedCategory === "Footwear" ? "active" : ""}
          onClick={() => setSelectedCategory("Footwear")}
        >
          Footwear
        </button>
      </div>

      {/* Fashion Items Grid */}
      <div className="fashion-list">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="fashion-item"
            onClick={() => handleItemClick(item.id)}
          >
            {/* Wishlist Button */}
            <button
              className={`wishlist-button ${
                wishlist.includes(item.id) ? "active" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the parent onClick
                toggleWishlist(item.id);
              }}
            >
              <FaHeart />
            </button>

            <img src={item.image} alt={item.name} className="product-image" />
            <div className="item-header">
              <span className="rating">
                {item.rating} ★ | {item.reviews}
              </span>
              <h2 className="brand">{item.brand}</h2>
            </div>
            <p className="item-name">{item.name}</p>
            <div className="pricing">
              <span className="price">Rs. {item.price}</span>
              <span className="original-price">Rs. {item.originalPrice}</span>
              <span className="discount">{item.discount}</span>
            </div>
          </div>
        ))}
      </div>
    </FashionWrapper>
  );
};

// Define FashionWrapper styled component
const FashionWrapper = styled.div`
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    color: hsl(var(--black));
    margin-bottom: 2rem;
    text-align: center;
  }

  .filter-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;

    button {
      padding: 0.5rem 1rem;
      border: 1px solid hsl(var(--divider));
      border-radius: 0.5rem;
      background-color: hsl(var(--white));
      cursor: pointer;
      transition: background-color 0.2s ease, color 0.2s ease;

      &:hover {
        background-color: hsl(var(--orange));
        color: hsl(var(--white));
      }

      &.active {
        background-color: hsl(var(--orange));
        color: hsl(var(--white));
      }
    }
  }

  .fashion-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }

  .fashion-item {
    position: relative; /* For positioning the wishlist button */
    padding: 1.5rem;
    border: 1px solid hsl(var(--divider));
    border-radius: 0.5rem;
    background-color: hsl(var(--white));
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  }

  .wishlist-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: hsl(var(--grayish-blue)); /* Default color */
    transition: color 0.2s ease;

    &:hover {
      color: hsl(var(--orange)); /* Hover color */
    }

    &.active {
      color: hsl(var(--red)); /* Active (wishlisted) color */
    }
  }

  .product-image {
    width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .rating {
      font-size: 1rem;
      color: hsl(var(--dark-grayish-blue));
    }

    .brand {
      font-size: 1.5rem;
      color: hsl(var(--black));
    }
  }

  .item-name {
    font-size: 1.2rem;
    color: hsl(var(--dark-grayish-blue));
    margin-bottom: 1rem;
  }

  .pricing {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    .price {
      font-size: 1.5rem;
      font-weight: 700;
      color: hsl(var(--black));
    }

    .original-price {
      font-size: 1rem;
      text-decoration: line-through;
      color: hsl(var(--grayish-blue));
    }

    .discount {
      font-size: 1rem;
      color: hsl(var(--orange));
    }
  }
`;

export default Fashion;