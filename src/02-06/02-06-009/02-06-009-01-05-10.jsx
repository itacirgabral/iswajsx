import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={24} {...props}>
    <path d="M26 14l-5 5-5-5h10zm-2.438 1h-5.125L21 17.563 23.563 15zM23 9a9 9 0 00-9-9H8v1h6a8 8 0 018 8v5h1V9z" />
    <path d="M22 9a8 8 0 00-8-8H8v2h6a6 6 0 016 6v5h2V9z" fill="#fff" />
    <path d="M20 9a6 6 0 00-6-6H8v1h6a5 5 0 015 5v5h1V9zM18 19l-5 5-5-5h10zm-2.438 1h-5.124L13 22.563 15.563 20z" />
    <path d="M15 14a9 9 0 00-9-9H0v1h6a8 8 0 018 8v5h1v-5z" />
    <path d="M14 14a8 8 0 00-8-8H0v2h6a6 6 0 016 6v5h2v-5z" fill="#fff" />
    <path d="M12 14a6 6 0 00-6-6H0v1h6a5 5 0 015 5v5h1v-5z" />
    <path
      d="M23.563 15L21 17.563 18.437 15h5.125zM15.563 20L13 22.563 10.437 20h5.126z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
