import React from "react";

function Item({ id, name, category, isInCart, onAddToCart }) {
  const handleAddToCartClick = () => {
    onAddToCart(id);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={handleAddToCartClick}>
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
