import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 15h15v15H0zM11.594 3.406l1.437 1.406L2.812 15H0L11.594 3.406z" />
    <path d="M8 0v15H6V0h2zM19.594 9.594L21 11l-6 6v-2h-.844l5.438-5.406z" />
  </svg>
);

export default SvgComponent;