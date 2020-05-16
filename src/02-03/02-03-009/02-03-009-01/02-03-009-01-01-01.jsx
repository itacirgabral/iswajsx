import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={30} {...props}>
    <path d="M7.5 0l-7 7h14l-7-7zM4 7v23l18-18-1.406-1.406L6 25.188V7H4z" />
    <path d="M9 7V17.937l9.469-9.468-1.407-1.406L11 13.125V7H9z" />
    <path d="M6 7v18.188l14.594-14.594-2.125-2.125L9 17.938V7H6z" fill="#fff" />
  </svg>
);

export default SvgComponent;
