import React from "react";

const SvgComponent = (props) => (
  <svg width={46} height={22} {...props}>
    <path d="M0 12.314V1h11.314L0 12.314z" />
    <path d="M4.95 7.364l9.9 9.9a5 5 0 007.07 0 4.978 4.978 0 001.459-3.536l.31-7.778c-.081-.566.177-1.239.706-1.768.781-.781 1.89-.94 2.475-.354l5.657 5.657c2.953 2.954 3.535 12.021 3.535 12.021l9.9-9.9s-9.068-.582-12.02-3.535l-5.658-5.657a5 5 0 00-7.07 0 4.978 4.978 0 00-1.46 3.536l-.309 7.778c.08.565-.178 1.239-.707 1.768-.78.78-1.889.939-2.475.353l-9.899-9.9L4.95 7.365z" />
  </svg>
);

export default SvgComponent;
