import React from "react";

const SvgComponent = (props) => (
  <svg width={27} height={28} {...props}>
    <path d="M8 12l-8 8h2l6-6 6 6h2l-8-8z" />
    <path d="M25 0v14.5a1.5 1.5 0 01-1.5 1.5c-.414 0-.791-.166-1.063-.438L17 10.095V24a2 2 0 01-2 2c-1.657 0-3-2.686-3-6H4a8 8 0 008 8h3a4 4 0 004-4v-9.063l2.031 2.032A3.48 3.48 0 0023.5 18a3.5 3.5 0 003.5-3.5V0h-2z" />
  </svg>
);

export default SvgComponent;
