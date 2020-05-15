import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 13v17s8 0 8-5v-7s0-5-8-5z" />
    <path
      d="M10 14.094v14.875c1.24-.077 2.22-.3 3-.594V14.687c-1.077-.362-2.213-.532-3-.593z"
      fill="#fff"
    />
    <path d="M0 19h2s0-4 7-4v-2s-9 0-9 6zM11 0v11.125c.734.08 1.395.216 2 .375V0h-2zM19 3l-4.563 8.969a8.46 8.46 0 011.75.969l4.594-9.032L19 3zM22 10l-4.375 4.375c.476.633.8 1.25 1 1.813l4.781-4.782L22 10zm-6.063 8.031c.1.185.19.37.282.563l.562-.563h-.843zM9 30v-2s-8 0-8-3H0c.077.077 0 5 9 5z" />
  </svg>
);

export default SvgComponent;
