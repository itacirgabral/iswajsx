import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 2v8h74V2H48v6H27V2H0z" />
    <path d="M48 2v6H27V2h21z" fill="#fff" />
    <path d="M37.5 0c-3.666 0-6.724 2.568-7.5 6h1.156A6.729 6.729 0 0137.5 1.5 6.729 6.729 0 0143.844 6H45c-.776-3.432-3.834-6-7.5-6z" />
  </svg>
);

export default SvgComponent;
