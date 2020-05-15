import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 12L12 0H0v12z" />
    <path d="M37.594 3l-3.875 3.719C30.46 9.976 25.97 10 21 10c-4.97 0-9.461-.024-12.719-3.281L6.687 5.312 5.313 6.688l1.532 1.47A19.958 19.958 0 0021 14a19.958 19.958 0 0014.156-5.844L39 4.406 37.594 3z" />
  </svg>
);

export default SvgComponent;