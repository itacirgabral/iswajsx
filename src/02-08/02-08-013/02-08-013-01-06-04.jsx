import React from "react";

const SvgComponent = (props) => (
  <svg width={31} height={24} {...props}>
    <path d="M7 5H.636l.707.707h4.95v4.95l.707.707V5z" />
    <path d="M21.142.05L9.122 12.071c-1.172 1.172-2.755 1.488-3.536.707a2 2 0 010-2.828L2.05 6.414a4 4 0 000 5.657l.707.707a5 5 0 007.071 0L21.85.758 21.142.05zM16 14H9.636l.707.707h4.95v4.95l.707.707V14z" />
    <path d="M30.142 9.05l-12.02 12.021c-1.172 1.172-2.755 1.488-3.536.707a2 2 0 010-2.828l-3.536-3.536a4 4 0 000 5.657l.707.707a5 5 0 007.071 0L30.85 9.758l-.707-.708z" />
  </svg>
);

export default SvgComponent;
