import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3.343 3.1a4 4 0 000 5.657l.707.707L5.464 8.05l-.707-.707a2 2 0 010-2.828l.707-.707a3 3 0 014.243 0l7.071 7.07-1.26-4.618a1.982 1.982 0 01.553-1.745 3 3 0 014.243 0l1.414 1.414c2.321 2.321 3.535 9.192 3.535 9.192l7.072-7.07s-6.871-1.215-9.193-3.536L21.728 3.1a5 5 0 00-7.071 0 3.99 3.99 0 00-1.017 1.811l-2.519-2.519a5 5 0 00-7.07 0l-.708.708z" />
    <path d="M.515 13H9V4.515L7.586 5.929v5.657H1.929L.515 13z" />
  </svg>
);

export default SvgComponent;
