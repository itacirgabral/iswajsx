import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M26 10l-5-5-5 5h10zm-2.438-1h-5.125L21 6.437 23.563 9zM23 15a9 9 0 01-9 9H8v-1h6a8 8 0 008-8v-5h1v5z" />
    <path d="M22 15a8 8 0 01-8 8H8v-2h6a6 6 0 006-6v-5h2v5z" fill="#fff" />
    <path d="M20 15a6 6 0 01-6 6H8v-1h6a5 5 0 005-5v-5h1v5zM18 5l-5-5-5 5h10zm-2.438-1h-5.124L13 1.437 15.563 4z" />
    <path d="M15 10a9 9 0 01-9 9H0v-1h6a8 8 0 008-8V5h1v5z" />
    <path d="M14 10a8 8 0 01-8 8H0v-2h6a6 6 0 006-6V5h2v5z" fill="#fff" />
    <path d="M12 10a6 6 0 01-6 6H0v-1h6a5 5 0 005-5V5h1v5z" />
    <path
      d="M23.563 9L21 6.437 18.437 9h5.125zM15.563 4L13 1.437 10.437 4h5.126z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
