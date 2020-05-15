import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 15v15h15V15H0zM0 0h2v15H0zM12.594 4.406L2 15h2.813l9.218-9.188-1.437-1.406z" />
    <path d="M18.594 10.594L14.187 15H15v2l5-5-1.406-1.406z" />
  </svg>
);

export default SvgComponent;