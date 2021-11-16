import React from 'react'
import Rating from './Rating';

export default function Product(props) {
    const {product} = props;
    return (
        <div key = {product._id} className="product text-center col-lg-3 col-md-3 col-12">
              
            <img className="img-fluid mb-3" 
            src={product.image} 
            alt={product.name}>
            </img>
            <Rating 
            rating={product.rating}
            numReviews={product.numReviews}>
            </Rating>
      
      
            <h5 className="p-name">{product.name}</h5>
            <h4 className="p-price">${product.price}</h4>
            <button className="buy-btn">AGREGAR AL CARRITO</button>
        </div>
    )
}