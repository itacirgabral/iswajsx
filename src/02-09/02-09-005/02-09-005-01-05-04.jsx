import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 20l4.5-4.5L13 11v9zm1-2.438v-4.125l2.094 2.063L14 17.563zM0 6c0 5.523 4.477 10 10 10h3v-1h-3a9 9 0 01-9-9V0H0v6z" />
    <path d="M14 17.563l2.094-2.063L14 13.437v4.126z" fill="#fff" />
  </svg>
);

export default SvgComponent;