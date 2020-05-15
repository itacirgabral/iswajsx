import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 8h15v13H10z" />
    <path fill="#fff" d="M12 10h11v9H12z" />
    <path d="M5 3S0 3 0 8v3h3V8s0-2 2-2h7.594C12.066 4.604 10.848 3 8 3H5z" />
    <path d="M6.5.188l-1.938.53L9 17.282v-7.75L6.5.187z" />
  </svg>
);

export default SvgComponent;