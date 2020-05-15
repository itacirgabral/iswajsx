import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 11v15h8V11h-8zm-2.125.094C-.013 11.973 0 19 0 19c0 5.193 6.59 6.498 10 6.844v-1.907C3.012 23.392 3 20 3 20c0-3.493 4.352-4.558 7-4.875v-4.031c-.039.003-.086-.004-.125 0z" />
    <path fill="#fff" d="M13 12h6v13h-6z" />
    <path d="M13 0h2v9h-2zM8.344 5.344L6.938 6.75 9.188 9H12L8.344 5.344z" />
  </svg>
);

export default SvgComponent;
