import React from 'react';
import './productCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ product }) => {
   
  return (
    <div className="card" >
        <img className="card-img-top" style={{width: '285px',height:'285px'}} src={product.thumbnail} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title" >{product.title}</h5>
        <h5 className="card-text" >{product.price}</h5>
      </div>
    </div>
  );
};

export default ProductCard;