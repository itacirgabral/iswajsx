import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 16v9.9l1.414-1.415v-7.07h7.071L25.9 16H16z" />
    <path d="M.444 16l12.728 12.728a5 5 0 007.07 0l2.122-2.121c2.343-2.344 2.66-5.826.707-7.779l-4.243 4.243a3 3 0 11-4.242 4.243L1.858 14.586.444 16z" />
    <path d="M32.97.444l.708.707-13.435 13.435-.707-.707L32.97.444zM13.88 19.536l.707.707L6.1 28.728l-.708-.707 8.486-8.485zM15 2v9.9l1.414-1.415v-7.07h7.071L24.9 2H15z" />
    <path d="M19.243 7.657l8.485 8.485a4 4 0 005.657 0l1.414-1.414c2.734-2.734 3.05-6.85.707-9.192l-4.95 4.95c1.562 1.561 2.196 3.46 1.415 4.242a2 2 0 01-2.829 0l-8.485-8.485-1.414 1.414z" />
  </svg>
);

export default SvgComponent;
