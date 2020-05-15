import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v10l2-2V2h6l2-2H0z" />
    <path d="M7.469 2.531L6.406 3.594l2.75 2.75A7.974 7.974 0 0111.5 12c0 2.21-.896 4.209-2.344 5.656l-4.281 4.282L5.938 23l4.28-4.281A9.472 9.472 0 0013 12c0-2.623-1.062-5-2.781-6.719l-2.75-2.75z" />
    <path d="M3.594 6.406L2.53 7.47l2.75 2.75C5.734 10.67 6 11.309 6 12c0 .69-.266 1.329-.719 1.781L1 18.062l1.063 1.063 4.28-4.281A4.01 4.01 0 007.5 12a4.01 4.01 0 00-1.156-2.844l-2.75-2.75z" />
    <path
      d="M6.406 3.594L3.594 6.406l2.75 2.75A4.01 4.01 0 017.5 12a4.01 4.01 0 01-1.156 2.844l-4.282 4.281 2.813 2.813 4.281-4.282A7.974 7.974 0 0011.5 12c0-2.21-.896-4.209-2.344-5.656l-2.75-2.75z"
      fill="#fff"
    />
    <path d="M1 11v3h16v-3H1z" />
  </svg>
);

export default SvgComponent;
