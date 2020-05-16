import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={33} {...props}>
    <path d="M16 9h7.778L16 16.778V9z" />
    <path d="M2.919 1.575c1.757-1.757 5.872-.49 9.192 2.829l3.535 3.535-1.414 1.415-3.535-3.536C7.767 2.889 5.309 2.013 4.333 2.99c-.977.976-.808 4.142 2.121 7.07l16.264 16.264c2.928 2.929 6.094 3.098 7.07 2.121.977-.976.101-3.435-2.828-6.364L23.778 18.9l1.414-1.414 3.182 3.182c3.32 3.32 4.586 7.435 2.829 9.193l-1.414 1.414c-1.758 1.757-6.58 1.198-9.9-2.121L3.626 12.889c-3.32-3.32-3.88-8.142-2.122-9.9L2.92 1.576z" />
    <path d="M20 13h7.778L20 20.778V13z" />
  </svg>
);

export default SvgComponent;
