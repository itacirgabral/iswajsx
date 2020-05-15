import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 2H.686l1.415 1.414h8.485V11.9L12 13.314V2z" />
    <path d="M28.97.586L12.708 16.849a4 4 0 01-5.657 0c-1.171-1.171-.222-4.02 2.122-6.364L3.515 4.828a8 8 0 000 11.314l2.121 2.121a6 6 0 008.485 0L30.385 2 28.97.586z" />
  </svg>
);

export default SvgComponent;