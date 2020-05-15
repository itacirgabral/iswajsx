import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9.531 14.938C3.875 17.837 0 23.706 0 30.5 0 40.165 7.835 48 17.5 48S35 40.165 35 30.5c0-6.793-3.875-12.663-9.531-15.563l-.907 1.782C29.564 19.29 33 24.489 33 30.5 33 39.06 26.06 46 17.5 46 8.94 46 2 39.06 2 30.5c0-6.01 3.437-11.21 8.438-13.781l-.907-1.782z" />
    <path d="M28 11l-5-5-.719.719L26.563 11l-4.282 4.281L23 16l5-5z" />
    <path d="M24 10.5v1h-6v-1h6zM11 5l5-5 .719.719L12.437 5l4.282 4.281L16 10l-5-5z" />
    <path d="M15 4.5v1h6v-1h-6zM11 17l5-5 .719.719L12.437 17l4.282 4.281L16 22l-5-5z" />
    <path d="M15 16.5v1h6v-1h-6z" />
  </svg>
);

export default SvgComponent;