import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 15h8v15h-8zM0 15h15v2H0zM15 0h2v15h-2zM24.188 3l-5.844 12h2.219L26 3.875 24.188 3z" />
    <path d="M28 10l-5 5v2.813l6.438-6.407L28 10zM4.406 11.156l-2.125 2.125L15 26v-4.25L4.406 11.156z" />
  </svg>
);

export default SvgComponent;
