import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0l7 7-7 7V0zm1 2.438v9.124L14.594 7 10 2.437z" />
    <path d="M9 6v2H5.5a3.5 3.5 0 100 7H8a7 7 0 010 14H5.5a3.5 3.5 0 100 7H13v4H7.5a7.5 7.5 0 110-15H10a3 3 0 000-6H6.5A6.5 6.5 0 010 12.5V11c0-2.761 2.462-5 5.5-5H9z" />
    <path d="M10 2.438L14.594 7 10 11.563V2.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;