import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 14v15h8V14H9z" />
    <path fill="#fff" d="M10 15h6v13h-6z" />
    <path d="M19.281 6.063L15.844 12h2.312L21 7.062l-1.719-1zM13 0h2v12h-2zM8.719 6.063L7 7.063 9.844 12h2.312L8.72 6.062zM1 14h6v2H1zM.813 22.75l-.5 1.906L7 26.438v-2.032L.812 22.75z" />
  </svg>
);

export default SvgComponent;