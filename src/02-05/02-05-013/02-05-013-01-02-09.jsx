import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 7v23H9V7h2z" />
    <path d="M1.908 16.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707c-3.905-3.905-10.237-3.905-14.142 0L1.201 18.88l-.707-.707 1.414-1.415z" />
    <path d="M13.219 21L21 13.219V21h-7.781zm2.406-1H20v-4.344L15.625 20zM17 7l-7-7-7 7h14zm-2.438-1H5.438L10 1.437 14.563 6z" />
    <path
      d="M14.563 6L10 1.437 5.437 6h9.125zM15.625 20L20 15.656V20h-4.375z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;