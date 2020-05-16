import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={26} {...props}>
    <path d="M12 11C0 11 0 19 0 19c0 7 12 7 12 7h8V11h-8zm0 4v9c-9 0-9-4-9-4 0-5 9-5 9-5zM17 0h2v11h-2z" />
    <path d="M23.656 5.344l1.407 1.406L20 11.813 18 11l5.656-5.656z" />
  </svg>
);

export default SvgComponent;
