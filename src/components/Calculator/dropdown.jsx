import React, { useState } from 'react';
import "./drop.css"

const DropdownMenu = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  }

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  }

  return (
    <div>
      {/* <label htmlFor="product">Product:</label> */}
      <select id="product" value={selectedProduct} onChange={handleProductChange}>
        <option value="">Select Goods</option>
        <option value="product1">Grains: 3%</option>
        <option value="product2">Cut and Polished Stones: 5%</option>
        <option value="product3">Dairy Product: 5%</option>
        <option value="product3">Hardware: 12%</option>
        <option value="product3">Beauty: 18%</option>
        <option value="product3">Electronics: 28%</option>
      </select>
      <br />
    </div>
  );
}

export default DropdownMenu;