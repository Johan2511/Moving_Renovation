// Title.jsx
import React from 'react';

const Title = ({ level, text }) => {
  const Tag = `h${level}`; // Determina qué etiqueta usar en función del nivel especificado

  return (
    <Tag className={`font-semibold mb-2 ${level === 1 ? 'text-3xl' : 'text-2xl'}`}>
      {text}
    </Tag>
  );
};

export default Title;
