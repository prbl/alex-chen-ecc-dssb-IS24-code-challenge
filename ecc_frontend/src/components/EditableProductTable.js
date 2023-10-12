import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';

const EditableProductTable = ({ products, onProductUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editingProduct, setEditingProduct] = useState({});

  const handleEditClick = (product) => {
    setEditingId(product.productId);
    setEditingProduct(product);
  };

  const handleChange = (e) => {
    setEditingProduct({
      ...editingProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onProductUpdate(editingProduct);
    setEditingId(null);
    setEditingProduct({});
  };
  

  const renderRow = (product) => {
    const isEditing = editingId === product.productId;

    return (
      <tr key={product.productId}>
        <td>{product.productId}</td>
        <td>
          {isEditing ? (
            <Form.Control
              type="text"
              name="productName"
              value={editingProduct.productName}
              onChange={handleChange}
            />
          ) : (
            product.productName
          )}
        </td>
        <td>
          {isEditing ? (
            <Form.Control
              type="text"
              name="scrumMasterName"
              value={editingProduct.scrumMasterName}
              onChange={handleChange}
            />
          ) : (
            product.scrumMasterName
          )}
        </td>
        <td>
          {isEditing ? (
            <Form.Control
              type="text"
              name="productOwnerName"
              value={editingProduct.productOwnerName}
              onChange={handleChange}
            />
          ) : (
            product.productOwnerName
          )}
        </td>
        <td>
          {isEditing ? (
            <Form.Control
              type="text"
              name="developers"
              value={editingProduct.developers}
              onChange={handleChange}
            />
          ) : (
            product.developers
          )}
        </td>
        <td>
          {isEditing ? (
            <Form.Control
              as="select"
              name="methodology"
              value={editingProduct.methodology}
              onChange={handleChange}
            >
              <option value="Agile">Agile</option>
              <option value="Waterfall">Waterfall</option>
            </Form.Control>
          ) : (
            product.methodology
          )}
        </td>
        <td>
          {isEditing ? (
            <Form.Control
              type="text"
              name="location"
              value={editingProduct.location}
              onChange={handleChange}
            />
          ) : (
            product.location
          )}
        </td>
        <td>{product.startDate}</td>
        <td>
          {isEditing ? (
            <>
              <Button variant="success" onClick={handleSave}>Save</Button>
              <Button variant="secondary" onClick={() => setEditingId(null)}>Cancel</Button>
            </>
          ) : (
            <Button variant="warning" onClick={() => handleEditClick(product)}>Edit</Button>
          )}
        </td>
      </tr>
    );
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Scrum Master</th>
          <th>Product Owner</th>
          <th>Developers</th>
          <th>Methodology</th>
          <th>Location</th>
          <th>Start Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(renderRow)}
      </tbody>
    </Table>
  );
};

export default EditableProductTable;
