import React from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai';
const Navbar = () => {
  return <nav className="nav">
    <header className="nav-header">
      <div className="nav-brand">
        <h4>CartShop</h4>
      </div>
      <div className="nav-cart">
        <AiOutlineShoppingCart className='icon nav-icon'></AiOutlineShoppingCart>
        <div className="cart-counter">5</div>
      </div>
    </header>

  </nav>;
};

export default Navbar;
