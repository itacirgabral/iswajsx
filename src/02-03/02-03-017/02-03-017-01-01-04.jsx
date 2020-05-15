import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2.828 20.929L23.335.423l.707.707L3.536 21.636l-.708-.707zM24.012 9.007l5.5 5.5-5.5 5.5v-11z" />
    <path d="M9.9 28L0 18.1V28h9.9z" />
    <path d="M6.364 24.464L26.87 3.958l.707.707L7.071 25.172l-.707-.708z" />
    <path
      d="M3.536 21.636L24.042 1.13l2.828 2.828L6.364 24.464l-2.828-2.828z"
      fill="#fff"
    />
    <path d="M14 2l.022 2.01c.238 2.269 1.806 4.546 3.624 6.365 1.819 1.818 4.096 3.386 6.364 3.624v1.016a10.97 10.97 0 01-7.778-3.226 10.97 10.97 0 01-3.226-7.778V2.022L14 2zM16.012 17.007l5.5 5.5-5.5 5.5v-11zM6 10l.022 2.01c.238 2.269 1.806 4.546 3.624 6.365 1.819 1.818 4.096 3.386 6.364 3.624v1.016a10.97 10.97 0 01-7.778-3.226 10.97 10.97 0 01-3.226-7.778v-1.989L6 10z" />
  </svg>
);

export default SvgComponent;
