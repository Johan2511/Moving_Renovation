// src/components/Preview.js
import React from 'react';
import './Preview.css';

const Preview = ({ image, text, position }) => {
  return (
    <div className="preview" style={{ top: position.top, left: position.left, display: text ? 'flex' : 'none' }}>
      {image && <img src={image} alt="Preview" />}
      <p>{text}</p>
    </div>
  );
};

export default Preview;
