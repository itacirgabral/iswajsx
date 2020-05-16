import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={24} {...props}>
    <path d="M14 11h15v13H14z" />
    <path fill="#fff" d="M16 13h6v9h-6z" />
    <path d="M9 0v7h2V2h3v7h2V0H9zM0 9h13v2H0z" />
    <path d="M8.688 3.594l-1.876.687L13 21.25v-5.844L8.687 3.594z" />
  </svg>
);

export default SvgComponent;
