import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);
  const handleQuantityChange = (index, delta) => {
    const updatedOrders = orders.map((item, i) =>
      i === index
        ? { ...item, quantity: Math.max(0, item.quantity + delta) }
        : item
    );
    setOrders(updatedOrders);
  };
  const total = orders.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
    
  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
      {orders.map((item, index) => (
      <OrderCard
          key={index}
          product={item.product}
          price={item.price}
          quantity={item.quantity}
          onQuantityChange={(delta) => handleQuantityChange(index, delta)}
      />
))}
      </div>

      <CheckoutButton total={total}></CheckoutButton>
    </>
  );
}
