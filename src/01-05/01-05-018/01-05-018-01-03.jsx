import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={27} {...props}>
    <path d="M12 0L6 6v21h12V6l-6-6zM1.406 16.594L6 21.187V24l-6-6 1.406-1.406z" />
  </svg>
);

export default SvgComponent;
