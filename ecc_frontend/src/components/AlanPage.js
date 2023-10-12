import React, { useState, useEffect } from 'react';
import EditableProductTable from './EditableProductTable';
import ProductForm from './ProductForm';
import { Button, Form, InputGroup } from 'react-bootstrap';

const AlanPage = () => {
  const [products, setProducts] = useState([]);
  const [searchedDeveloper, setSearchedDeveloper] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchedDeveloper) {
      const lowercasedSearchDevelopers = searchedDeveloper.toLowerCase().split(',').map(dev => dev.trim());
      const filtered = products.filter(product =>
        lowercasedSearchDevelopers.every(searchDev =>
          product.developers.toLowerCase().split(',').map(dev => dev.trim()).includes(searchDev)
        )
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchedDeveloper, products]);

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
      setProducts(prevProducts => [...prevProducts, data]);
      setShowForm(false);
    })
    .catch((error) => {
      console.error('Error adding product:', error);
    });
  };

  const updateProduct = (updatedProduct) => {
    fetch(`http://localhost:3000/api/products/${updatedProduct.productId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      setProducts(prevProducts => 
        prevProducts.map(product => 
          product.productId === data.productId ? data : product
        )
      );
    })
    .catch((error) => {
      console.error('Error updating product:', error);
    });
  };

  const handleDeveloperSearch = (e) => {
    setSearchedDeveloper(e.target.value);
  };

  return (
    <>
      <h1>Alan's Page</h1>
      <InputGroup className="mb-3">
        <Form.Control 
          type="text"
          placeholder="Search by Developer"
          value={searchedDeveloper}
          onChange={handleDeveloperSearch}
        />
      </InputGroup>
      <p>Total products found: {filteredProducts.length}</p>
      <EditableProductTable products={filteredProducts} onProductUpdate={updateProduct} />
      <Button onClick={() => setShowForm(!showForm)} className="mt-3">
        {showForm ? 'Cancel' : 'Add New Product'}
      </Button>
      {showForm && <ProductForm onAddProduct={addProduct} onCancel={() => setShowForm(false)} />}
    </>
  );
};

export default AlanPage;