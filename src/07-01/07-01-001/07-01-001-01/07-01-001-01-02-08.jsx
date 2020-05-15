import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M26.344 32h2.843L53.75 56.563 52.344 58l-26-26z" />
    <path
      d="M4.25 1.438L22.813 20h2.843l11 11h-2.843l22.75 22.75-2.813 2.813L29.187 32h-2.843l-9-9h2.843L1.438 4.25 4.25 1.437z"
      fill="#fff"
    />
    <path d="M1.438 4.25L20.188 23h-2.844L0 5.656 1.438 4.25zM33.813 31h2.843L58 52.344l-1.438 1.406L33.813 31zM5.656 0l20 20h-2.843L4.25 1.437 5.656 0zM25.594 22L35 27.438V29H23v-2h7.313L23 22.781V22h2.594z" />
  </svg>
);

export default SvgComponent;
