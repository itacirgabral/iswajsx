import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M25 7v9.9l1.414-1.415v-7.07h7.071L34.9 7H25z" />
    <path d="M9.444 7l12.728 12.728a5 5 0 007.07 0l2.122-2.121c2.343-2.344 2.66-5.826.707-7.779l-4.243 4.243a3 3 0 11-4.242 4.243L10.858 5.586 9.444 7z" />
    <path d="M2.373 31.042l.707.707 20.506-20.506-.707-.707L2.373 31.042zM28.536 4.879l.707.707 4.242-4.243-.707-.707-4.242 4.243zM0 16v9.9l1.414-1.415v-7.07h7.071L9.9 16H0z" />
    <path d="M4.243 21.657l8.485 8.485a4 4 0 005.657 0l1.414-1.414c2.734-2.734 3.05-6.85.707-9.192l-4.95 4.95c1.562 1.561 2.196 3.46 1.415 4.242a2 2 0 01-2.829 0l-8.485-8.485-1.414 1.414z" />
  </svg>
);

export default SvgComponent;
