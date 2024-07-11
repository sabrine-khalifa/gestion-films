// src/components/FormInput.js
import React from 'react';
import './formInput.css';

const formInput = ({ value, onChange, placeholder }) => (
  <input
    className="form-input"
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default formInput;
