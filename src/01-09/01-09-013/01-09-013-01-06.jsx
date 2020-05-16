import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={30} {...props}>
    <path d="M9 15h8v15H9zM4 15c-3 0-3 3-3 3v5h2v-3c0-1 1-1 1-1h3v-4H4zM10 0h1v13h-1zM13 2h1v11h-1zM16 4h1v9h-1z" />
    <path d="M1.375 11.781l-.875.5L7 23.531v-2l-5.625-9.75z" />
  </svg>
);

export default SvgComponent;
