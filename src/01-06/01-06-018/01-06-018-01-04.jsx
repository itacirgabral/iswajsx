import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={19} {...props}>
    <path d="M4 4h15v15H4z" />
    <path
      d="M3.25 1.563c-.38.034-.656.312-.656.312l-.469.438c.088-.089.104-.073-.25.28-.707.708 0 1.407 0 1.407L4 6.125 6.125 4 4.25 2.156C4.162 2.068 4 1.875 4 1.875c-.265-.265-.522-.333-.75-.313zM6 6v2H4v3h2v6h11v-6h2V8h-2V6H6z"
      fill="#fff"
    />
    <path d="M1.169 1.88s-1.415 1.413 0 2.828l2.828 2.828L7.533 4 4.704 1.172s-1.414-1.414-2.828 0l-.707.707zm.707.706l.707-.707s.707-.707 1.414 0L6.118 4 3.997 6.122 1.876 4s-.707-.707 0-1.414z" />
  </svg>
);

export default SvgComponent;
