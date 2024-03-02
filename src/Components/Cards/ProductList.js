import React from 'react';
import ProductCard from './ProductCard'; // Importe o componente ProductCard
import produtos from '../../produtos.json';
import './productList.css' // Importe os dados dos produtos

const ProductsList = () => {
  return (
    <div className="products-list">
      {produtos.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;