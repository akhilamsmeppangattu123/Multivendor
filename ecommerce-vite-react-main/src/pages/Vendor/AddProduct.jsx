import React from "react";
import styled from "styled-components";

const AddProduct = () => {
  return (
    <AddProductContainer>
      <h1>Add New Product</h1>

      {/* General Information Section */}
      <Section>
        <h2>General Information</h2>
        <FormGroup>
          <Label>Name Product</Label>
          <Input type="text" placeholder="Puffer Jacket With Pocket Detail" />
        </FormGroup>
        <FormGroup>
          <Label>Description Product</Label>
          <TextArea
            placeholder="Cropped buffer jacket made of technical fabric. High neck and long sleeves. Flap pocket at the chest and in-seam side pockets at the hip. Inside pocket detail. Hem with elastic interior. Zip-up front."
          />
        </FormGroup>
        <FormGroup>
          <Label>Add Category</Label>
          <Input type="text" placeholder="Puffer Jacket With Pocket Detail" />
        </FormGroup>
      </Section>

      {/* Side Section */}
      <Section>
        <h2>Side</h2>
        <FormGroup>
          <Label>Pick Available Size</Label>
          <Select>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Pick Available Gender</Label>
          <Select>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
          </Select>
        </FormGroup>
      </Section>

      {/* Price and Stock Section */}
      <Section>
        <h2>Price And Stock</h2>
        <FormGroup>
          <Label>Base Pricing</Label>
          <Input type="number" placeholder="$47.55" />
        </FormGroup>
        <FormGroup>
          <Label>Discount</Label>
          <Input type="number" placeholder="10%" />
        </FormGroup>
        <FormGroup>
          <Label>Stock</Label>
          <Input type="number" placeholder="77" />
        </FormGroup>
        <FormGroup>
          <Label>Discount Type</Label>
          <Input type="text" placeholder="Chinese New Year Discount" />
        </FormGroup>
      </Section>

      {/* Upload Image Section */}
      <Section>
        <h2>Upload Img</h2>
        <FormGroup>
          <Label>Category</Label>
          <Input type="text" placeholder="Product Category" />
        </FormGroup>
        <FormGroup>
          <Label>Add Category</Label>
          <Input type="text" placeholder="Jacket" />
        </FormGroup>
      </Section>

      {/* Buttons */}
      <ButtonGroup>
        <Button type="button">Save Draft</Button>
        <Button type="submit" primary>
          Add Product
        </Button>
      </ButtonGroup>
    </AddProductContainer>
  );
};

export default AddProduct;

// Styled Components
const AddProductContainer = styled.div`
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
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  resize: vertical;
  min-height: 100px;

  &:focus {
    border-color: #007bff;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "#007bff" : "#6c757d")};
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#5a6268")};
  }
`;