import React from "react";

const SvgComponent = (props) => (
  <svg width={46} height={15} {...props}>
    <path d="M34 0l1.5 1.5h9v9L46 12V0H34z" />
    <path d="M21.5 15a26.434 26.434 0 0018.75-7.75l.5-.5-1.438-1.438-.5.5C34.38 10.247 28.265 11 21.5 11c-6.765 0-12.879-.754-17.313-5.188L1.408 3 0 4.406 2.75 7.25A26.434 26.434 0 0021.5 15z" />
  </svg>
);

export default SvgComponent;
