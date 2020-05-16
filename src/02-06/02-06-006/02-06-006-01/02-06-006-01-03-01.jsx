import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={32} {...props}>
    <path d="M0 0v10l2-2V2h6l2-2H0z" />
    <path d="M3.938 6.063L2.875 7.125l3.531 3.469c.362.362.594.854.594 1.406 0 .552-.232 1.044-.594 1.406l-3.062 2.938A7.974 7.974 0 001 22c0 2.21.896 4.209 2.344 5.656L7.75 32l1.063-1.063-4.407-4.343A6.476 6.476 0 012.5 22c0-1.795.73-3.417 1.906-4.594L7.47 14.47A3.48 3.48 0 008.5 12a3.48 3.48 0 00-1.031-2.469L3.937 6.062z" />
    <path
      d="M6.063 3.938L3.938 6.062l3.53 3.47A3.48 3.48 0 018.5 12a3.48 3.48 0 01-1.031 2.469l-3.063 2.937A6.476 6.476 0 002.5 22c0 1.795.73 3.417 1.906 4.594l4.407 4.343 2.124-2.125-4.406-4.343A3.48 3.48 0 015.5 22a3.48 3.48 0 011.031-2.469l3.063-2.937A6.476 6.476 0 0011.5 12c0-1.795-.73-3.417-1.906-4.594L6.063 3.938z"
      fill="#fff"
    />
    <path d="M7.125 2.875L6.062 3.938l3.532 3.468A6.476 6.476 0 0111.5 12c0 1.795-.73 3.417-1.906 4.594L6.53 19.53A3.48 3.48 0 005.5 22a3.48 3.48 0 001.031 2.469l4.407 4.343L12 27.75l-4.406-4.344A1.982 1.982 0 017 22c0-.552.232-1.044.594-1.406l3.062-2.938A7.974 7.974 0 0013 12c0-2.21-.896-4.209-2.344-5.656L7.125 2.875z" />
  </svg>
);

export default SvgComponent;
