// import React from "react";
// import styled from "styled-components";

// const EditProduct = () => {
//   return (
//     <EditProductContainer>
//       <h1>Edit Products</h1>
//       <p>
//         The most important feature in the product editing section is the product
//         editing part. When adding products here, do not ignore to fill in all the
//         required fields completely and follow the products coding rules.
//       </p>

//       {/* Navigation Tabs */}
//       <Tabs>
//         <Tab active>Overview</Tab>
//         <Tab>Add Product</Tab>
//       </Tabs>

//       {/* Search Bar */}
//       <SearchBar>
//         <input type="text" placeholder="Search for order ID, customer, order status or something..." />
//       </SearchBar>

//       {/* Product Name */}
//       <FormGroup>
//         <Label>Product Name</Label>
//         <Input type="text" placeholder="Note Air Force!" />
//         <Hint>Do not exceed 20 characters when entering the product name.</Hint>
//       </FormGroup>

//       {/* Category and Brand */}
//       <Row>
//         <FormGroup>
//           <Label>Category</Label>
//           <Select>
//             <option value="Snookers">Snookers</option>
//             <option value="Male">Male</option>
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label>Brand</Label>
//           <Select>
//             <option value="Nike">Nike</option>
//           </Select>
//         </FormGroup>
//       </Row>

//       {/* Description */}
//       <FormGroup>
//         <Label>Description</Label>
//         <TextArea placeholder="Enter product description..." />
//         <Hint>Do not exceed 20 characters when entering the product name.</Hint>
//       </FormGroup>

//       {/* Product Images */}
//       <FormGroup>
//         <Label>Product Images</Label>
//         <ImageUpload>
//           <p>Drop your image here or select click to browse</p>
//         </ImageUpload>
//         <Hint>
//           You need to add a brand + images. Pay attention to the quality of the
//           picture you add, comply with the background, colour standards. Pictures
//           must be in certain dimensions. Notice that the product shows at the
//           details.
//         </Hint>
//       </FormGroup>

//       {/* Price and Discount */}
//       <PriceTable>
//         <thead>
//           <tr>
//             <th>Price</th>
//             <th>Discount (Optional)</th>
//             <th>Discount Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>¥10,000</td>
//             <td>20%</td>
//             <td>¥8,000</td>
//           </tr>
//         </tbody>
//       </PriceTable>

//       {/* Add Size */}
//       <FormGroup>
//         <Label>Add Size</Label>
//         <Select>
//           <option value="EU-44">EU-44</option>
//           <option value="EU-48">EU-48</option>
//           <option value="EU-49">EU-49</option>
//           <option value="EU-50">EU-50</option>
//           <option value="EU-51">EU-51</option>
//           <option value="EU-52">EU-52</option>
//         </Select>
//       </FormGroup>

//       {/* Product Date */}
//       <FormGroup>
//         <Label>Product Date</Label>
//         <Input type="text" placeholder="23/22/23" />
//       </FormGroup>

//       {/* Buttons */}
//       <ButtonGroup>
//         <Button type="button">Add Product</Button>
//         <Button type="button" secondary>
//           Save Product
//         </Button>
//         <Button type="button" secondary>
//           Schedule
//         </Button>
//       </ButtonGroup>
//     </EditProductContainer>
//   );
// };

// export default EditProduct;

// // Styled Components
// const EditProductContainer = styled.div`
//   padding: 2rem;
//   max-width: 1200px;
//   margin: 0 auto;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const Tabs = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-bottom: 2rem;
// `;

// const Tab = styled.div`
//   padding: 0.75rem 1.5rem;
//   font-size: 1rem;
//   border-radius: 4px;
//   cursor: pointer;
//   background-color: ${(props) => (props.active ? "#007bff" : "#f8f9fa")};
//   color: ${(props) => (props.active ? "#fff" : "#333")};
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: ${(props) => (props.active ? "#0056b3" : "#e9ecef")};
//   }
// `;

// const SearchBar = styled.div`
//   margin-bottom: 2rem;

//   input {
//     width: 100%;
//     padding: 0.75rem;
//     font-size: 1rem;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     outline: none;

//     &:focus {
//       border-color: #007bff;
//     }
//   }
// `;

// const Row = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-bottom: 1.5rem;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 1.5rem;
// `;

// const Label = styled.label`
//   display: block;
//   font-size: 1rem;
//   color: #555;
//   margin-bottom: 0.5rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   font-size: 1rem;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   outline: none;

//   &:focus {
//     border-color: #007bff;
//   }
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 0.75rem;
//   font-size: 1rem;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   outline: none;
//   resize: vertical;
//   min-height: 100px;

//   &:focus {
//     border-color: #007bff;
//   }
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 0.75rem;
//   font-size: 1rem;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   outline: none;

//   &:focus {
//     border-color: #007bff;
//   }
// `;

// const Hint = styled.p`
//   font-size: 0.875rem;
//   color: #666;
//   margin-top: 0.5rem;
// `;

