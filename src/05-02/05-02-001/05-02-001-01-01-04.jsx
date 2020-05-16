import React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={30} {...props}>
    <path d="M1.406 0L0 1.406 28.594 30H30V6h-2v20.594L1.406 0z" />
    <path
      d="M1.406 0L28 26.594V6h2V5h-3v19.188L2.844 0H1.406zM0 1.406v1.438L27.188 30h1.406L0 1.406z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
