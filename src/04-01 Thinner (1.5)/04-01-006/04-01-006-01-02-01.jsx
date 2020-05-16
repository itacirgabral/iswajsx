import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={8} {...props}>
    <path d="M0 2v6h6V7H1V2H0z" />
    <path d="M10 0a10.97 10.97 0 00-7.781 3.219l.719.719a9.956 9.956 0 0114.124 0L19 5.875l.719-.688L17.78 3.22A10.97 10.97 0 0010 0z" />
    <path
      d="M10 1a9.956 9.956 0 00-7.063 2.938l1.407 1.406A7.974 7.974 0 0110 3c2.21 0 4.209.896 5.656 2.344l1.969 1.968L19 5.875l-1.938-1.938A9.956 9.956 0 0010 1z"
      fill="#fff"
    />
    <path d="M10 3c-2.21 0-4.209.896-5.656 2.344l.718.718A6.96 6.96 0 0110 4a6.96 6.96 0 014.938 2.063L16.905 8l.719-.688-1.969-1.968A7.974 7.974 0 0010 3z" />
  </svg>
);

export default SvgComponent;
