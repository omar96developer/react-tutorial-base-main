import React from "react";
import {MdDelete} from "react-icons/md";
import {BiPlus, BiMinus} from "react-icons/bi";
import { useGlobalContext } from "../context/context";


const CartItem = ({id, name, image, price, countInStock}) => {
  const prova = useGlobalContext();
  console.log(prova);
  return <article className="cart-item">
    <div className="img-container">
      <img src={image} alt={name} className='img' />

    </div>
    <p className="prd-name">{name}</p>
    <div className="qty-selector">
      <button className="btn icon-btn">
        <BiPlus className="icon"></BiPlus>
      </button>
      <p>1</p>
      <button className="btn icon-btn">
        <BiMinus className="icon minus-icon"></BiMinus>
      </button>
    </div>
    <p>{price}</p>
    <button className="btn icon-btn">
      <MdDelete className="icon minus-icon" ></MdDelete>
    </button>
  </article>;
};

export default CartItem;
