import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 9l7 7v15H1V16l7-7z" />
    <path fill="#fff" d="M8 21H1v3h7z" />
    <path d="M2.094 2.844l2.531 9.531L3 14 .156 3.375l1.938-.531zM9 0H7v10h2zM13.906 2.844l1.938.531L13 14l-1.625-1.625 2.531-9.531zM20.594 9.594L22 11l-7 7v-2l-.406-.406 6-6z" />
  </svg>
);

export default SvgComponent;
