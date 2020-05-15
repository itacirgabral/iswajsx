import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9.5 5c0-.346-.074-.68-.156-1H7.75c-1.797 0-3.366-.964-4.312-2.406a3.962 3.962 0 000 6.812C4.384 6.964 5.953 6 7.75 6h1.594c.082-.32.156-.654.156-1z" />
    <path d="M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z" />
  </svg>
);

export default SvgComponent;