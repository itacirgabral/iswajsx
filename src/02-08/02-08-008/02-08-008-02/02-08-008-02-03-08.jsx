import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={20} {...props}>
    <path d="M28 0v11.314l-1.414-1.415V1.414H18.1L16.686 0H28z" />
    <path d="M23.05 6.364l-12.02 12.02a4 4 0 01-5.657 0l-2.829-2.828a8 8 0 010-11.313l7.071 7.07-2.121 2.122c-1.172 1.172-1.488 2.755-.707 3.536a2 2 0 002.828 0L21.636 4.95l1.414 1.414z" />
  </svg>
);

export default SvgComponent;
