import React from "react";

const SvgComponent = (props) => (
  <svg width={40} height={23} {...props}>
    <path d="M31 0a4 4 0 014 4v1h-1V4a3 3 0 00-3-3h-1c-1.657 0-3 1.79-3 4v9c0 3.283 4 9 4 9H21s4-5.717 4-9V5a5 5 0 015-5h1z" />
    <path d="M40 5l-5.5 5.5L29 5h11zm-2.438 1h-6.124L34.5 9.063 37.563 6zM40 13v1H0v-1h40z" />
    <path d="M14 0a4 4 0 014 4v1h-1V4a3 3 0 00-3-3h-1c-1.657 0-3 1.79-3 4v9c0 3.283 4 9 4 9H4s4-5.717 4-9V5a5 5 0 015-5h1z" />
    <path d="M23 5l-5.5 5.5L12 5h11zm-2.438 1h-6.125L17.5 9.063 20.563 6z" />
    <path
      d="M37.563 6L34.5 9.063 31.437 6h6.125zM20.563 6L17.5 9.063 14.437 6h6.126z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
