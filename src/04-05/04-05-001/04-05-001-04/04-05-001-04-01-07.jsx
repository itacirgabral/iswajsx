import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M17.5 20a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z" />
    <path d="M21.5 25c0-.346-.074-.68-.156-1H19.75c-1.797 0-3.366-.964-4.313-2.406a3.962 3.962 0 000 6.812C16.384 26.964 17.953 26 19.75 26h1.594c.082-.32.156-.654.156-1z" />
  </svg>
);

export default SvgComponent;
