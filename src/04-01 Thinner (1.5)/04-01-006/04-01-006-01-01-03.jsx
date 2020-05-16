import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={44} {...props}>
    <path d="M27 2v6h-6V7h5V2h1z" />
    <path d="M17 0a10.97 10.97 0 017.781 3.219l-.718.719a9.956 9.956 0 00-14.125 0L8 5.875l-.719-.688L9.22 3.22A10.97 10.97 0 0117 0z" />
    <path
      d="M17 1a9.956 9.956 0 017.063 2.938l-1.407 1.406A7.974 7.974 0 0017 3c-2.21 0-4.209.896-5.656 2.344L9.375 7.312 8 5.875l1.938-1.938A9.956 9.956 0 0117 1z"
      fill="#fff"
    />
    <path d="M17 3c2.21 0 4.209.896 5.656 2.344l-.718.718A6.96 6.96 0 0017 4a6.96 6.96 0 00-4.938 2.063L10.095 8l-.719-.688 1.969-1.968A7.974 7.974 0 0117 3zM17.5 9C7.835 9 0 16.835 0 26.5S7.835 44 17.5 44 35 36.165 35 26.5 27.165 9 17.5 9zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
  </svg>
);

export default SvgComponent;
