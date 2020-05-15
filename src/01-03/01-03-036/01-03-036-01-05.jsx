import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 8h15v13H14z" />
    <path fill="#fff" d="M16 10h6v9h-6z" />
    <path d="M11.344.344L5.688 6H8.5l2.844-2.844L14.188 6H17L11.344.344zM0 6h13v2H0z" />
    <path d="M3.406 2.563L1.97 3.968 13 15v-2.813L3.406 2.563z" />
  </svg>
);

export default SvgComponent;
