import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={37} {...props}>
    <path d="M14 0l6 6-6 6v-2l4-4-4-4V0z" />
    <path d="M14 4v1H9a5 5 0 00-5 5v2a5 5 0 005 5h4a3 3 0 013 3v1a3 3 0 01-3 3H9a5 5 0 00-5 5v2a5 5 0 005 5h8v1H9a6 6 0 01-6-6v-2a6 6 0 016-6h4a2 2 0 002-2v-1a2 2 0 00-2-2H9a6 6 0 01-6-6v-2a6 6 0 016-6h5z" />
    <path
      d="M14 5v2H9a3 3 0 00-3 3v2a3 3 0 003 3h4a5 5 0 015 5v1a5 5 0 01-5 5H9a3 3 0 00-3 3v2a3 3 0 003 3h8v2H9a5 5 0 01-5-5v-2a5 5 0 015-5h4a3 3 0 003-3v-1a3 3 0 00-3-3H9a5 5 0 01-5-5v-2a5 5 0 015-5h5z"
      fill="#fff"
    />
    <path d="M14 7v1H9a2 2 0 00-2 2v2a2 2 0 002 2h4a6 6 0 016 6v1a6 6 0 01-6 6H9a2 2 0 00-2 2v2a2 2 0 002 2h8v1H9a3 3 0 01-3-3v-2a3 3 0 013-3h4a5 5 0 005-5v-1a5 5 0 00-5-5H9a3 3 0 01-3-3v-2a3 3 0 013-3h5z" />
    <path d="M10 29v2H0v-2h10zM10 10v2H0v-2h10zM22 20v2H12v-2h10z" />
  </svg>
);

export default SvgComponent;
