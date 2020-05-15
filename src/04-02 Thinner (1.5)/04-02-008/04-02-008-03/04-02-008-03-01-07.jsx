import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M28 9.5L24.5 13l-.719-.719L26.594 9.5 23.78 6.719 24.5 6 28 9.5z" />
    <path d="M25 10h-4V9h4v1zM20 15.5l3.5 3.5.719-.719-2.813-2.781 2.813-2.781L23.5 12 20 15.5z" />
    <path d="M23 16h4v-1h-4v1zM15 9.5L11.5 13l-.719-.719L13.594 9.5 10.78 6.719 11.5 6 15 9.5z" />
    <path d="M12 10H8V9h4v1zM7 15.5l3.5 3.5.719-.719L8.406 15.5l2.813-2.781L10.5 12 7 15.5z" />
    <path d="M10 16h4v-1h-4v1z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
  </svg>
);

export default SvgComponent;
