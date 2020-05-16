import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={24} {...props}>
    <path d="M20.464 17.636L4.201 1.373l.707-.708L21.172 16.93l-.708.707z" />
    <path d="M14.1 24H24v-9.9l-2.01 2.011v5.878H16.11L14.101 24z" />
    <path d="M16.929 21.172L.665 4.908l.708-.707 16.263 16.263-.707.708zM1.998 17.998L7.5 23.5l5.502-5.502h-1.414L7.5 22.086l-4.088-4.088H1.998z" />
    <path d="M18 7C11.925 7 7 11.925 7 18h1c0-5.523 4.477-10 10-10h2V7h-2z" />
    <path
      d="M17.636 20.464L1.373 4.201 4.2 1.373l16.263 16.263-2.828 2.828z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
