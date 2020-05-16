import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={21} {...props}>
    <path d="M10 6h15v15H10z" />
    <path fill="#fff" d="M12 8h6v11h-6z" />
    <path d="M5 3S0 3 0 8v3h3V8s0-2 2-2h3s2 0 2 2V6h2.594C12.066 4.604 10.848 3 8 3H5z" />
    <path d="M6.5.188l-1.938.53L10 21v-7.75L6.5.187z" />
  </svg>
);

export default SvgComponent;
