import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5.781 2.219L0 8v21h12V13L5.781 2.219z" />
    <path d="M5.344 5.469L2 8.812V27h4V6.594l-.656-1.125z" fill="#fff" />
    <path d="M12 20v2h8v-2h-8zM13.438-.063l-2.844 10.594L12 13 15.375.437l-1.938-.5z" />
  </svg>
);

export default SvgComponent;