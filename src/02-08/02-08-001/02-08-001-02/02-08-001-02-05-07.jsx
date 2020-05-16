import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={16} {...props}>
    <path d="M23 3.272V16H10.272L23 3.272zm-1.016 2.43l-9.281 9.282 9.303.022-.022-9.303zM1.787 3.272a8 8 0 0111.314 0c1.795 1.795 7.07 2.829 7.07 2.829l-7.07 7.07s-1.034-5.275-2.829-7.07C7.93 3.757 4.763 3.124 3.201 4.686c-1.562 1.562-.296 5.361 2.828 8.486l-1.414 1.414C.71 10.68-.556 5.616 1.787 3.272z" />
    <path d="M21.984 5.703l.022 9.303-9.303-.022 9.28-9.281z" fill="#fff" />
  </svg>
);

export default SvgComponent;
