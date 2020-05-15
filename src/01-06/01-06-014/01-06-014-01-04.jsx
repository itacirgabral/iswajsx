import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 5h15v15H6z" />
    <path d="M8 7v4H6v2h2v5h11v-5h2v-2h-2V7H8z" fill="#fff" />
    <path d="M10 7v6h2V7h-2zm5 0v6h2V7h-2zM2.844 0L0 2.813l6 6V5h1.813l-4.97-5z" />
  </svg>
);

export default SvgComponent;
