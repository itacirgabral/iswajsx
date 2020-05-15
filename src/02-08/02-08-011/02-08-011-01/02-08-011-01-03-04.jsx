import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 3H.1l1.415 1.414h7.07v7.071L10 12.9V3z" />
    <path d="M23.435 2.293a6 6 0 00-8.485 0 5.992 5.992 0 00-1.768 4.243l.133 7.07a4.01 4.01 0 01-1.194 2.829l-.707.707a3 3 0 01-4.242 0 5 5 0 010-7.07L2.929 5.827a7 7 0 000 9.9l2.828 2.828a5 5 0 007.071 0l.708-.707a5.992 5.992 0 001.767-4.242l-.132-7.071a4.01 4.01 0 011.193-2.829 4 4 0 115.657 5.657l-2.122 2.121 1.415 1.414 2.121-2.12a6 6 0 000-8.486z" />
  </svg>
);

export default SvgComponent;
