import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ProductForm = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    productName: '',
    productOwnerName: '',
    developers: '',
    scrumMasterName: '',
    startDate: '',
    methodology: '',
    location: '',
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure the date is in YYYY-MM-DD format
    const formattedDate = newProduct.startDate.split("/").reverse().join("-");
    // Prepare the product data for sending to the backend
    const productToPost = {
      ...newProduct,
      startDate: formattedDate,
    };
    onAddProduct(productToPost);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="productName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter product name" 
          name="productName" 
          value={newProduct.productName}
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Form.Group controlId="productOwnerName">
        <Form.Label>Product Owner Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter product owner name" 
          name="productOwnerName" 
          value={newProduct.productOwnerName}
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Form.Group controlId="developers">
        <Form.Label>Developers</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter developer names separated by commas" 
          name="developers" 
          value={newProduct.developers}
          onChange={handleChange} 
          required 
        />
        <Form.Text className="text-muted">
          Up to 5 developers, separate names with commas.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="scrumMasterName">
        <Form.Label>Scrum Master Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter scrum master name" 
          name="scrumMasterName" 
          value={newProduct.scrumMasterName}
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Form.Group controlId="startDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control 
          type="date" 
          name="startDate" 
          value={newProduct.startDate}
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Form.Group controlId="methodology">
        <Form.Label>Methodology</Form.Label>
        <Form.Control 
          as="select" 
          name="methodology" 
          value={newProduct.methodology}
          onChange={handleChange} 
          required
        >
          <option value="">Select methodology</option>
          <option value="Agile">Agile</option>
          <option value="Waterfall">Waterfall</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control 
              type="url" 
              placeholder="Enter GitHub repository link (optional)" 
              name="location" 
              value={newProduct.location || ''}  // Ensure value is not null
              onChange={handleChange} 
          />
      </Form.Group>

      
      <Button variant="success" type="submit">
        Save Product
      </Button>
    </Form>
  );
};

export default ProductForm;
