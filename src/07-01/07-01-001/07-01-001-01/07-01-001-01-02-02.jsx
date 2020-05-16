import React from "react";

const SvgComponent = (props) => (
  <svg width={58} height={58} {...props}>
    <path d="M31.656 32h-2.843L4.25 56.563 5.656 58l26-26z" />
    <path
      d="M53.75 1.438L35.187 20h-2.843l-11 11h2.843L1.438 53.75l2.813 2.813L28.813 32h2.843l9-9h-2.843l18.75-18.75-2.813-2.813z"
      fill="#fff"
    />
    <path d="M56.563 4.25L37.813 23h2.843L58 5.656 56.562 4.25zM24.188 31h-2.844L0 52.344l1.438 1.406L24.188 31zM52.344 0l-20 20h2.843L53.75 1.437 52.344 0zM32.406 22L23 27.438V29h12v-2h-7.313L35 22.781V22h-2.594z" />
  </svg>
);

export default SvgComponent;
