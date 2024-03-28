
import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/E-Commerce-logo2/star_icon.png'
import star_dull_icon from "../Assets/E-Commerce-logo2/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext';
import {useNavigate} from 'react-router-dom'

const ProductDisplay = (props) => {
  const {product}=props;
  const{addToCart}=useContext(ShopContext)
   const navigate = useNavigate()




const handleAddtoCart = (id)=>{
  addToCart(id)
  setTimeout(() => {
    navigate("/cart")
  }, 500);
}


  return (
    <div className='productDisplay'>
     <div className="productdisplay-left">
      <div className="productdisplay-img-list">
       <img src={product.image} alt="" /> 
       <img src={product.image} alt="" />
       <img src={product.image} alt="" />
       <img src={product.image} alt="" />
      </div>
      <div className="productdisplay-img">
        <img className='productdisplay-main-img' src={product.image} alt="" />
      </div>
     </div>
     <div className="productdisplay-right">
      <h1>{product.name}</h1>
      <div className="productdisplay-right-star">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>122</p>
      </div>
      <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">
          <s>${product.old_price}</s>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
          <div className="productdisplay-right-description">
           Terms used interchangeably for 'garment' are apparel, attire, dress, uniform, and clothes. Clothing items like t-shirts, shirts, pants, jackets, boxer pants, and ladies' blouses are garments.
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={()=>handleAddtoCart(product.id)}>ADD TO CART</button>
          
          <p className="productdisplay-right-category">
            <span>Category:</span>Women, T-Shirt, Crop Top
          </p>
          <p className="productdisplay-right-category">
            <span>Tags:</span> Modern, Latest
          </p>
        </div>
      </div>
     </div>
    </div>
    
  )
  
}

export default ProductDisplay