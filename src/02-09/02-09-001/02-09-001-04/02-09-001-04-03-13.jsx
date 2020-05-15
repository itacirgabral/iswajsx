import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 0l-1.5 1.5h-9v9L0 12V0h12z" />
    <path d="M24.5 15A26.434 26.434 0 015.75 7.25l-.5-.5 1.438-1.438.5.5C11.62 10.247 17.735 11 24.5 11c6.765 0 12.879-.754 17.313-5.188L44.593 3 46 4.406 43.25 7.25A26.434 26.434 0 0124.5 15z" />
  </svg>
);

export default SvgComponent;
