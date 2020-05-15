import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M29.5 10C19.835 10 12 17.835 12 27.5S19.835 45 29.5 45 47 37.165 47 27.5 39.165 10 29.5 10zm0 2C38.06 12 45 18.94 45 27.5 45 36.06 38.06 43 29.5 43 20.94 43 14 36.06 14 27.5 14 18.94 20.94 12 29.5 12zM7.486 23.042v-7.071H6.469v6.055H.415v1.016h7.07z" />
    <path d="M5.01 19.86l-.706.707L.06 16.324l.707-.707 4.243 4.243zM15.264 15.264V8.193h-1.017v6.054H8.193v1.017h7.07z" />
    <path d="M12.789 12.082l-.707.707-4.243-4.243.707-.707 4.243 4.243zM23.042 7.486V.415h-1.016v6.054H15.97v1.017h7.071z" />
    <path d="M20.567 4.304l-.707.707L15.617.768l.707-.707 4.243 4.243z" />
  </svg>
);

export default SvgComponent;
