import React from "react";

const SvgComponent = (props) => (
  <svg width={40} height={15} {...props}>
    <path d="M7 1v3H4v2h3v3H4v2h3v3h2v-3h3v3h2v-3h3V9h-3V6h3V4h-3V1h-2v3H9V1H7zm2 5h3v3H9V6z" />
    <path fill="#fff" d="M9 6h3v3H9z" />
    <path d="M19 0h2v15h-2zM38 0h2v15h-2zM26 1v3h-3v2h3v3h-3v2h3v3h2v-3h3v3h2v-3h3V9h-3V6h3V4h-3V1h-2v3h-3V1h-2zm2 5h3v3h-3V6z" />
    <path fill="#fff" d="M28 6h3v3h-3z" />
    <path d="M0 0h2v15H0z" />
  </svg>
);

export default SvgComponent;