// const ImageUpload = styled.div`
//   width: 100%;
//   padding: 2rem;
//   border: 2px dashed #ddd;
//   border-radius: 4px;
//   text-align: center;
//   cursor: pointer;

//   p {
//     color: #666;
//   }

//   &:hover {
//     border-color: #007bff;
//   }
// `;

// const PriceTable = styled.table`
//   width: 100%;
//   margin-bottom: 1.5rem;
//   border-collapse: collapse;

//   th,
//   td {
//     padding: 0.75rem;
//     border: 1px solid #ddd;
//     text-align: center;
//   }

//   th {
//     background-color: #f8f9fa;
//     font-weight: bold;
//   }
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 2rem;
// `;

// const Button = styled.button`
//   padding: 0.75rem 1.5rem;
//   font-size: 1rem;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   background-color: ${(props) => (props.secondary ? "#6c757d" : "#007bff")};
//   color: #fff;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: ${(props) => (props.secondary ? "#5a6268" : "#0056b3")};
//   }
// `;
import React, { useState } from "react";
import styled from "styled-components";
import AddProduct from "./AddProduct"; // Import the AddProduct component for editing

const EditProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Note Air Force!",
      category: "Snookers",
      brand: "Nike",
      description: "A stylish and comfortable shoe.",
      price: "¥10,000",
      discount: "20%",
      discountPrice: "¥8,000",
      image: "https://via.placeholder.com/150",
      reviews: [
        { id: 1, user: "John Doe", comment: "Great product!", rating: 5 },
        { id: 2, user: "Jane Smith", comment: "Good quality.", rating: 4 },
      ],
    },
    // Add more products as needed
  ];

  // Handle "View More" button click
  const handleViewMore = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
    setShowEditForm(false);
    setShowReviews(false);
  };

  // Handle "Edit" button click
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowEditForm(true);
    setShowDetails(false);
    setShowReviews(false);
  };

  // Handle "Review" button click
  const handleReview = (product) => {
    setSelectedProduct(product);
    setShowReviews(true);
    setShowDetails(false);
    setShowEditForm(false);
  };

  return (
    <EditProductContainer>
      <h1>Edit Products</h1>
      <p>
        The most important feature in the product editing section is the product
        editing part. When adding products here, do not ignore to fill in all the
        required fields completely and follow the products coding rules.
      </p>

      {/* Navigation Tabs */}
      <Tabs>
        <Tab active>Overview</Tab>
        <Tab>Add Product</Tab>
      </Tabs>

      {/* Product Grid */}
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <ButtonGroup>
              <Button onClick={() => handleViewMore(product)}>View More</Button>
              <Button onClick={() => handleEdit(product)}>Edit</Button>
              <Button onClick={() => handleReview(product)}>Review</Button>
            </ButtonGroup>
          </ProductCard>
        ))}
      </ProductGrid>

      {/* Product Details */}
      {showDetails && selectedProduct && (
        <ProductDetails>
          <h2>{selectedProduct.name}</h2>
          <p>Category: {selectedProduct.category}</p>
          <p>Brand: {selectedProduct.brand}</p>
          <p>Description: {selectedProduct.description}</p>
          <p>Price: {selectedProduct.price}</p>
          <p>Discount: {selectedProduct.discount}</p>
          <p>Discount Price: {selectedProduct.discountPrice}</p>
          <Button onClick={() => setShowDetails(false)}>Close</Button>
        </ProductDetails>
      )}

      {/* Edit Product Form */}
      {showEditForm && selectedProduct && (
        <EditFormContainer>
          <AddProduct initialData={selectedProduct} />
          <Button onClick={() => setShowEditForm(false)}>Cancel</Button>
        </EditFormContainer>
      )}

      {/* Product Reviews */}
      {showReviews && selectedProduct && (
        <ReviewContainer>
          <h2>Reviews for {selectedProduct.name}</h2>
          {selectedProduct.reviews.map((review) => (
            <Review key={review.id}>
              <p>
                <strong>{review.user}</strong> - {review.comment} (Rating:{" "}
                {review.rating}/5)
              </p>
            </Review>
          ))}
          <Button onClick={() => setShowReviews(false)}>Close</Button>
        </ReviewContainer>
      )}
    </EditProductContainer>
  );
};

export default EditProduct;

// Styled Components
const EditProductContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Tab = styled.div`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#007bff" : "#f8f9fa")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#e9ecef")};
  }
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ProductCard = styled.div`
  width: 200px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  background-color: #f8f9fa;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #007bff;
  margin: 0.5rem 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.secondary ? "#6c757d" : "#007bff")};
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.secondary ? "#5a6268" : "#0056b3")};
  }
`;

const ProductDetails = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f8f9fa;
`;

const EditFormContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f8f9fa;
`;

const ReviewContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f8f9fa;
`;

const Review = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;