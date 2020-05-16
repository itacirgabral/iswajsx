import React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={30} {...props}>
    <path d="M15 15h8v15h-8zM0 15h13v2H0zM15 0h2v13h-2zM24.188 3l-4.875 10h2.218L26 3.875 24.187 3zM28 10l-3 3v2.813l4.438-4.407L28 10zM6 17l9 9v-2.813L8.812 17H6z" />
  </svg>
);

export default SvgComponent;
