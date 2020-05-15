import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M27 0l1.5 1.5h9v9L39 12V0H27z" />
    <path d="M1.406 3l3.875 3.719C8.54 9.976 13.03 10 18 10c4.97 0 9.461-.024 12.719-3.281l1.593-1.407 1.376 1.375-1.532 1.47A19.958 19.958 0 0118 14 19.958 19.958 0 013.844 8.156L0 4.406 1.406 3z" />
  </svg>
);

export default SvgComponent;