import React from "react";

export default function OrderCard({product, price, quantity, onQuantityChange }) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>${price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button"       
          onClick={() => onQuantityChange(-1)}
          disabled={quantity === 0}
          style={{
          backgroundColor: quantity === 0 ? "#bfbfbf" : "#f54242",
          cursor: quantity === 0 ? "not-allowed" : "pointer",
      }}
      >
        -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={() => onQuantityChange(1)}>+</div>
      </div>
    </div>
  );
}
