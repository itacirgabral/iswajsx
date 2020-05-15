import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 17l7 7 7-7H6zm2.406 1h9.188L13 22.563 8.406 18zM16 0a4 4 0 00-4 4v6c0 2.539-3 7-3 7h8s-3-4.461-3-7V4a2 2 0 014 0v4h2V4a4 4 0 00-4-4z" />
    <path d="M0 11v1h10v-1H0zm16 0v1h11v-1H16z" />
    <path d="M8.406 18L13 22.563 17.594 18H8.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
