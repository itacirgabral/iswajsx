import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M14 20c-2.216 0-4 1.784-4 4 0 3.324 1.784 6 4 6h7c2.216 0 4-2.676 4-6 0-2.216-1.784-4-4-4h-7zm0 1.5v5a2.495 2.495 0 01-2.5-2.5c0-1.385 1.115-2.5 2.5-2.5zm1 0h2v5h-2v-5zm3 0h2v5h-2v-5zm3 0c1.385 0 2.5 1.115 2.5 2.5s-1.115 2.5-2.5 2.5v-5zM5 16v1H4v1h1v2H4v1h1v1h1v-1h2v1h1v-1h1v-1H9v-2h1v-1H9v-1H8v1H6v-1H5zm1 2h2v2H6v-2zM26 16v1h-1v1h1v2h-1v1h1v1h1v-1h2v1h1v-1h1v-1h-1v-2h1v-1h-1v-1h-1v1h-2v-1h-1zm1 2h2v2h-2v-2z" />
  </svg>
);

export default SvgComponent;
