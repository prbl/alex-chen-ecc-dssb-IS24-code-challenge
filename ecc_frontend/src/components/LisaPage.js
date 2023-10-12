import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import { Button, Form, InputGroup } from 'react-bootstrap';

const LisaPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.scrumMasterName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/products/');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addProduct = (product) => {
    fetch('http://localhost:3000/api/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Product added:', data);
      setShowForm(false); // Hide the form after submitting
      
      // Update the product list to include the new product
      setProducts(prevProducts => [...prevProducts, data]);
    })
    .catch((error) => {
      console.error('Error adding product:', error);
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <h1>Lisa's Page</h1>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search by Scrum Master"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </InputGroup>
      <ProductTable products={filteredProducts} />
      <Button onClick={() => setShowForm(!showForm)} className="mt-3">
        {showForm ? 'Cancel' : 'Add New Product'}
      </Button>
      {showForm && <ProductForm onAddProduct={addProduct} />}
    </>
  );
};

export default LisaPage;
