import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 8h15v15H8zM7 0c1.656 0 3 1.344 3 3 0 .979-.461 1.859-1.188 2.406L10.313 8H8L6.844 5.969C5.264 5.884 4 4.6 4 3c0-1.656 1.344-3 3-3zM15 0c-1.656 0-3 1.344-3 3 0 .979.461 1.859 1.188 2.406L11.688 8H14l1.156-2.031C16.736 5.884 18 4.6 18 3c0-1.656-1.344-3-3-3zM1.625 8.813L8 15.186V18L.219 10.219l1.406-1.406z" />
  </svg>
);

export default SvgComponent;
