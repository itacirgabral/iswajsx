import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={24} {...props}>
    <path d="M16.929 21.172L.665 4.908l.708-.707 16.263 16.263-.707.708zM18 13l5.5-5.5L18 2v11z" />
    <path d="M24 14.1L14.1 24H24v-9.9z" />
    <path d="M20.464 17.636L4.201 1.373l.707-.708L21.172 16.93l-.708.707z" />
    <path d="M7 18c0-6.075 4.925-11 11-11v1C12.477 8 8 12.477 8 18v2H7v-2z" />
    <path
      d="M17.636 20.464L1.373 4.201 4.2 1.373l16.263 16.263-2.828 2.828z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
