import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h11v9H2z" />
    <path d="M13 3h2v12h-2zM10 0H8v15h2V0zM17 19v2h3v2h-4v2h6v-6h-5z" />
  </svg>
);

export default SvgComponent;