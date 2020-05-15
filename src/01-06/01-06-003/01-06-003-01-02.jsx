import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 14v15h8V14H9z" />
    <path fill="#fff" d="M10 15h3v13h-3z" />
    <path d="M19.281 6.063l-3.656 6.343-.344.594-.594 1H17l.344-.594L21 7.062l-1.719-1z" />
    <path d="M13 0h2v14h-2z" />
    <path d="M8.719 6.063L7 7.063l3.656 6.343L11 14h2.313l-.594-1-.344-.594-3.656-6.344zM1 14h8v2H1zM.813 22.75l-.5 1.906L9 27v-2.094L.812 22.75z" />
  </svg>
);

export default SvgComponent;
