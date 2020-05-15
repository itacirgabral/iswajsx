import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0H.515l1.414 1.414h5.657v5.657L9 8.485V0z" />
    <path d="M18.9 4.243l-7.072 7.07a4 4 0 01-5.656 0c-1.172-1.17-.855-3.387.707-4.949l-.707-.707L2.636 2.12a6 6 0 000 8.486l2.121 2.12a5 5 0 007.071 0l7.779-7.777-.708-.707z" />
  </svg>
);

export default SvgComponent;
