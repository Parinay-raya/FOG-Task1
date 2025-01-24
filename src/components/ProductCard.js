import React from 'react';
import '../assets/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <a href="#">
          <img className="pic-1" src={product.image1} alt={product.title} />
          <img className="pic-2" src={product.image2} alt={product.title} />
        </a>
        <ul className="social">
          <li><a href="#" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
          <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
          <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
        </ul>
        <span className="product-new-label">Sale</span>
        <span className="product-discount-label">20%</span>
      </div>
      <div className="product-content">
        <h3 className="title"><a href="#">{product.title}</a></h3>
        <div className="price">
          ${product.price} <span>${product.originalPrice}</span>
        </div>
        <a className="add-to-cart" href="#">+ Add To Cart</a>
      </div>
    </div>
  );
};

export default ProductCard;
