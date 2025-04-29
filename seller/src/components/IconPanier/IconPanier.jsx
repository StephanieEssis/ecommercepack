import React from "react";
import { Link } from "react-router-dom";

const CartIcon = ({ count }) => {
  return (
    <Link to="/cart" className="relative inline-block">
      <svg
        className="w-8 h-8 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13l-1.5-7M7 13H5.4"
        />
      </svg>
      {count > 0 && (
        <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
          {count}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
