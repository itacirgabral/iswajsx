import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={24} {...props}>
    <path d="M14 9h15v15H14z" />
    <path fill="#fff" d="M16 11h11v11H16z" />
    <path d="M9 0v7h2V2h3v7h2V0H9zM0 9h14v2H0z" />
    <path d="M8.688 3.594l-1.876.687L14 24v-5.844L8.687 3.594z" />
  </svg>
);

export default SvgComponent;
