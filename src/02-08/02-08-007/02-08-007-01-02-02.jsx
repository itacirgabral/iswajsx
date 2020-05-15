import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M31 0a4 4 0 014 4v1h-1V4a3 3 0 00-3-3h-1c-1.657 0-3 1.79-3 4v9c0 3.283 4 9 4 9H21s4-5.717 4-9V5a5 5 0 015-5h1z" />
    <path d="M40 5l-5.5 5.5L29 5h11zm-2.438 1h-6.124L34.5 9.063 37.563 6zM40 13v1H28v-1h12zm-16 0v1H14v-1h10zM8 13v1H0v-1h8z" />
    <path d="M14 0a4 4 0 00-4 4v6c0 2.539-3 7-3 7h8s-3-4.461-3-7V4a2 2 0 014 0v4h2V4a4 4 0 00-4-4zM18 17l-7 7-7-7h14zm-2.438 1H6.438L11 22.563 15.563 18z" />
    <path
      d="M37.563 6L34.5 9.063 31.437 6h6.125zM15.563 18L11 22.563 6.437 18h9.125z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
