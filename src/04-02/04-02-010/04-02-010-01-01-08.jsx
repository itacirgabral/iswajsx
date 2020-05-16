import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M12.5 6l-.719.719L14.594 9.5l-2.782 2.813.688.687L16 9.5 12.5 6z" />
    <path d="M9.5 9A3.5 3.5 0 006 12.5c0 1.284.377 2.478 1 3.5h2v-2c-1.105 0-2-.672-2-1.5A2.5 2.5 0 019.5 10H12V9H9.5zM25.5 6l-.719.719L27.594 9.5l-2.782 2.813.688.687L29 9.5 25.5 6z" />
    <path d="M22.5 9a3.5 3.5 0 00-3.5 3.5c0 1.284.377 2.478 1 3.5h2v-2c-1.105 0-2-.672-2-1.5a2.5 2.5 0 012.5-2.5H25V9h-2.5z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
  </svg>
);

export default SvgComponent;
