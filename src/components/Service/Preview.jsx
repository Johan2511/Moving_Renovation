import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Preview.css';

const Preview = ({ 
  image,
  text,
  position 
}) => {
  return (
    <div className="preview" style={{ top: position.top, left: position.left, display: text ? 'flex' : 'none' }}>
      {image && <LazyLoadImage  src={image} alt="Preview" effect="blur"  threshold={10} />}
      <p>{text}</p>
    </div>
  );
};

export default Preview;

