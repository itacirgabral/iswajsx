import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={30} {...props}>
    <path d="M10 15v15h8V15h-8zM10 0v13h2V0h-2zM18.5 2l-6.344 11h2.281L20.22 3 18.5 2zM0 15v2h8v-2H0zM21.656 9.344L18 13h2.813l2.25-2.25-1.407-1.406zM.844 23.469l-.5 1.937L8 27.438v-2.063L.844 23.469z" />
  </svg>
);

export default SvgComponent;
